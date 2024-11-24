// obsolete, use useCall.ts instead

import { AMELIA_PHONE_NUM } from "../data/phoneNums";
import { useEffect, useState } from "react";
import blendClient from "./BlandClient";
import { defaultPrompt } from "../data/prompts";

interface SendCallResponse {
  status: string;
  call_id: string;
  batch_id: string;
  message: string;
  error: string;
}

// a hook to send a call, and return the response object as a state, specified above
function useSendCall(taskPrompt: string, phoneNum?: number) {
  // state variables
  const [response, setResponse] = useState<SendCallResponse>(
    {} as SendCallResponse
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  // body of the request; see https://docs.bland.ai/api-v1/post/calls
  const body = {
    phone_number: phoneNum ? phoneNum : AMELIA_PHONE_NUM,
    from: null,
    task: `${defaultPrompt}${taskPrompt}`,
    module: "turbo",
    language: "en",
    voice: "Alexa",
  };

  // Effect hook to make the API request
  useEffect(() => {
    const controller = new AbortController();

    blendClient
      .post<SendCallResponse>("/", body)
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

  return { response, loading, error };
}

export default useSendCall;
