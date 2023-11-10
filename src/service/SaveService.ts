import { motorcycle } from "./MotorcycleService";
import { instance } from "./base";

const endpoint = "save";

export const save = {
    getAllByUser: function(config: any) {
        return instance.get(endpoint, config);
    },
    saveMotorcycle: function(config: any, motorcycleId: number) {
        return instance.post(endpoint + "?motorcycleId=" + motorcycleId, null, config);
    }
}