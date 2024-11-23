import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [inputs, setInputs] = useState({prescription: "", quantity: 0})
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(inputs);
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>Enter Prescription:
      <input 
        type="text" 
        name="prescription" 
        value={inputs.prescription}
        onChange={handleChange}
      />
      </label>
      <label>Enter Quantity:
      <input 
        type="number" 
        name="quantity" 
        min="0"
        step="1"
        value={inputs.quantity}
        onChange={handleChange}
      />
      </label>
      <input type="submit" />
    </form>
  )
}

export default App
