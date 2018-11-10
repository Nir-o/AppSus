import home from './pages/home.js'
import misterEmail from './pages/misterEmail/misterEmail.cmp.js'
import emailDetails from './cmps/misterEmail/email-details.cmp.js'
import emailCompose from './cmps/misterEmail/email-compose.cmp.js'


import keeperHome from './pages/misskeeper/keeper-home.js'
import keeperAddEdit from './cmps/misskeeper/keeper-createEdit.cmp.js'


const routes = [
  { path: '/', component: home },
  {
    path: '/misterEmail', component: misterEmail, children: [
      { path: 'newEmail', component: emailCompose },
      { path: ':emailId', component: emailDetails },
    ]
  },
  { path: '/missKeeper', component: keeperHome },
  { path: '/missKeeper/:noteId?', component: keeperAddEdit },
];

Vue.use(VueRouter);
var myRouter = new VueRouter({ routes })

export default myRouter;