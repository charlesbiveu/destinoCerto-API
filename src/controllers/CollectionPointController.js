const CollectionPoint = require('../models/CollectionPoint');
const { validateAddress } = require('../utils/validation');
const { getMapLocal, getGoogleMapsLink } = require('../services/mapService');

const createCollectionPoint = async (req, res) => {
  try {
    const {
      name,
      description,
      recycle_types,
      postalcode,
      street,
      neighborhood,
      city,
      state,
      number,
    } = req.body;

    // Validar endereço
    const validationError = validateAddress(
      postalcode,
      street,
      neighborhood,
      city,
      state,
      number
    );

    if (validationError)
      return res
        .status(validationError.status)
        .json({ error: validationError.message });

    // Obter ID do usuário a partir do token
    const userId = req.userId;

    // Buscar dados de localização
    const locationData = await getMapLocal(postalcode);
    let latitude = locationData.lat;
    let longitude = locationData.lon;
    let map_link = await getGoogleMapsLink(locationData);

    // Criar ponto de coleta
    const collectionPoint = await CollectionPoint.create({
      name,
      description,
      recycle_types,
      postalcode: postalcode.replace(/[^\d]+/g, ''),
      street,
      neighborhood,
      city,
      state,
      number,
      latitude,
      longitude,
      map_link,
      user_id: userId,
    });

    return res.status(201).json(collectionPoint);
  } catch (error) {
    console.error('Erro interno do servidor:', error.message);
    return res
      .status(500)
      .json({ error: 'Erro interno do servidor // Internal Server Error' });
  }
};

const listUserCollectionPoints = async (req, res) => {
  try {
    const userId = req.userId;
    const collectionPoints = await CollectionPoint.findAll({
      where: { user_id: userId },
    });
    return res.status(200).json(collectionPoints);
  } catch (error) {
    console.error('Erro interno do servidor:', error);
    return res
      .status(500)
      .json({ error: 'Erro interno do servidor // Internal Server Error' });
  }
};

const getCollectionPointById = async (req, res) => {
  try {
    const userId = req.userId;
    const localId = req.params.local_id;

    const collectionPoint = await CollectionPoint.findOne({
      where: {
        id: localId,
        user_id: userId,
      },
    });

    if (!collectionPoint) {
      return res
        .status(404)
        .json({ error: 'Local não encontrado // Collection point not found' });
    }

    return res.status(200).json(collectionPoint);
  } catch (error) {
    console.error('Erro interno do servidor:', error.message);
    return res
      .status(500)
      .json({ error: 'Erro interno do servidor // Internal Server Error' });
  }
};

const deleteCollectionPoint = async (req, res) => {
  try {
    const userId = req.userId;
    const localId = req.params.local_id;

    const collectionPoint = await CollectionPoint.findOne({
      where: {
        id: localId,
        user_id: userId,
      },
    });

    if (!collectionPoint) {
      return res
        .status(404)
        .json({ error: 'Local não encontrado // Collection point not found' });
    }

    await collectionPoint.destroy();
    return res.status(200).json({
      message:
        'Local excluído com sucesso // Collection point successfully deleted',
    });
  } catch (error) {
    console.error('Erro interno do servidor:', error.message);
    return res
      .status(500)
      .json({ error: 'Erro interno do servidor // Internal Server Error' });
  }
};

const updateCollectionPoint = async (req, res) => {
  try {
    const userId = req.userId;
    const localId = req.params.local_id;
    const {
      name,
      description,
      recycle_types,
      postalcode,
      street,
      neighborhood,
      city,
      state,
      number,
    } = req.body;

    // Validar endereço
    const validationError = validateAddress(
      postalcode,
      street,
      neighborhood,
      city,
      state,
      number
    );
    if (validationError)
      return res
        .status(validationError.status)
        .json({ error: validationError.message });

    const collectionPoint = await CollectionPoint.findOne({
      where: {
        id: localId,
        user_id: userId,
      },
    });

    if (!collectionPoint) {
      return res
        .status(404)
        .json({ error: 'Local não encontrado // Collection point not found' });
    }

    // Atualizar ponto de coleta
    collectionPoint.name = name;
    collectionPoint.description = description;
    collectionPoint.recycle_types = recycle_types;
    const oldPostalcode = collectionPoint.postalcode;
    collectionPoint.postalcode = postalcode.replace(/[^\d]+/g, '');
    collectionPoint.street = street;
    collectionPoint.neighborhood = neighborhood;
    collectionPoint.city = city;
    collectionPoint.state = state;
    collectionPoint.number = number;

    // Buscar dados de localização se o CEP tiver sido alterado
    if (oldPostalcode !== collectionPoint.postalcode) {
      const locationData = await getMapLocal(collectionPoint.postalcode);
      collectionPoint.latitude = locationData.lat;
      collectionPoint.longitude = locationData.lon;
      collectionPoint.map_link = await getGoogleMapsLink(locationData);
    }

    await collectionPoint.save();
    return res.status(200).json(collectionPoint);
  } catch (error) {
    console.error('Erro interno do servidor:', error.message);
    return res
      .status(500)
      .json({ error: 'Erro interno do servidor // Internal Server Error' });
  }
};

const getCollectionPointMapLink = async (req, res) => {
  try {
    const userId = req.userId;
    const localId = req.params.local_id;

    const collectionPoint = await CollectionPoint.findOne({
      where: {
        id: localId,
        user_id: userId,
      },
    });

    if (!collectionPoint) {
      return res
        .status(404)
        .json({ error: 'Local não encontrado // Collection point not found' });
    }

    if (!collectionPoint.map_link) {
      const locationData = await getMapLocal(collectionPoint.postalcode);
      collectionPoint.latitude = locationData.lat;
      collectionPoint.longitude = locationData.lon;
      collectionPoint.map_link = await getGoogleMapsLink(locationData);
      await collectionPoint.save();
    }

    if (!collectionPoint.map_link) {
      return res.status(404).json({
        error:
          'O CEP não foi encontrado, então o link para o Google Maps é nulo // The postal code was not found, so the Google Maps link is null',
      });
    }

    return res.status(200).json({ map_link: collectionPoint.map_link });
  } catch (error) {
    console.error('Erro interno do servidor:', error.message);
    return res
      .status(500)
      .json({ error: 'Erro interno do servidor // Internal Server Error' });
  }
};

module.exports = {
  createCollectionPoint,
  listUserCollectionPoints,
  getCollectionPointById,
  deleteCollectionPoint,
  updateCollectionPoint,
  getCollectionPointMapLink,
};
