import './App.css'
import blendClient from './utils/BlandClient';
import useCall from './utils/useCall';
import useGPT from './utils/useGPT';
import useSendCall from './utils/useSendCall';

function App() {
  // const {response, loading, error} = useCall("talk about the weather");
  // const {response, loading, error} = useSendCall("you have cancer");
  // console.log(response);
  const sendCallBody = {
    phone_number: "+15063435687",
    from: null,
    task: "talk to me about my cocain addiction",
    module: "turbo",
    language: "en",
    voice: "Alexa",
  };

  const message = useGPT("in short text, what is the trolly problem");
  console.log(message);

}

export default App
