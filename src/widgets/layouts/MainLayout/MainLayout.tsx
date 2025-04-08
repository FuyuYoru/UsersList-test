import { Header } from "@/widgets/layouts/MainLayout/Header";
import { NavBar } from "@/widgets/layouts/MainLayout/NavBar";
import { FC } from "react";
import { Outlet } from "react-router-dom";

export const MainLayout: FC = () => {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] h-dvh w-full">
            <Header />
            <main className="overflow-auto">
                <Outlet />
            </main>
            <NavBar />
        </div>
    );
};
