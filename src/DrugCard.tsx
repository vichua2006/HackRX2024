import { useState } from "react";

export interface Drug {
  brand: string;
  name: string;
  dosage: [number, string][];
  divider: string;
  din: string;
  quantity: [number, string];
}

export function DrugCard({
  brand,
  name,
  dosage,
  divider,
  din,
  quantity,
}: Drug) {
  const [selected, setSelected] = useState(false);
  let bgColour = selected ? " bg-info text-dark" : "";
  return (
    <div
      className={"card p-2 m-2" + bgColour}
      style={{ width: "18rem" }}
      onMouseEnter={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
    >
      <h5 className="card-title text-center m-0">{brand + " " + name}</h5>
      <hr />
      <div className="container row">
        <div className="container col-7">
          <h6 className="card-subtitle mb-2">
            {dosage.map(
              (dose, index) =>
                dose[0] + dose[1] + (index < dosage.length - 1 ? divider : "")
            )}
          </h6>
          <h6 className="card-subtitle mb-2">{"DIN " + din}</h6>
        </div>
        <div className="container col d-flex align-items-end justify-content-end pb-2">
          <p className="card-text text-end ">
            {quantity[0] + " " + quantity[1]}
          </p>
        </div>
      </div>
    </div>
  );
}
