import { AppRouter } from "@/app/routes";
import { StrictMode } from "react";
import { QueryClient, QueryClientProvider, } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const App = () => {
    return (
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <AppRouter />
            </QueryClientProvider>
        </StrictMode>
    )
}