import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/HomePage'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/list',
            component: () => import('./views/ListPage.vue')
        }
    ]
})