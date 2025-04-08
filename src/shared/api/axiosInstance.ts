import { baseURL } from "@/shared/api/apiPaths";
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 10000,
  });