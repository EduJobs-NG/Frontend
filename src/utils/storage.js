import dayjs from "dayjs";
import jwtDecode from "jwt-decode";

/**
 * It removes an item from localStorage
 * @param key - The key of the item you want to remove.
 */
export const remItem = (key) => void localStorage.removeItem(key);

/**
 * It takes a key and a value, and then sets the value in localStorage
 * @param key - The key of the item you want to set.
 * @param val - The value to be stored in localStorage.
 */
export const setItem = (key, val) => localStorage.setItem(key, JSON.stringify(val));

/**
 * If the localStorage item exists, return it as a JSON object, otherwise return null
 * @param key - The key of the item you want to get from localStorage.
 */
export const getItem = (key) => localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;

/* A JavaScript object. */
export const token = {
    /* A property of the token object. */
    tokenName: 'authTokens',
    /* A setter. It is a function that is called when you try to set the value of the property. */
    set key(val) { setItem(this.tokenName, val); },
    /* A getter for the token. */
    get key() {
        // this.checkTokenExpiry();
        let tokenValue = getItem(this.tokenName);
        console.log('token requested');
        return tokenValue ? `Bearer ${tokenValue?.access}` : '';
    },
    /**
     * If the tokenName is not null, then return the object.
     * @returns The getItem() function is being returned.
     */
    get object() { return getItem(this.tokenName); },
    /* Removing the token from localStorage. */
    empty() { remItem(this.tokenName); },
    /* Checking if the token is expired. */
    checkTokenExpiry() {
        let tokenValue = getItem(this.tokenName);
        if (tokenValue) {
            let user = jwtDecode(tokenValue);
            let isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

            if (isExpired) this.empty();
        }
        return;
    },
};
