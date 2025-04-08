import { ApiPaths } from "@/shared/api/apiPaths";
import { axiosInstance } from "@/shared/api/axiosInstance";

export const getUserByID = async (id: number) => {
    try {
        const response = await axiosInstance.get(ApiPaths.getUserDetail(id));

        return response.data;
    } catch (error) {
        console.error(error)
        return null;
    }
}