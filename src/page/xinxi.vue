<template>
<div>
<van-card v-for ="i in 5 " :key="i"
title="陈钰琪"
  desc="在吗？"  
  :thumb="imageURL"
/>

</div>
</template>
<script>
export default {
    data()
    {
        return{
            imageURL:'../img/02.jpg'
        }
    }
}
</script>

