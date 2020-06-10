import Vue from 'vue'
import Router from 'vue-router'
import GameBoard from '@/views/GameBoard'
import Profile from "./views/Profile";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/profile',
            component: Profile
        },
        {
            path: '/game',
            component: GameBoard
        }

    ]
})