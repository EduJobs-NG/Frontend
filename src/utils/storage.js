export const remItem = (key) => void localStorage.removeItem(key);

export const setItem = (key, val) => localStorage.setItem(key, JSON.stringify(val));

export const getItem = (key) => localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : null;

export const token = {
    tokenName: 'authTokens',
    set key(val) { setItem(this.tokenName, val); },
    get key() {
        let tokenValue = getItem(this.tokenName);
        return getItem(tokenValue) ? `Bearer ${tokenValue?.access}` : '';
    },
    get object() {
        return getItem(this.tokenName);
    }
};
