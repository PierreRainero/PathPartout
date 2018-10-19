import Vue from 'vue'
import Router from 'vue-router'
import Presentation from './components/Presentation.vue'
import LogIn from './components/LogIn.vue'
import SignIn from './components/SignIn.vue'
import Profile from './components/Profile.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Presentation',
            component: Presentation
        },
        {
            path: '/LogIn',
            name: 'LogIn',
            component: LogIn
        },
        {
            path: '/SignIn',
            name: 'SignIn',
            component: SignIn
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        }
    ]
})