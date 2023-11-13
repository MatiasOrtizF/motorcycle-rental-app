import { AxiosRequestConfig } from "axios";
import { RentalData } from "../types";
import { instance } from "./base";

const endpoint = "rental";

export const rental = {
    addRental: function(config: AxiosRequestConfig, rentalData: RentalData) {
        return instance.post(endpoint, rentalData, config);
    }
}