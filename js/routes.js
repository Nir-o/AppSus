import misterEmail from './pages/misterEmail/misterEmail.cmp.js'
<<<<<<< HEAD
// import missKeeper from './pages'
=======
import keeperHome from './pages/keeper-home.js'
>>>>>>> 82a472b0e16735245385fdde324fb1b3e54e20fe
import home from './pages/home.js'


const routes = [
    {path: '/', component: home},
    // {path: '/about', component: about},
    {path: '/misterEmail', component: misterEmail},
<<<<<<< HEAD
    // {path: '/missKeeper', component: missKeeper},
=======
    {path: '/missKeeper', component: keeperHome},
>>>>>>> 82a472b0e16735245385fdde324fb1b3e54e20fe
  ];

Vue.use(VueRouter);
var myRouter = new VueRouter({routes})

export default myRouter;