import misterEmail from './pages/misterEmail/misterEmail.cmp.js'
import emailDetails from './cmps/misterEmail/email-details.cmp.js'
import home from './pages/home.js'
import keeperHome from './pages/misskeeper/keeper-home.js'
import keeperAddEdit from './cmps/misskeeper/keeper-createEdit.cmp.js'


const routes = [
    {path: '/', component: home},
    // {path: '/about', component: about},
    {path: '/misterEmail', component: misterEmail},
    {path: '/misterEmail/:emailId',component: emailDetails},
    {path: '/missKeeper', component: keeperHome},
    {path: '/missKeeper/:noteId?', component: keeperAddEdit},
  ];

Vue.use(VueRouter);
var myRouter = new VueRouter({routes})

export default myRouter;