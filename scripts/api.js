const url = 'https://shazam.p.rapidapi.com/search?term=ceza&locale=tr&offset=0&limit=10';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'd3e1b88b5amsh5d3244362967668p117b86jsn38a0d42d8561',
        'x-rapidapi-host': 'shazam.p.rapidapi.com'
    }
};

export default class API {
    async getPopular() {
        const data1 = await this.searchMusic("Linkin Park");
        const data2 = await this.searchMusic("eminem");
        return [...data1, ...data2];
    }

    async searchMusic(query) {
        const url = `https://shazam.p.rapidapi.com/search?term=${query}&locale=tr`;

        const res = await fetch(url, options);
        const data = await res.json();

        const formatted = data.tracks.hits.map((item) => item.track);
        return formatted;
    }
}




















