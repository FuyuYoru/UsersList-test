import { Provider } from "react-redux";
import { store } from "@/app/store/store";
import { ReactNode, FC } from "react";

export const ReduxProvider: FC<{children: ReactNode}> = ({children}) =>{
    return <Provider store={store}>{children}</Provider>
}