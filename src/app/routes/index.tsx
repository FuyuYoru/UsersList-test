import { UsersList } from "@/pages/UsersList/ui";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const UserDetails = lazy(() => import('@/pages/UserDetails/ui/index'));

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="users">
                    <Route index element={<UsersList />} />
                    <Route 
                        path="details/:id" 
                        element={
                            <Suspense fallback={<div>Загрузка...</div>}>
                                <UserDetails />
                            </Suspense>
                        } 
                    />
                </Route>
                <Route path="*" element={<Navigate to={'/users'} />} />
            </Routes>
        </Router>
    );
};
