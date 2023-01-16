import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'projectList',
        props: true,
        component: () => import ('../views/ProjectList')
    },
    {
        path: '/project/:projectId',
        name: 'projectDetail',
        props: true,
        component: () => import ('../views/Project')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/LoginComponent.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router
