import { ApiPaths } from "@/shared/api/apiPaths";
import { axiosInstance } from "@/shared/api/axiosInstance";

export const getUsers = async () => {
    try{
        const response = await axiosInstance.get(ApiPaths.getUsers());

        return response.data;
    } catch (error) {
        console.error(error)
        return [];
    }
}