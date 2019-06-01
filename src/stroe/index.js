 import vue from 'vue';
import  vuex from 'vuex';
vue.use(vuex);
const store=new vuex.Store({
    state:{
        isshow:true
    },
    mutations:{

        change(state,val)
        {
            state.isshow=val;
        }
    }
})
export default store;