import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
//404页--------------------------
const noWeb = (resolve) =>{
    import('components/noWeb').then((module)=>{
        resolve(module)
    })
}
export default new Router({
    routes: [
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

