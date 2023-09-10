import dayjs from "dayjs";
import jwtDecode from "jwt-decode";

export const removeItem = (key) => void localStorage.removeItem(key);

export const setItem = (key, val) => {
    try {
        localStorage.setItem(key, JSON.stringify(val));
    } catch (error) {
        console.error("Error setting item:", error);
    }
};

export const getItem = (key) => {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error("Error getting item:", error);
        return null;
    }
};

export const token = {
    tokenName: 'authTokens',

    empty() { removeItem(this.tokenName); },
    
    set key(val) { setItem(this.tokenName, val); },

    get object() { return getItem(this.tokenName); },

    get key() {
        const tokenValue = getItem(this.tokenName);
        return tokenValue ? `Bearer ${tokenValue?.access}` : '';
    },

    checkTokenExpiry() {
        const tokenValue = getItem(this.tokenName);
        if (tokenValue) {
            const user = jwtDecode(tokenValue);
            const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

            if (isExpired) {
                this.empty();
            }
        }
    },
};
