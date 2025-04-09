import { AppRouter } from "@/app/routes";
import { StrictMode } from "react";
import { QueryClient, QueryClientProvider, } from "@tanstack/react-query";
import { ReduxProvider } from "@/app/providers/ReduxProvider";

const queryClient = new QueryClient();

export const App = () => {
    return (
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <ReduxProvider>
                    <AppRouter />
                </ReduxProvider>
            </QueryClientProvider>
        </StrictMode>
    )
}