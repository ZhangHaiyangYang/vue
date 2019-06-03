<template>
  <div id="box">
  <form action="/">
       <van-search
    placeholder="请输入搜索关键词"
  />
</form>
  <van-tabs>
  <van-tab title="男装"></van-tab>
  <van-tab title="女装"></van-tab>
  <van-tab title="家电"></van-tab>
  <van-tab title="日用品"></van-tab>
</van-tabs>
  <van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img  :src="image" />
  </van-swipe-item>
</van-swipe>
<van-card  v-for="items in arr" @click="change(items._id)"  :key="items._id"
  :price="items.price"
  :desc="items.descriptions"
  :title="items.name"
  :thumb="'https://api.cat-shop.penkuoer.com'+items.coverImg"
/>
</div>

</template>
<script>
import axios from "axios";
import { constants } from 'crypto';

export default {
    data()
    {
        return{
         
           active: 0,
          arr:[] ,
          newarr:[],
            images: [
        'https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg',
        'https://aecpm.alicdn.com/simba/img/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg',
      ],
      pages:1,
      pa:null,
        }

    },
    methods:{
     
          change(id)
          {
           
            this.$router.push({name:'xq',query:{ids:id}});
          },
          getdata()
           {
      axios
      .get("https://api.cat-shop.penkuoer.com/api/v1/products",{
        params: {
          page: this.pages,
         

        }
      })
      .then(datas => {
        this.arr = this.arr.concat(datas.data.products);
        this.pa= datas.data.pages
      });
     },
     
     
    },
   
   created() {
     this.getdata();
      this.$nextTick(()=>{
        const box=document.querySelector('#box');
        box.onscroll=()=>{
          const  cheight=box.clientHeight;
          const  sheight=box.scrollHeight;
          const stop=box.scrollTop;
          if(cheight+stop==sheight)
          {
            
            this.pages++;
            if(this.pages>this.pa)
            {

              return false;
            }
            this.getdata();
          } 
        }

      })

  },

}

</script>
<style scoped>
#box{
  overflow: auto;
  padding-bottom: 80px
}
</style>



