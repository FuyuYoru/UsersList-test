import { baseURL } from "@/shared/api/apiPaths";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: baseURL,
    }),
    endpoints: () => ({})
})