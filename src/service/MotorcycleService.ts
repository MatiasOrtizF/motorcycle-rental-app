import { AxiosRequestConfig } from "axios";
import { instance } from "./base";

const endpoint = "motorcycle";

export const motorcycle = {
    getAll: function(config: AxiosRequestConfig) {
        return instance.get(endpoint, config);
    }
}