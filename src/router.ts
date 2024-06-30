import { createRouter, createWebHistory } from "vue-router";
import TestPlanView from "./views/TestPlanView.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'TestPlan',
            component: TestPlanView,
        },
        {
            path: '/organizations',
            name: 'Organization',
            component: () => import('@/views/OrganizationView.vue')
        },
        {
            path: '/release',
            name: 'Release',
            component: () => import('@/views/ReleaseView.vue')
        }
    ]
})