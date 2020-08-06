let beforeEnter = (to, from, next) => {
    if (to.meta.tokenRequired === true) {
        next()
    } else {
        next()
    }
}

var devRoutes = []
let app = require('./routes.js')
devRoutes = devRoutes.concat(app.default.routes)
for (let x = 0; x < devRoutes.length; x++) {
    devRoutes[x]['beforeEnter'] = beforeEnter
}

let routes = [
    {
        path: '/',
        name: '',
        component: resolve => require(['@/components/Home.vue'], resolve),
        beforeEnter: beforeEnter
    }
]

routes = routes.concat(devRoutes)

export default {
    routes: routes
}