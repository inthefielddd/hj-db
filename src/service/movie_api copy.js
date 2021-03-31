class MovieApi {
    constructor(httpClient) {
        this.movie = httpClient;
    }

    async popular() {
        const response = await this.movie.get("/movie/popular", {
            params: {
                language: "en-US",
                page: 1,
                key: process.env.REACT_APP_MOVIE_API_KEY,
            },
        });
        return response.data.items;
    }
}
export default MovieApi;
