import axios from "axios";
import {ROHAN_KEY } from "../data/apiKeys";

// a general api client for both Send Call and Call Detail
const blendClient = axios.create({
  baseURL: "https://api.bland.ai/v1/calls/",
  headers: {
    Authorization: ROHAN_KEY,
  },
});

export default blendClient;
