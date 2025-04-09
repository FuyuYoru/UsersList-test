import { Empty } from "@/pages/empty";
import { UsersList } from "@/pages/UsersList/ui";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="users">
                    <Route index element={<UsersList />} />
                    <Route path="details/:id" element={<Empty />} />
                </Route>
                <Route path="*" element={<Navigate to={'/users'} />} />
            </Routes>
        </Router>
    )
}