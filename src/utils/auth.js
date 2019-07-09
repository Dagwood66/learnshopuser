import Cookies from "js-cookie"

const TOKEN = "shop-token";

export function getToken() {
    return Cookies.get(TOKEN);
}

export function setToken(str) {
    return Cookies.set(TOKEN, str);
}

export function removeToken(str) {
    return Cookies.remove(TOKEN);
}