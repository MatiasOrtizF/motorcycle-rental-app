import { MyRentals } from "../types";
import { instance } from "./base";

const endpoint = "rental";

export const rental = {
    saveMotorcycle: function(config: any, rentalData: MyRentals) {
        return instance.post(endpoint + rentalData, config);
    }
}