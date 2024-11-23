interface Props {
  patientName: string;
  dob: string;
  address: string;
  medication: string[];
}

function PrescriptionCard({ patientName, dob, address, medication }: Props) {
  return (
    <div className="card p-2 m-3" style={{ width: "18rem" }}>
      <h5 className="card-title text-center">{patientName}</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary">{dob}</h6>
      <h6 className="card-subtitle mb-2 text-body-secondary">{address}</h6>
      <p className="card-text">Patient's first time use</p>
      <ul className="list-group list-group-flush">
        {medication.map((med) => (
          <li className="list-group-item">{med}</li>
        ))}
      </ul>
    </div>
  );
}

export default PrescriptionCard;
