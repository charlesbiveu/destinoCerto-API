const RecycleType = require('../models/RecycleType');

const listAll = async (req, res) => {
  try {
    const recycleTypes = await RecycleType.findAll();
    return res.status(200).json(recycleTypes);
  } catch (error) {
    console.error('Internal Server Error:', error);
    return res.status(500).json({ error: 'Erro interno do servidor // Internal Server Error' });
  }
};

module.exports = {
  listAll
};
