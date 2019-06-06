<template>
<div id="box">
<h1><span>我的购物车</span><span>管理</span></h1>
<div id="cont">
<ul>
  <li v-for='item in arr' :key="item._id">
    <p>
      
     <van-checkbox v-model="item.checked" @change="add(item.product.price,item.quantity,item.checked)"></van-checkbox>
 </p>
<van-card
  :price="item.product.price"
  :desc="item.product.descriptions"  
  :thumb="'http://api.cat-shop.penkuoer.com'+item.product.coverImg"
/>
<span class="nums"><van-stepper @minus="jian(item.product.price,item.quantity,item.checked)" @plus="addn(item.product.price,item.quantity,item.checked)" :integer=flags v-model="item.quantity"/></span>
  </li>
</ul>
</div>
<van-submit-bar
  :price="prices"
  button-text="结算" @submit="dindan"
>
  <van-checkbox @change="quanxuan" v-model="checkeds">全选</van-checkbox>
</van-submit-bar>
<van-dialog @confirm="sussess" v-model="show" title="亲, 请先填写收货地址哦!" show-cancel-button></van-dialog>
</div>
</template>
<script>
import axios from 'axios';
import { constants } from 'crypto';
import { Notify } from 'vant';

export default {
    data()
    {
        return{
          flage:true,
          arr:[],
          checkeds:false,
          prices:0,
          flags:true,
          ns:0,
          nums:0,
          show:false,
          flag_s:true,
          num_s:0,
            aobj:[]
          
         
        }
    },
    created()
                       {
  
            axios.get('http://api.cat-shop.penkuoer.com/api/v1/shop_carts',{
                    headers:{
                         authorization:`Bearer ${localStorage.getItem('token')}`
                    }
                }).then((res)=>{
                    
              
              
                  for(var i=0;i<res.data.length;i++)
                  {
                    if(res.data[i].product)
                    {
                    var obj={...res.data[i],...{checked:false}};
                    this.arr.push(obj);
                    }
                    
                }
              
                 
                })
    },
    watch:{
        
    },
    methods:{
     add(price,nums,flag)
     {  
       this.nums=nums;
        
       if(flag)
       {
        this.num_s++
         this.prices+=(price*this.nums)*100;
       }
       else{
         this.prices-=(price*this.nums)*100;
         this.num_s--
  
       }
       if(this.num_s==this.arr.length)
       {
         this.checkeds=true;
       }
       else{
         this.checkeds=false;
       }
       
     },
     addn(price,nums,flag)
     { this.nums=nums+1;
     if(flag)
     {
        this.prices=0
        this.prices+=(price*this.nums)*100;
     }
     },
     jian(prissce,nums,flag){
     if(flag)
     {
           if(nums==2)
           {
            this.prices=price*100
           }
           else{
            this.prices-=(price*(this.nums-(nums-1))*100);
           }
     }
     },
     quanxuan()
     {

       //console.log(this.checkeds)
        for(var i=0;i<this.arr.length;i++)
        {
          if(this.checkeds)
          {  
            this.arr[i].checked=true;
            
          }
          else{
            console.log(this.num_s)
             if(this.num_s==this.arr.length)
             {
                this.arr[i].checked=false;
             }
           
          
          }
        }
     },
     dindan()
     {
       if(this.prices>0)
       {
        axios.get('http://api.cat-shop.penkuoer.com/api/v1/addresses',{
                    headers:{
                         authorization:`Bearer ${localStorage.getItem('token')}`
                    }
                }).then((res)=>{
                  
                     if(res.data.addresses.length==0)
                     {
                       this.show=true;
                     }
                     else{
                          for(var i=0;i<this.arr.length;i++)
                          {
                            if(this.arr[i].checked)
                            {
                              this.aobj.push(this.arr[i]);
                            }
                          }
                         
                          this.$router.push({name:'suer'});
                          localStorage.setItem('cart',JSON.stringify(this.aobj));
                     }
                })
       }
       else{
         Notify('亲,请先选择商品哦！')
       }
     },
     sussess(){
       this.$router.push({name:'adress'});
     }
    }
}
</script>
<style scoped>
img{
    width: 50px;
    height: 50px;
}
h1{
  height: 50px;
  display: flex;
  justify-content:space-between;
  line-height: 50px;
 
}
#box{
  background:#75d8f4;
   overflow: auto;
   padding-bottom: 100px
}

li{
  list-style: none;
   border-radius: 10px;
   height: 170px;
   background: white
}
.nums{
  float: right
}

</style>

