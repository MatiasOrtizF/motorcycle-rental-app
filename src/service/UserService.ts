import { AxiosRequestConfig } from "axios";
import { instance } from "./base";

const endpoint = "user";

export const user = {
    getRentalByUser: function(config: AxiosRequestConfig) {
        return instance.get(endpoint, config);
    }
}