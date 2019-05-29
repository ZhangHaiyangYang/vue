
import Vue from 'vue'
import Router from 'vue-router';
import index from './page/index';
import xinxi from './page/xinxi';
import cart from './page/cart';

import xq from './page/xq'
Vue.use(Router);
const router =new Router({
    routes: [{
        path:'/',
        component:index,
        name:'index'
    },
    {
      path:'/xinxi',
      component:xinxi,
      name:'xinxi'
    },
    {
      path:'/cart',
      component:cart,
      name:'cart'
    },
    {
      path:'/xq',
      component: xq,
      name:'xq'
    }
  ]
  });
  export default router
  