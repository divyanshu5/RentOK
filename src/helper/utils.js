import { userData } from "./userdata";

export const rentOkUserDataFetch = () => {
    if (typeof window !== 'undefined') {
        let rentOkUserData = localStorage.getItem("rentOkUserData");
        rentOkUserData = JSON.parse(rentOkUserData);
        if (rentOkUserData) {
            return rentOkUserData
        }
        else {
            localStorage.setItem("rentOkUserData", JSON.stringify(userData))
            return userData
        }
    }
    else {
        return []
    }
}
export const updateUserData = (data) => {
    localStorage.setItem("rentOkUserData", JSON.stringify(data))
}