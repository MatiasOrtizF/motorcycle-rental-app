import { AxiosRequestConfig } from "axios";
import { RentalData } from "../types";
import { instance } from "./base";

const endpoint = "rental";

export const rental = {
    addRental: function(config: AxiosRequestConfig, rentalData: RentalData) {
        return instance.post(endpoint, rentalData, config);
    },
    deleteRental: function(config: AxiosRequestConfig, rentalId: number) {
        return instance.delete(endpoint + "/" + rentalId, config);
    },
    getAllRentalByMotorcycle: function(config: AxiosRequestConfig, motorcycleId: number) {
        return instance.get(endpoint + "/" + motorcycleId, config);
    }
}