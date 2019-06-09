<template>
<div id="xinxi">
<van-card v-for ="i in 15 " :key="i"
title="陈钰琪"
  desc="六一快乐,"  
  :thumb="imageURL"
/>
</div>
</template>
<script>
export default {
    data()
    {
        return{
            imageURL:'../img/02.jpg',
            active:0
        }
    },
    components:{
        
    }
}
</script>
<style>
#xinxi{
    background: pink
}
#xinxi .van-card{
   border: 1px solid orange;
   border-radius: 20px;
   overflow: hidden
}
#xinxi .van-card__content{
    margin-top: 25px
}
#xinxi .van-card__content .van-card__title{
    line-height: 30px;
    font-size: 20px;
    color: pink
}
</style>


