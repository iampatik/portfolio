export default {
    routes: [
        {
            path: '/home',
            name: 'home',
            component: resolve => require(['@/components/Home.vue'], resolve),
            meta: {
                tokenRequired: false
            }
        },
        {
            path: '/resume',
            name: 'resume',
            component: resolve => require(['@/components/Resume.vue'], resolve),
            meta: {
                tokenRequired: false
            }
        },
        {
            path: '/projects',
            name: 'projects',
            component: resolve => require(['@/views/Projects.vue'], resolve),
            meta: {
                tokenRequired: false
            }
        }
    ]
}