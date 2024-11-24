import { useState } from "react";

function OrderForm() {
  const [inputs, setInputs] = useState({ prescription: "", quantity: 0 });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(inputs.prescription + " " + inputs.quantity);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-5">
        <div className="mb-3">
          <label htmlFor="DrugName" className="form-label">
            Drug ID:
          </label>
          <input
            type="text"
            className="form-control"
            id="DrugName"
            name="prescription"
            aria-describedby="DrugName"
            onChange={handleChange}
            value={inputs.prescription}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Quantity" className="form-label">
            Quantity:
          </label>
          <input
            type="number"
            className="form-control"
            id="Quantity"
            name="quantity"
            min="0"
            step="1"
            onChange={handleChange}
            value={inputs.quantity}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default OrderForm;
