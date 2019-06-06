import Vant from 'vant';
import 'vant/lib/index.css';
import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import stroe from './stroe/index'
import { Notify } from 'vant';

Vue.use(Notify);
Vue.use(Vant);
Vue.config.productionTip = false;
new Vue({
  store: stroe,
  router,
  render: h => h(App),
}).$mount('#app')