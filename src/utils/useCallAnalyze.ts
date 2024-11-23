import { useState, useEffect } from "react";
import blendClient from "./BlendClient";

interface CallAnalyzeResponse {
    status: any;
    message: string;
    answers: any[];
}


// a hook to send a call, and return the response object as a state, specified above
function useCallAnalyze(callId: string, goal: string, questions: string[][]) {
  // state variables
  const [response, setResponse] = useState<CallAnalyzeResponse>(
    {} as CallAnalyzeResponse
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  // body of the request; see https://docs.bland.ai/api-v1/post/calls
  const body = {
    goal,
    questions,
    module: "turbo",
    language: "en",
    voice: "Alexa",
  };

  // Effect hook to make the API request
  useEffect(() => {
    const controller = new AbortController();

    blendClient
      .post<CallAnalyzeResponse>(`/${callId}/analyze/`, body)
      .then((res) => {
        console.log(res);
        setResponse(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });

    return () => controller.abort();
  }, []);

}

export default useCallAnalyze;