import { AxiosRequestConfig } from "axios";
import { motorcycle } from "./MotorcycleService";
import { instance } from "./base";

const endpoint = "save";

export const save = {
    getAllByUser: function(config: AxiosRequestConfig) {
        return instance.get(endpoint, config);
    },
    saveMotorcycle: function(config: AxiosRequestConfig, motorcycleId: number) {
        return instance.post(endpoint + "?motorcycleId=" + motorcycleId, null, config);
    },
    unsaveMotorcycle: function(config: AxiosRequestConfig, motorcycleId: number) {
        return instance.delete(endpoint + "?motorcycleId=" + motorcycleId, config);
    },
    motorcycleSaved: function(config: AxiosRequestConfig, motorcylceId: number) {
        return instance.get(endpoint + "/" + motorcylceId, config);
    }
}