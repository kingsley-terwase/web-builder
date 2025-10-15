import { Routes, Route } from "react-router-dom";
import { LoginPage, RegisterPage, Sample } from "../Pages/Public";
import PublicLayout from "../Layout/PublicLayout";
import Dashboard from "../Components/Dashboard";
import { EditorPage } from "../Pages/Dashboard";

const PublicRoutes = () => {
    return (
        <PublicLayout>
            <Routes>
                <Route path="/">
                    <Route index element={<Dashboard />} />
                    <Route path="/sample" element={<Sample />} />
                    <Route path="editor" element={<EditorPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Route>
            </Routes>
        </PublicLayout>
    );
};

export default PublicRoutes;
