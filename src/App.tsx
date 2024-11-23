import OrderForm from "./OrderForm";
import InventoryTable from "./InventoryTable";
import PrescriptionTable from "./PrescriptionTable";
import PrescriptionCard from "./PrescriptionCard";

import "./App.css";

function App() {
  // Inventory of drugs
  const drugs = [
    ["Drug 1", 50, 10],
    ["Drug 2", 100, 20],
    ["Drug 3", 200, 40],
  ];

  return (
    <div className="p-5">
      <InventoryTable items={drugs} heading="Drug Inventory"></InventoryTable>
      <PrescriptionTable heading="Current Prescriptions">
        <div className="d-flex justify-content-evenly row">
          <PrescriptionCard
            patientName="Timmy"
            dob="01-01-2006"
            address="150 McAllister St"
            medication={["drug 1", "drug 2", "drug 3"]}
          />
          <PrescriptionCard
            patientName="Timmy"
            dob="01-01-2006"
            address="150 McAllister St"
            medication={["drug 1", "drug 2", "drug 3"]}
          />
          <PrescriptionCard
            patientName="Timmy"
            dob="01-01-2006"
            address="150 McAllister St"
            medication={["drug 1", "drug 2", "drug 3"]}
          />
          <PrescriptionCard
            patientName="Timmy"
            dob="01-01-2006"
            address="150 McAllister St"
            medication={["drug 1", "drug 2", "drug 3"]}
          />
          <PrescriptionCard
            patientName="Timmy"
            dob="01-01-2006"
            address="150 McAllister St"
            medication={["drug 1", "drug 2", "drug 3"]}
          />
          <PrescriptionCard
            patientName="Timmy"
            dob="01-01-2006"
            address="150 McAllister St"
            medication={["drug 1", "drug 2", "drug 3"]}
          />
          <PrescriptionCard
            patientName="Timmy"
            dob="01-01-2006"
            address="150 McAllister St"
            medication={["drug 1", "drug 2", "drug 3"]}
          />
          <PrescriptionCard
            patientName="Timmy"
            dob="01-01-2006"
            address="150 McAllister St"
            medication={["drug 1", "drug 2", "drug 3"]}
          />
        </div>
      </PrescriptionTable>
    </div>
  );
}

export default App;
