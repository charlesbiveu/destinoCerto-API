const CollectionPoint = require('../models/CollectionPoint');

const createCollectionPoint = async (req, res) => {
  try {
    const collectionPoint = await CollectionPoint.create(req.body);
    return res.status(201).json(collectionPoint);
  } catch (error) {
    console.error('Internal Server Error:', error);
    return res.status(500).json({ error: 'Erro interno do servidor // Internal Server Error' });
  }
};


module.exports = {
  createCollectionPoint,

};
