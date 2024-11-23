import OrderForm from "./OrderForm";
import InventoryTable from "./InventoryTable";
import PrescriptionTable from "./PrescriptionTable";
import PrescriptionCard from "./PrescriptionCard";
import DrugInventory from "./DrugInventory";
import { DrugCard } from "./DrugCard";
import DrugInventoryList from "./assets/DrugInventoryList";
import PatientList from "./assets/PatientList";

import "./App.css";

function App() {
  // Inventory of drugs

  return (
    <div className="p-5">
      <DrugInventory heading="Drug Inventory">
        {DrugInventoryList.map((drug) => (
          <DrugCard
            brand={drug.brand}
            name={drug.name}
            dosage={drug.dosage}
            divider={drug.divider}
            din={drug.din}
            quantity={drug.quantity}
          />
        ))}
      </DrugInventory>
      <PrescriptionTable heading="Current Prescriptions">
        {PatientList.map((patient) => (
          <PrescriptionCard
            patientName={patient.patientName}
            dob={patient.dob}
            sex={patient.sex}
            activeRx={patient.activeRx}
            medication={patient.medication}
            due={patient.due}
          />
        ))}
      </PrescriptionTable>
    </div>
  );
}

export default App;
