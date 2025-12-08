import axios from "axios";
import { SalesPerson } from "../types";

const apiClient = axios.create({
  baseURL: "/api/ai",
  headers: {
    "Content-Type": "application/json",
  },
});

export const salesDal = {
  async signup(data: SalesPerson) {
    const response = await apiClient.post("/salesTeam/create", data);
    return response.data;
  },
};
