import OrderForm from "./OrderForm";
import InventoryTable from "./InventoryTable";
import PrescriptionTable from "./PrescriptionTable";

import "./App.css";

function App() {
  // Inventory of drugs
  const drugs = [
    ["Drug 1", 50, 10],
    ["Drug 2", 100, 20],
    ["Drug 3", 200, 40],
  ];

  return (
    <div>
      <InventoryTable items={drugs} heading="Drug Inventory"></InventoryTable>
      <PrescriptionTable heading="Current Prescriptions">
        <div></div>
      </PrescriptionTable>
    </div>
  );
}

export default App;
