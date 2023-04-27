import axios from 'axios';

const ApiKey = '8b04ba9a7cbc46ae93894d6a98ed2c29';
const ApiUrl = 'https://api.rawg.io/api';

const fetchApi = async (endpoint) => {
  try {
    const response = await axios.get(`${ApiUrl}${endpoint}`);
    const result = response.data
    return result;
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

const currentYear = new Date().getFullYear()
const nextYear = currentYear + 1

export default {
  getGames: async () => {
    const response = await fetchApi(`/games?key=${ApiKey}`);
    return response.results;
  },
  getUpComingGames: async () => {
    const response = await fetchApi(`/games?key=${ApiKey}&dates=${currentYear}-01-01,${nextYear}-01-01&ordering=-released`)//lançamentos ano atual e prox
    return response.results;
  },
  getImage: async (game,height) => {
    if (!game.background_image) {
      // retorna uma imagem padrão ou null
      return null;
    }
    const imgCode = game.background_image.split('/').pop().split('.')[0];
    return `https://media.rawg.io/media/games/${imgCode}/${imgCode}.jpg?height=${height}`
  }
};
