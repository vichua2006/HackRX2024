import { useState } from "react";

export interface Patient {
  patientName: string;
  dob: string;
  sex: string;
  activeRx: string;
  medication: string[];
  due: string;
}

function PrescriptionCard({
  patientName,
  dob,
  sex,
  activeRx,
  medication,
  due,
}: Patient) {
  const [selected, setSelected] = useState(false);
  let bgColour = selected ? " bg-success" : " bg-dark";
  return (
    <div
      className={"card p-2 m-3 " + bgColour}
      style={{ width: "18rem" }}
      onMouseEnter={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
    >
      <h5 className="card-title text-center align-middle m-0">{patientName}</h5>
      <hr />
      <p className="card-subtitle mb-1 text-body-secondary">{"DOB: " + dob}</p>
      <p className="card-subtitle mb-1 text-body-secondary">{"Sex: " + sex}</p>
      <p className="card-text mb-1">{"Active Rx: " + activeRx}</p>
      <p className="card-text">{"Due: " + due}</p>
      <ul className="list-group list-group-flush rounded-3">
        {medication.map((med) => (
          <li
            className={
              "list-group-item text-light d-flex justify-content-between align-items-center border-light" +
              bgColour
            }
            style={{ "--bs-border-opacity": "0.3" }}
          >
            {med}
            <span class="badge text-bg-primary rounded-pill">14</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PrescriptionCard;
