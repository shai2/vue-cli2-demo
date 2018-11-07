import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 第一页
const login = (resolve) =>{
    import('components/login/login').then((module)=>{
        resolve(module)
    })
}
//404页--------------------------
const noWeb = (resolve) =>{
    import('components/noWeb').then((module)=>{
        resolve(module)
    })
}
export default new Router({
    routes: [
        {
            path: '/login',
            component: login
        },
        {
            path: '/',
            redirect:'/login'
        },
        {
            path: '*',
            component: noWeb
        },
    ]
})

