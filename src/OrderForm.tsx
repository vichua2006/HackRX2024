import { useState } from "react";
import ResultCard, { RequestResult } from "./ResultCard";
import ResultCardContainer from "./ResultCardContainer";

interface DrugRequest {
  prescription: string,
  quantity: number,
}

function OrderForm() {
  const [currInput, setInputs] = useState<DrugRequest>({ prescription: "", quantity: 0 });
  const [allInputs, setAllInputs] = useState<RequestResult[]>([]);
  console.log(allInputs);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAllInputs([...allInputs, {...currInput, isLoading: false, result: ""}])
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-5">
        <div className="mb-3">
          <label htmlFor="DrugName" className="form-label">
            Drug Identification Number (DIN):
          </label>
          <input
            type="text"
            className="form-control"
            id="DrugName"
            name="prescription"
            aria-describedby="DrugName"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Quantity" className="form-label">
            Requested Quantity:
          </label>
          <input
            type="number"
            className="form-control"
            id="Quantity"
            name="quantity"
            min="0"
            step="1"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <ResultCardContainer heading="Previous Requests">
        {allInputs.map((request) => <ResultCard key={request.prescription} {...request}></ResultCard>)}
      </ResultCardContainer>
    </div>
  );
}

export default OrderForm;
