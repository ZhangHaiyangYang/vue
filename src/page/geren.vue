<template>
  <div id="geren">
<h2 id="img">
  <img src="img/02.jpg"/><span>陈钰琪</span>
</h2>

<section>
  <figure>
    <span>12</span>
      <figcaption>收藏</figcaption>
  </figure>
  <figure>
    <span>8</span>
      <figcaption>关注</figcaption>
  </figure>
  <figure>
    <span>12</span>
      <figcaption>足迹</figcaption>
  </figure>
  <figure>
    <span>150</span>
      <figcaption>积分</figcaption>
  </figure>
  </section>
 
  <article>
    <van-cell title="我的订单" is-link />
    <div id="cart">
   <figure>
     <van-icon name="balance-pay" info="9"  />
     <figcaption>待付款</figcaption>
   </figure>
   <figure>
    <van-icon name="free-postage"  />
     <figcaption>待发货</figcaption>
   </figure>
   <figure>
    <van-icon name="logistics"  />
     <figcaption>已发货</figcaption>
   </figure>
   <figure>
    <van-icon name="records"  />
     <figcaption>待评价</figcaption>
   </figure>
   <figure>
    <van-icon name="balance-o"  />
     <figcaption>退货退款</figcaption>
   </figure>
    </div>
    <div id="cont">
    <van-cell @click="getdingdan" title="我的订单" is-link />
    <van-cell title="我的发布" is-link />
      <van-cell title="我的钱包" is-link />
          <van-cell title="邀请有礼" value="邀请好友的红包" is-link />
          <van-cell title="我的卡卷" is-link />
            <van-cell title="联系客服" is-link />
              <van-cell title="关于好物" is-link />
              </div>
  </article>
  </div>
</template>
<script scoped>
export default {
  
}
</script>
<style scoped>
#img{
  height: 100px;
  padding-left: 20px

}

#img img{
  width: 80px;
  height: 80px;
  border-radius: 50%;
float:left;
}
#img span{
  line-height: 90px;
  font-size: 15px;
 margin-left: 15px
}
span{
  font-size: 15px
}
section{
 margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around
}

 section figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
  line-height: 30px
}
#cont{
  overflow: auto;
  padding-bottom: 50px
}
h4 {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px
}

#cart{
  display: flex;
  justify-content: space-around;
  align-items: center;
}


#cart figure{
  display: flex;
  flex-direction: column;
  align-items: center;
}
#cart .van-icon{
  font-size: 15px;
  line-height: 40px;
  margin: 10px 0 15px 0px
}
</style>


