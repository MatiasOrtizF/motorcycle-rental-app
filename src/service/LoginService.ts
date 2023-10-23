import { instance } from "./base";

const endpoint = "login";

export const login = {
    validationCredentials: function(userData: any) { //change any type
        return instance.post(endpoint, userData);
    }
}