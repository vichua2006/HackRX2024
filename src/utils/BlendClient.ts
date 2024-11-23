import axios from "axios";

// api key here for now
const API_KEY = "org_f9d4eecb4c31e0cd2474703c410fa76c15dcb6f45bc89a1089f4c232faf6c158c09eb68e601e09b466bc69";

// a general api client for both Send Call and Analyze Call with AI
const blendClient = axios.create({
  baseURL: "https://api.bland.ai/v1/calls/",
  headers: {
    Authorization: API_KEY,
  },
});

export default blendClient;
