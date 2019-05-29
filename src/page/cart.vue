<template>
<div>

<table>
    <tr v-for="item in newarr" :key="item._id">
      <td><img :src="'http://api.cat-shop.penkuoer.com'+item.coverImg"/></td>
      <td>{{item.name}}</td>
      <td>{{item.price}}元</td>
    </tr>
</table>
<van-submit-bar
  :price="3050"
  button-text="提交订单"
/>
</div>
</template>
<script>
  import  axios from 'axios';
export default {
    data()
    {
        return{
            imageURL:'../img/01.jpg',
            carts:{},
            arr:[],
            newarr:[],
            obj:{name:"张海洋",age:20}
        }
    },
    created(){
           this.carts=localStorage.getItem('cart');
            axios
      .get("http://api.cat-shop.penkuoer.com/api/v1/products", {
        params: {
          page: 2
        }
      })
      .then(datas => {
        this.arr = datas.data.products;
           
        for(var items in JSON.parse(this.carts))
        {  
            for(var i=0;i<this.arr.length;i++)
            {
                if(this.arr[i]._id==items)
                {
                    this.newarr.push(this.arr[i]);
                }
            }
        }
        
      });
           
    },
}
</script>
<style scoped>
img{
    width: 50px;
    height: 50px;
}
</style>

