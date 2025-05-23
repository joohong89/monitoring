import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from "./layouts/DashboardLayout.tsx";
import ProductionAndDowntimeL1 from "./modules/ProductionAndDowntime/ProductionAndDowntimeL1.tsx";
import DefectsByMachines from "./modules/ProductionAndDowntime/DefectsByMachines.tsx";
import ShopfloorOverview from "./modules/ProductionAndDowntime/ShopfloorOverview.tsx";

function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<DashboardLayout />}>
                    <Route index element={<ProductionAndDowntimeL1 />} />
                    <Route path="cycle" element={<ProductionAndDowntimeL1 />} />
                    <Route path="defects" element={<DefectsByMachines />} />
                    <Route path="shopfloor" element={<ShopfloorOverview />} />
                    {/*<Route path="reports" element={<Reports />} />*/}
                </Route>
            </Routes>
        </Router>
    </>
  )
}

export default App
