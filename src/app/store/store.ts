import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "@/entities/user/model/store";
import tableSlice from "@/features/UsersTable/store";
import { baseApi } from "@/shared/api/baseApiRTK";

export const store = configureStore({
    reducer: {
        users: usersSlice,
        tableParams: tableSlice,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;