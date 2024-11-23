import './App.css'
import blendClient from './utils/BlendClient';
import useCall from './utils/useCall';
import useSendCall from './utils/useSendCall';

function App() {
  // const {response, loading, error} = useCall("talk about the weather", [["How hot is the weather today?", "hot or cold"]]);
  // const {response, loading, error} = useSendCall("talk about the weather");
  const body = {
    phone_number: "+15069985079",
    from: null,
    task: "talk to me about my cocain addiction",
    module: "turbo",
    language: "en",
    voice: "Alexa",
  };

  blendClient.post("/", body).then((res) => {
    console.log(res);
  })
}

export default App
