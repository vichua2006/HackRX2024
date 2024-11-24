import OrderForm from "./OrderForm";
import PrescriptionTable from "./PrescriptionTable";
import PrescriptionCard from "./PrescriptionCard";
import DrugInventory from "./DrugInventory";
import { DrugCard } from "./DrugCard";
import DrugInventoryList from "./assets/DrugInventoryList";
import PatientList from "./assets/PatientList";
import Layout from "./layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  // Inventory of drugs

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                <div className="p-5 bg-black bg-gradient text-light">
                  <DrugInventory heading="Drug Inventory">
                    {DrugInventoryList.map((drug) => (
                      <DrugCard
                        key={drug.din}
                        brand={drug.brand}
                        name={drug.name}
                        dosage={drug.dosage}
                        divider={drug.divider}
                        din={drug.din}
                        quantity={drug.quantity}
                      />
                    ))}
                  </DrugInventory>
                  <div className="mb-5 mt-5 pb-5"></div>
                  <PrescriptionTable heading="Current Prescriptions">
                    {PatientList.map((patient) => (
                      <PrescriptionCard
                        key={patient.activeRx}
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
              </>
            }
          />
          <Route path="call" element={<OrderForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
