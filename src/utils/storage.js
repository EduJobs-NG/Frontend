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

export const getItem = (key) => localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;

/* A getter and setter for the token. */
export const token = {
    tokenName: 'authTokens',
    /* A setter. It is a function that is called when you try to set the value of the property. */
    set key(val) { setItem(this.tokenName, val); },
    /* A getter for the token. */
    get key() {
        let tokenValue = getItem(this.tokenName);
        console.log('token requested', tokenValue);
        return tokenValue ? `Bearer ${tokenValue?.access}` : '';
    },
    /**
     * If the tokenName is not null, then return the object.
     * @returns The getItem() function is being returned.
     */
    get object() {
        return getItem(this.tokenName);
    },
    empty(){
        remItem(this.tokenName);
    }
};
