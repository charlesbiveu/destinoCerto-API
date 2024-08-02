const axios = require('axios');

const getCepData = async (cep) => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    if (response.data.erro) {
      return null;
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching CEP data:', error);
    return null;
  }
};

module.exports = {
  getCepData
};
