import './App.css'
import blendClient from './utils/BlendClient';
import useCall from './utils/useCall';
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

  const analyzeCallBody = {

  }

}

export default App
