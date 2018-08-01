import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//注册页--------------------------
const register = (resolve) =>{
    import('components/register/register').then((module)=>{
        resolve(module)
    })
}
//注册成功页--------------------------
const registerSuccess = (resolve) =>{
    import('components/register/register').then((module)=>{
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
            path: '/register',
            component: register,
        },
        {
            path: '*',
            component: noWeb
        },
        {
            path: '/',
            redirect:'/register'
        }
    ]
})

