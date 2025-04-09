import { ApiPaths } from "@/shared/api/apiPaths";
import {IUser} from "@/entities/user/model/user";
import { baseApi } from "@/shared/api/baseApiRTK";

const api = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getUsers: build.query<IUser[], void>({
            query: () => ApiPaths.getUsers()
        }),
        getUserByID: build.query<IUser, number>({
            query: (id) => ApiPaths.getUserDetail(id),
        })
    }),
    overrideExisting: false,
})

export const { useGetUsersQuery, useGetUserByIDQuery } = api;