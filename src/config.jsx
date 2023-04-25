import axios from 'axios';

const ApiKey = '8b04ba9a7cbc46ae93894d6a98ed2c29';
const ApiUrl = 'https://api.rawg.io/api';

const currentYear = new Date().getFullYear()
const nextYear = currentYear + 1

const fetchApi = async (endpoint) => {
  try {
    const response = await axios.get(`${ApiUrl}${endpoint}`);
    const result = response.data
    return result;
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};


export default {
  getGamesList: async () => {
    return [
      {
        slug: 'game-list',
        title: 'Games',
        items: await fetchApi(`/games?key=${ApiKey}`),
      },
    ];
  },
  getToBeReleased: async () => {
    return [
      {
        slug: 'beReleased',
        title: 'ToBeReleased',
        items: await fetchApi(`/games?key=${ApiKey}&dates=${currentYear}-01-01,${nextYear}-01-01&ordering=-added`)
      }
    ]
  }
};
