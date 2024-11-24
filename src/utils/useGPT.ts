import { useEffect, useState } from "react";
import openAIClient from "./OpenAIClient";

// gpt hook with a default prompt
function useGPT(prompt: string) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const controller = new AbortController();

    openAIClient
      .post("/chat/completions", {
        model: "gpt-4o",
        messages: [{ role: "system", content: prompt }],
        max_completion_tokens: 300,
      })
      .then((res) => {
        console.log(res);
        setContent(res.data.choices[0].message.content);
      })
      .catch((err) => console.log(err));

    return () => controller.abort();
  }, []);

  return content;
}

export default useGPT;