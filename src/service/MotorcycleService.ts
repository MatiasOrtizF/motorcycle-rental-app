import { AxiosRequestConfig } from "axios";
import { instance } from "./base";

const endpoint = "motorcycle";

export const motorcycle = {
    getAll: function(config: AxiosRequestConfig) {
        return instance.get(endpoint, config);
    },
    searchByMotorcycleName: function(config: AxiosRequestConfig, word: string) {
        return instance.get(endpoint + "/search?word=" + word, config );
    }
}