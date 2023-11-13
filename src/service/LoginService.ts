import { UserData, UserLoginData } from "../types";
import { instance } from "./base";

const endpoint = "login";

export const login = {
    validationCredentials: function(userLoginData: UserLoginData) { //change any type
        return instance.post(endpoint, userLoginData);
    }
}