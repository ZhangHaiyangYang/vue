
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
      path:'/geren',
        component:()=> import ('./page/geren.vue'),
      name:'geren',
      meta:{login:true}
    
    },
    {
      path:'/xq',
      component: xq,
      name:'xq',
     
    },
   
    {
      path:'/adress',
      component:()=> import('./page/adress.vue'),

      name:'adress',
    },
    {
      path:'/adresslist',
      component :()=>import ('./page/adresslist.vue'),
      name:'adresslist'
    },
    {
      path:'/user',
        component:()=>import('./page/user.vue'),
        name:'user',
    },
    {
      path:'/suer',
      name:'suer',
      component :()=>import('./page/suer.vue')
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
  