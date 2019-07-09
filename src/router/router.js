import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout/index.vue'
import Home from '../views/Home.vue'
import Page404 from '../views/Page404.vue'
import One from '../views/One.vue'
import Login from '../views/login/index.vue'

Vue.use(Router);

export const constRoutes = [
    {
        path: '/',
        name: 'home',
        redirect: "/home",
        component: Layout,
        meta: {
            title: '首页',
        },
        children: [
            {
                path: "home",
                component: Home
            }
        ],
    },
    {
        path: "/login",
        component: Login,
        hidden: true,
        meta: {}
    },
    {
        path: '/about',
        name: 'about',
        meta: {
            title: '关于',
        },
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
        path: "/test",
        meta: {
            title: '测试',
        },
        redirect: "/test/one",
        component: Layout,
        children: [
            {
                path: "one",
                component: One,
                meta: {
                    title: "One"
                }
            }
        ]
    },
    {
        path: "/test1",
        meta: {
            title: '测试1',
        },
        redirect: "/test1/one",
        component: Layout,
        children: [
            {
                path: "one",
                component: One,
                meta: {
                    title: "One"
                }
            }
        ]
    },
    {
        hidden: true,
        path: "/*",
        component: Page404
    }
];

export default new Router({
    routes: constRoutes
})
