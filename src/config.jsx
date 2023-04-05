const ApiKey = '8b04ba9a7cbc46ae93894d6a98ed2c29'
const ApiUrl = 'https://api.rawg.io/api'

const fetchApi = async (endpoint) => {
    const req = await fetch(`${ApiUrl}${endpoint}`)
    const json = await req.json()
    return json
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'game',
                title: 'Games',
                item: await fetchApi(`/games?key=${ApiKey}`)
            }
        ]
    }
}