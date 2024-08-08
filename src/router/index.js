import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home-view',
            meta: {
                pageTitle: 'Home'
            },
            component: () => import('@/views/HomeView.vue')
        },
        {
            path: '/about',
            name: 'about-view',
            meta: {
                pageTitle: 'About'
            },
            component: () => import('@/views/AboutView.vue')
        },
        {
            path: '/project',
            name: 'projects-view',
            meta: {
                pageTitle: 'Project'
            },
            component: () => import('@/views/ProjectsView.vue')
        },
        {
            path: '/blog',
            name: 'blogs-view',
            meta: {
                pageTitle: 'Blogs'
            },
            component: () => import('@/views/BlogsView.vue')
        }
    ]
});

router.beforeEach((toRoute, fromRoute, next) => {
    window.document.title =
        toRoute.meta && toRoute.meta.pageTitle ? 'qipz - ' + toRoute.meta.pageTitle : 'qipz.';

    next();
});
export default router;
