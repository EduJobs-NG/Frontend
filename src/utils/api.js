import axios from "axios";

// Enable CORS for cross-origin requests
// axios.defaults.withCredentials = true;

const api = axios.create({
  baseURL: "https://api.edujobsng.com/api/v1",
});

export default api;
