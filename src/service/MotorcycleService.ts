import { instance } from "./base";

const endpoint = "motorcycle";



export const motorcycle = {
    getAll: function(config: any) {
        return instance.get(endpoint, config);
    }
}