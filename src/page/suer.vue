<template>
    <div id="sure">
      <p class="din">订单确认</p>

      <article>
    <div id="cont">
    <van-icon name="location" />
    <section>
       <p>{{aderss.receiver}}</p>
       <p>{{aderss.mobile}}</p>
       <p>{{aderss.regions}}</p>
    </section>
        </div>
       <span>></span>
      </article>
      <van-card  v-for="item in arr" :key="item._id"
    :num="item.quantity"
    :price="item.product.price"
    :desc="item.product.descriptions"  
    :title="item.product.name"
    :thumb="item.product.coverImg | img"
/>
<van-submit-bar
    
  :price="prices*100"
  button-text="提交订单"
  @submit="onSubmit"
  
>
<span slot="default">共{{arr.length}}件</span>
</van-submit-bar>
 <van-popup  position="bottom" v-model="show">
<span class="close" @click="close">关闭</span>
<p>￥{{prices}}元</p>
<div id="hao">
    <em>支付宝账号:</em>
    <em>{{aderss.mobile}}</em>
</div>
<button @click="suer">确定支付</button>
    </van-popup>
    </div>
</template>
<script>
import { Notify } from 'vant';
import axios from 'axios';
import { notDeepStrictEqual } from 'assert';
export default {
    data()
    {
        return{
           aderss:{},
           arr:[],
           prices:0,
           datas:{},
           arrs:[],
           show:false,
        }
    },
    filters:{
        img(val)
        {
            return val? 'http://api.cat-shop.penkuoer.com'+val :''
        }
    },
    methods:{
        getdatas(obj)
        {
         this.datas=obj;
        },
        suer(){
           Notify({message:'支付成功',background:'green'})
           this.show=false;
        },
        close(){
            Notify({
                message:"交易取消！",
                background:'green'
            })
            this.show=false;
        },
        onSubmit()
        {
             this.show=true;
             this.datas. orderDetails=this.arrs;
           /* axios.post('http://api.cat-shop.penkuoer.com/api/v1/orders',this.datas,{headers:{
                authorization:`Bearer ${localStorage.getItem('token')}`
            }}).then((res)=>{
                        
            })*/
            
        }
    },
    created()
    {
     this.arr=JSON.parse(localStorage.getItem('cart'));

        this.arr.forEach(item=>{
                 this.arrs.push({quantity:item.quantity,product:item.product._id,price:item.product.price});
            this.prices+=Number(item.quantity*item.product.price)
        })
        if(this.$route.query.id)
        {
      
        }
        else{
            axios.get('http://api.cat-shop.penkuoer.com/api/v1/addresses',{headers:{
         authorization:`Bearer ${localStorage.getItem('token')}`
    }}).then((res)=>{
          res.data.addresses.forEach(item => {
              if(item.isDefault)
              {
                  this.getdatas({ address: item.address, regions: item.regions,receiver:item.receiver})
                  item.regions=item.regions+"-"+item.address;
                  this.aderss=item;
              }
          });
         
    })
        }
    }
}
</script>
<style scoped>
.din{
    color: #2eedac;
    padding-top: 10px;
    padding-left: 10px;
    text-align: center;
}
article{
    padding: 0 10px;
    height: 130px;
    border-radius: 20px;
    background: #cecece;
    margin-top: 5px;
    display: flex;
    align-items: center;
  justify-content: space-between;
  margin-bottom: 15px}
#cont {
    display: flex;
    align-items: center
}
.van-submit-bar__bar span:nth-of-type(1){
   font-size: 15px
}
article span{
    color: white;
    font-size: 20px;
}
#cont section p{
    margin-left: 15px;
    line-height: 30px;
}
#cont  .van-icon{
    font-size: 25px
}
#suer{
    overflow: auto;
}
#sure .van-popup--bottom{
   height: 300px;
   border-radius: 10px
}
#sure .van-popup--bottom span{
   float: left;
   margin: 8px 8px 0 0;
}
#sure .van-popup--bottom p{
    text-align: center;
    padding-top: 30px;
    font-size: 25px;
    font-weight: bold;
}
#hao{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
    font-style: normal;
    margin-top: 30px
}
 
  .van-popup--bottom   button{
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    margin-top: 80px;
    height:50px;
    color: white;
    border-radius: 20px;
    background:orange;
    width: 100%;
    border:0;
}
</style>

