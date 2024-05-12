import axios from "axios";

export const apiKey = process.env.REACT_APP_API_URL;

export class BrainFlixApi {
    constructor(apiKey) {
        this.apiKey = apiKey
        this.baseUrl = "https://unit-3-project-api-0a5620414506.herokuapp.com"
    }

    async getVideos() {
        return await axios.get(`${this.baseUrl}/videos/?api_key=${this.apiKey}`);
    }

    async getVideoDetails(id) {
        return await axios.get(`${this.baseUrl}/videos/${id}?api_key=${this.apiKey}`);
    }

}