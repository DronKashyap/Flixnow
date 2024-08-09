
const apikey= process.env.APIKEY

const requests={
    fetchpopular: `/3/movie/popular${apikey}`,
    fetchnowplaying: `/3/movie/now_playing${apikey}`,
    fetchtoprated: `/3/movie/top_rated${apikey}`,
    fetchupcoming: `/3/movie/upcoming${apikey}`
}

export default requests;
