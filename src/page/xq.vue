<template>
     <div id="xq">
    <header>
    <img :src="'http://api.cat-shop.penkuoer.com'+obj.coverImg"/>
    </header>
<section>
    <van-card
  tag="新品"
  :price="obj.price"
  :desc="obj.descriptions"  
  :title="obj.name"
  :origin-price="(obj.price+20).toFixed(2)"
>
  <div slot="footer">
      <van-stepper v-model="value" />
       <van-button type="primary" round>立即购买</van-button>
 <van-button round @click="addcart" type="danger">加入购物车</van-button>
  </div>
</van-card>
</section>
<footer>
</footer>
</div>
</template>
<script>
import axios from 'axios';
export default {
    name:'xq',
    data()
    {
        return{
            imageURL:'../img/01.jpg',
            obj:{},
            value:1,
            cart:{},
        }
    },
    created() {
           axios.get('http://api.cat-shop.penkuoer.com/api/v1/products/'+this.$route.query.ids).then((datas)=>{
              this.obj=datas.data;
         })
         
       if(localStorage.getItem('cart'))
       {
           this.cart=JSON.parse(localStorage.getItem('cart'));
       }
    },
    methods:{

    
    addcart()
    {
        if(this.cart[this.$route.query.id])
        {
            this.cart[this.$route.query.ids]+= Number(this.value);
        }
        else{
             this.cart[this.$route.query.ids]= Number(this.value);
        }
        localStorage.setItem('cart',JSON.stringify(this.cart));
        this.$router.push({name:"cart"});
    }
    }
}
</script>
<style scoped>
header{
    width: 100%;
    height: 250px;
    border: 1px solid pink;
}
 header img{
     width: 100%;
     height: 250px;

}

</style>


