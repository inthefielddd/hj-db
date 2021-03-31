class MovieApi {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: "GET",
            redirect: "follow",
        };
    }

    //인기있는 영화
    async popular() {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${this.key}&language=en-US&page=1&key=${this.key}`,
            this.getRequestOptions
        );
        const data = await response.json();
        return data.results;
    }

    //개봉예정
    async upcoming() {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.key}&language=en-US&page=1&key=${this.key}`,
            this.getRequestOptions
        );
        const data = await response.json();
        return data.results;
    }

    //인기순위
    async topRated() {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.key}&language=en-US&page=1&key=${this.key}`,
            this.getRequestOptions
        );
        const data = await response.json();
        return data.results;
    }
}
export default MovieApi;
