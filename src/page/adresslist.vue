<template>
<div id="list">
  
<van-address-list
  v-model="id"
  :list="list"
  @add="adddata"
  @select="add"
  @edit="change"
  
/>
<button class="del" @click="dele">删除地址</button>
</div>
</template>
    <script>
    import axios from 'axios'
    export default {
        created(){
    axios.get('https://api.cat-shop.penkuoer.com/api/v1/addresses',{headers:{
         authorization:`Bearer ${localStorage.getItem('token')}`
    }}).then((res)=>{
     
       
    res.data.addresses.forEach(item => {
      if(item.address)
      {
           item.address=item.regions.replace(/\-/g,',')+item.address;
        this.del(item,'_id','id');
        this.del(item,'receiver','name');
        this.del(item,'mobile','tel');
      }
    })
  
    this.list=res.data.addresses;
    });
  
        },
         data() {
    return {
      id: '',
      list: [],
      active:0
    }
  },
  methods: {
      del(obj,item,newitem)
      {
          obj[newitem]=obj[item];
          delete obj[item];
      },
      add()
      {  
        /*if(this.$route.query.flag)
        {
        this.$router.push({name:'suer',query:{id:this.id}})
        }*/
      },
      dele(){

        axios.delete('https://api.cat-shop.penkuoer.com/api/v1/addresses/'+this.id,{headers:{authorization:`Bearer ${localStorage.getItem('token')}`}})
        .then((res=>{console.log(res)}));
      },
      adddata()
      {
       this.$router.push({name:"adress"})
      },
      change(item)
      {
        this.$router.push({name:"adress",query:{id:item.id}})
      }
      }
    
    }
    </script>
    <style scoped>
    .del{
      width: 70%;
      height: 40px;
      text-align: center;
      line-height: 40px;
    background: red;
    color: white;
    border: 0;
    display: block;
    margin: 0 auto;
  
   
    }

    #list{
      overflow: auto;
    }
    </style>
    
    