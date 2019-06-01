<template>
  <div class="goods">
        
        <img id="im" :src="goods.coverImg | imgs">
    <van-cell-group>
      <van-cell>
        <div class="goods-title">产品名称：{{ goods.name }}</div>
        <div style="color:red" class="goods-price">￥{{ goods.price}}元</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：包邮</van-col>
        <van-col span="14">剩余：{{ goods.quantity }}</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <template slot="title">
          <span class="van-cell-text">有赞的店</span>
          <van-tag class="goods-tag" type="danger">官方</van-tag>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
    </van-cell-group>
    <van-goods-action>
      <van-goods-action-mini-btn icon="chat-o" @click="sorry">
        客服
      </van-goods-action-mini-btn>
      <van-goods-action-mini-btn :info="nums" icon="cart-o">
        购物车
      </van-goods-action-mini-btn>
      <van-goods-action-big-btn @click="goumai">
        立即购买
      </van-goods-action-big-btn>
      <van-goods-action-big-btn primary @click="addcart">
        加入购物车
      </van-goods-action-big-btn>
    </van-goods-action>
    <van-popup  position="bottom" v-model="show">
    <van-card
  :price=" goods.price"
  :title="goods.name"
  :thumb="goods.coverImg | imgs"
/>
<h1>
    <p>购买数量</p>
<van-stepper :max="goods.quantity" v-model="value" />
</h1>
<button @click="sure" class="sure">确定</button>
<span class="close" @click="close">X</span>
    </van-popup>
  </div>
</template>

<script>
import axios from 'axios';
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from 'vant';
export default {
  components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionBigBtn.name]: GoodsActionBigBtn,
    [GoodsActionMiniBtn.name]: GoodsActionMiniBtn
  },
  data() {
    return {
      goods: {
        
      },
       show: false,
       value:1,
       nums:0,
    }
  },
  created(){
      this.getnums();
      axios.get('https://api.cat-shop.penkuoer.com/api/v1/products/'+this.$route.query.ids).then(res=>this.goods=res.data);
  },
 
  methods: {
      getnums()
      {
            axios.get('https://api.cat-shop.penkuoer.com/api/v1/shop_carts',{
                    headers:{
                         authorization:`Bearer ${localStorage.getItem('token')}`
                    }
                }).then((res)=>{
                    console.log(res)
                    
                    for(var i=0;i<res.data.length;i++)
                    {
                         this.nums+=res.data[i].quantity;
                    }
                })

              
      },

    addcart() {
        this.show=true;
     //this.$router.push('cart');
    },
    sorry() {
      Toast('暂无门店');
    },
    goumai()
    {

    },
    sure(){
        axios.post('https://api.cat-shop.penkuoer.com/api/v1/shop_carts',{product:this.$route.query.ids,quantity:this.value},{headers:{

            authorization:`Bearer ${localStorage.getItem('token')}`
        }}).then((res)=>{
            if(res.data.code="succsess")
            {
                this.nums=0
                alert("加入购物车成功");
                this.getnums();
                this.show=false;
            }
        })

    },
    close()
    {
        this.show=false;
    }
  },
  filters:{
      imgs(val)
      {
          return 'https://api.cat-shop.penkuoer.com'+val;
      }

  }
};
</script>
<style>
.goods {
  padding-bottom: 50px;
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
}
#app .van-goods-action{
    bottom: 60px
}
#im{
    width: 100%;
    height: 300px;
}
#app .van-card__content {
    box-sizing: border-box;
    padding-top: 30px
}
h1{
    border: 1px solid orange;
    display: flex;
    justify-content: space-around;
    font-size: 15px;
    align-items: center;

}
.sure{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: orange;
    text-align: center;
    border-radius: 30px;
    border: 0;
}
.close{
    position: absolute;
    right: 0;
    top: 0;
    color: orange;
    cursor: pointer;
    font-size: 20px
}
</style>

