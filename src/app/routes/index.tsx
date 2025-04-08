import { Dashboard } from "@/pages/dashboard";
import { Empty } from "@/pages/empty";
import { MainLayout } from "@/widgets/layouts/MainLayout";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="users">
                        <Route index element={<Dashboard />} />
                        <Route path="details/:id" element={<Empty />} />
                    </Route>
                    <Route path="*" element={<Navigate to={'/users'} />} />
                </Route>
            </Routes>
        </Router>
    )
}