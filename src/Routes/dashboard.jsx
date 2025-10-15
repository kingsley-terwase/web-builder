import { Routes, Route } from "react-router-dom";
import Dashboard from "../Components/Dashboard";
import PublicLayout from "../Layout/PublicLayout";


const DashboardRoutes = () => {
    return (
        <PublicLayout>
            <Routes>
                <Route path="/dashboard">
                    <Route index element={<Dashboard />} />
                </Route>
            </Routes>
        </PublicLayout>
    );
};

export default DashboardRoutes;
