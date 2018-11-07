import misterEmail from './pages/misterEmail/misterEmail.cmp.js'
import missKeeper from ''
import home from './pages/home.js'


const routes = [
    {path: '/', component: home},
    // {path: '/about', component: about},
    {path: '/misterEmail', component: misterEmail},
    {path: '/missKeeper', component: misterEmail},
  ];

Vue.use(VueRouter);
var myRouter = new VueRouter({routes})

export default myRouter;