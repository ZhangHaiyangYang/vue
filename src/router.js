
import Vue from 'vue'
import Router from 'vue-router';
import index from './page/index';
import xinxi from './page/xinxi';
import cart from './page/cart';
import store from './stroe/index';

import xq from './page/xq'
Vue.use(Router);
const router =new Router({
    routes: [{
        path:'/',
        component:index,
        name:'index',
    },
    {
      path:'/xinxi',
      component:xinxi,
      name:'xinxi',
     
    },
    {
      path:'/cart',
      component:cart,
      name:'cart',
      meta:{login:true}
   
    },
    {
      path:'/xq',
      component: xq,
      name:'xq',
     
    },
    {
      path:'/user',
        component:()=>import('./page/user.vue'),
        name:'user'
    }
  ]
  });

  router.beforeEach((to,from,next)=>{
    if(to.meta.login)
    {
      if(localStorage.getItem('token'))
      {
         next()
      }
      else{
        next({name:'user'})
      }
    }
    else{
      next();

    }
  })
  export default router
  