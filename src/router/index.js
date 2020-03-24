import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from "../views/login.vue"
import SecureComponent from "../views/secure.vue"
import HomeComponent from "../views/home.vue"
//import Store from "../store"

Vue.use(Router)
const router = new Router();
export default new Router({
    routes: [
        {
            path: '/',
            redirect: {
                name: "login"
            }
        },
        {
            path: "/login",
            name: "login",
            component: LoginComponent
        },
        {
            path: "/secure",
            name: "secure",
            component: SecureComponent,
            meta:{requiresAuth:true}
        },
        {
            path: "/home",
            name: "home",
            component: HomeComponent
        }
    ]
})
router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
  
    if (authRequired && !loggedIn) {
      return next('/login');
    }
  
    next(); 
  })
// router.
// beforeEach((to,from,next)=> {
//     let routerAuthCheck=false;
//     if(routerAuthCheck){
//         Store.commit('userIsAuthorized',true)
//     }
//     if(to.mateched.some(record=>record.meta.requiresAuth)){

//         if(routerAuthCheck){
//            next();
//         }
//         else{
//             router.replace('/login'); 
//         }
//     }


// });