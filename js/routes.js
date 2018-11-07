import misterEmail from './pages/misterEmail/misterEmail.cmp.js'
// import missKeeper from './pages'
import home from './pages/home.js'


const routes = [
    {path: '/', component: home},
    // {path: '/about', component: about},
    {path: '/misterEmail', component: misterEmail},
    // {path: '/missKeeper', component: missKeeper},
  ];

Vue.use(VueRouter);
var myRouter = new VueRouter({routes})

export default myRouter;