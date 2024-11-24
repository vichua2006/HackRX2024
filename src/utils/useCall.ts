import { useEffect, useState } from "react";
import blendClient from "./BlandClient";
import {ROHAN_PHONE_NUM } from "../data/phoneNums";
import { defaultPrompt } from "../data/prompts";

interface SendCallResponse {
  status: string;
  call_id: string;
  batch_id: string;
  message: string;
  error: string;
}

interface CallDetailResponse {
  summary: string;
  concatenated_transcript: string;
}

const defaultTaskPrompt = defaultPrompt;

function useCall(
  taskPrompt: string,
  phoneNum?: number
) {
  // state variables
  const [response, setResponse] = useState<CallDetailResponse>(
    {} as CallDetailResponse
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  // body of the send call request; see https://docs.bland.ai/api-v1/post/calls
  const sendCallBody = {
    phone_number: phoneNum ? phoneNum : ROHAN_PHONE_NUM,
    from: null,
    task: `${defaultTaskPrompt}${taskPrompt}`,
    module: "turbo",
    language: "en",
    voice: "Alexa",
  };

  // Effect hook to make both API request
  useEffect(() => {
    const controller = new AbortController();
    // makes the phone call
    blendClient
      .post<SendCallResponse>("/", sendCallBody)
      .then((res) => {
        console.log(res);
        let callId = res.data.call_id;

        setTimeout(() => {
          // get result of phone call
          blendClient
            .get<CallDetailResponse>(`/${callId}`)
            .then((res) => {
              console.log(res.data);
              setResponse(res.data);
              setLoading(false);
            })
            .catch((err) => {
              console.log(err);
              setError(err);
            });
        }, 60000);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });

    return () => controller.abort();
  }, []);

  return { response, loading, error };
}

export default useCall;
