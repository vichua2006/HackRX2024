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
  return (
    <div className="card p-2 m-3" style={{ width: "18rem" }}>
      <h5 className="card-title text-center">{patientName}</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary">{dob}</h6>
      <h6 className="card-subtitle mb-2 text-body-secondary">{sex}</h6>
      <p className="card-text">{"Active Rx: " + activeRx}</p>
      <p className="card-text">{"Due: " + due}</p>
      <ul className="list-group list-group-flush">
        {medication.map((med) => (
          <li className="list-group-item">{med}</li>
        ))}
      </ul>
    </div>
  );
}

export default PrescriptionCard;
