import { useEffect, useState } from "react";
import blendClient from "./BlendClient";

interface SendCallResponse {
  status: string;
  call_id: string;
  batch_id: string;
  message: string;
  error: string;
}

interface CallAnalyzeResponse {
  status: any;
  message: string;
  answers: any[];
}

const defaultTaskPrompt =
  "You are a smart pharmacy assistant. Your task is of the following:\n";

const defaultGoalPrompt = "Answer the folloing questions:";

const DEFAULT_PHONE_NUM = "+15069985079";

function useCall(
  taskPrompt: string,
  summaryQuestions: string[][],
  phoneNum?: number
) {
  // state variables
  const [response, setResponse] = useState<CallAnalyzeResponse>(
    {} as CallAnalyzeResponse
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  // body of the send call request; see https://docs.bland.ai/api-v1/post/calls
  const sendCallBody = {
    phone_number: phoneNum ? phoneNum : DEFAULT_PHONE_NUM,
    from: null,
    task: `${defaultTaskPrompt}${taskPrompt}`,
    module: "turbo",
    language: "en",
    voice: "Alexa",
  };

  const analyzeCallBody = {
    goal: defaultGoalPrompt,
    questions: summaryQuestions,
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
            .post<CallAnalyzeResponse>(`/${callId}/analyze/`, analyzeCallBody)
            .then((res) => {
              console.log(res);
              setResponse(res.data);
              setLoading(false);
            })
            .catch((err) => {
              console.log(err);
              setError(err);
            });
        }, 1000);
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
