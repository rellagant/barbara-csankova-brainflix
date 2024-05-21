import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
console.log(process.env);

export class BrainFlixApi {
    constructor() {
        this.baseUrl = API_URL
        console.log(this.baseUrl);
    }

  async getVideos() {
    return await axios.get(`${this.baseUrl}/videos/`);
  }

  async getVideoDetails(id) {
    return await axios.get(`${this.baseUrl}/videos/${id}`);
  }

  async uploadVideo(videoData) {
    try {
      return await axios.post(`${this.baseUrl}/videos`, videoData);
    } catch (error) {
      console.error("Error uploading video:", error);
      throw error;
    }
  }
}
