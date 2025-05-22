import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from "./layouts/DashboardLayout.tsx";
import ProductionAndDowntimeL1 from "./modules/ProductionAndDowntime/ProductionAndDowntimeL1.tsx";

function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<DashboardLayout />}>
                    <Route index element={<ProductionAndDowntimeL1 />} />
                    {/*<Route path="reports" element={<Reports />} />*/}
                </Route>
            </Routes>
        </Router>
    </>
  )
}

export default App
