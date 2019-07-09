import Vue from 'vue'
import "normalize.css/normalize.css"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router/router'
import store from './store/index.js'
import "./router/permission"

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
