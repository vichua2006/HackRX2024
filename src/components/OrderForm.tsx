import { useState } from "react";
import PharmacyMap from "./PharmacyMap";

function OrderForm() {
  const [inputs, setInputs] = useState({
    prescription: "",
    quantity: 0,
    units: "TAB",
  });
  let ValidUnits = ["TAB", "CAP", "PACK", "mg", "ml", "mcg"];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(
      inputs.prescription +
        "; Quantity: " +
        inputs.quantity +
        " " +
        inputs.units
    );
  };

  const handleUnitSelection = (event: React.MouseEvent<HTMLLIElement>) => {
    const target = event.target as HTMLLIElement; // Narrow the type
    setInputs((values) => ({
      ...values,
      units: target.textContent || "",
    }));
  };
  return (
    <>
      <PharmacyMap />
      <div className="p-5">
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
          <label htmlFor="Quantity" className="form-label">
            Quantity:
          </label>
          <div className="mb-3 input-group">
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
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {inputs.units}
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              {ValidUnits.map((unit) => (
                <li
                  className="dropdown-item"
                  key={unit}
                  onClick={handleUnitSelection}
                >
                  {unit}
                </li>
              ))}
            </ul>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default OrderForm;
