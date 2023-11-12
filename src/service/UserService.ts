import { instance } from "./base";

const endpoint = "user";

export const user = {
    getRentalByUser: function(config: any) {
        return instance.get(endpoint, config);
    }
}