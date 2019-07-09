import router from "./router"
import store from "../store"
import {getToken} from "../utils/auth"

router.beforeEach((to, from, next) => {
    const hasToken = getToken();
    if (hasToken) {
        // 已登录
        if (to.path === "/login") {
            next("/");
        } else {
            next();
        }
    } else {
        // 未登录
        if (to.path === "/login") {
            next();
        } else {
            next("/login");
        }
    }
});