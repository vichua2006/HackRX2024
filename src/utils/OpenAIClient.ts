import axios from "axios";
import { OPENAI_KEY } from "../data/apiKeys";

const openAIClient = axios.create({
  baseURL: "https://api.openai.com/v1/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${OPENAI_KEY}`,
  },
});

export default openAIClient;
