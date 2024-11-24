import { useState } from "react";


export interface RequestResult {
  prescription: string,
  quantity: number,
  units: string,
  isLoading: boolean,
  result: string;
}

function ResultCard({
    prescription,
    quantity,
    units,
    isLoading,
    result
}: RequestResult) {
  const [selected, setSelected] = useState(false);
  let bgColour = selected ? " bg-success" : " bg-dark"; // change color later
  return (
    <div
      className={"card p-2 m-2" + bgColour}
      style={{ width: "18rem" }}
      onMouseEnter={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
    >
      <h5 className="card-title text-center m-0">Pharmacy A</h5>
      <hr />
      <div className="container row">
        <div className="container col-7">
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {"DIN " + prescription}
          </h6>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {"Units: " + units}
          </h6>
        </div>
        <div className="container col d-flex align-items-end justify-content-end pb-2">
          <p className="card-text text-end ">
            {quantity}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;