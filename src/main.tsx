import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Table from "./pages/Table.tsx";
import Layout from "./pages/Layout.tsx"
import OrderForm from "./pages/OrderForm.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Table/>}/>
          <Route path="call" element={<OrderForm/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
