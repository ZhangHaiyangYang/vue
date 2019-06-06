<template>
<div>
<van-address-list
  v-model="chosenAddressId"
  :list="list"
 
/>
</div>
</template>
    <script>
    import axios from 'axios'
    export default {
        created(){
    axios.get('https://api.cat-shop.penkuoer.com/api/v1/addresses',{headers:{
         authorization:`Bearer ${localStorage.getItem('token')}`
    }}).then((res)=>{
       
        console.log(res.data.addresses)
    res.data.addresses.forEach(item => {
           item.address=item.regions.replace(/\-/g,',')+item.address;
        this.del(item,'_id','id');
        this.del(item,'receiver','name');
        this.del(item,'mobile','tel');
    })
    this.list=res.data.addresses;
    });
        },
         data() {
    return {
      chosenAddressId: '1',
      list: [],
    }
  },
  methods: {

      del(obj,item,newitem)
      {
          obj[newitem]=obj[item];
          delete obj[item];
      }
    }
    }
    </script>
    