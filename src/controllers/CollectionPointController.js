const CollectionPoint = require('../models/CollectionPoint');
const RecycleType = require('../models/RecycleType');
const { validateAddress } = require('../utils/validation');
const { getMapLocal, getGoogleMapsLink } = require('../services/mapService');

const createCollectionPoint = async (req, res) => {
  try {
    const { name, description, postalcode, street, neighborhood, city, state, number, recycle_types } = req.body;

    // Validate address
    const validationError = validateAddress(postalcode, street, neighborhood, city, state, number);
    if (validationError) return res.status(validationError.status).json({ error: validationError.message });

    // Check if recycle types are provided and exist
    if (!recycle_types || !Array.isArray(recycle_types) || recycle_types.length === 0) {
      return res.status(400).json({ error: 'Tipos de reciclagem são obrigatórios // Recycle types are required' });
    }
    const validRecycleTypes = await RecycleType.findAll({ where: { id: recycle_types } });
    if (validRecycleTypes.length !== recycle_types.length) {
      return res.status(400).json({ error: 'Um ou mais tipos de reciclagem são inválidos // One or more recycle types are invalid' });
    }

    // Get user ID from token
    const userId = req.userId;

    // Fetch location data
    const locationData = await getMapLocal(postalcode);
    let latitude = null;
    let longitude = null;
    let map_link = null;
    if (locationData) {
      latitude = locationData.lat;
      longitude = locationData.lon;
      map_link = await getGoogleMapsLink(locationData);
    } else {
      console.error('Não foi possível obter a localização do mapa: Erro ao chamar a API de mapas');
    }

    // Create collection point
    const collectionPoint = await CollectionPoint.create({
      name,
      description,
      postalcode: postalcode.replace(/[^\d]+/g, ''),
      street,
      neighborhood,
      city,
      state,
      number,
      latitude,
      longitude,
      map_link,
      user_id: userId
    });

    // Associate recycle types
    await collectionPoint.addRecycleTypes(validRecycleTypes);

    return res.status(201).json(collectionPoint);
  } catch (error) {
    console.error('Internal Server Error:', error);
    return res.status(500).json({ error: 'Erro interno do servidor // Internal Server Error' });
  }
};

module.exports = {
  createCollectionPoint,
};
