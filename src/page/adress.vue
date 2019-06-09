<template>
<div>
<van-address-edit
  :area-list="areaList"
  show-postal
  show-delete:false
  show-set-default
  show-search-result
  :address-info="state"
  :search-result="searchResult"
  @confirm="add"
  @save="onSave"
  @change-detail="onChangeDetail"
/>
</div>
</template>
<script>
import arr from './datas.js'
import axios from 'axios';

import { Notify } from 'vant';
export default {
  data() {
    return {
      areaList:arr,
      searchResult: [],
      obj:{},
      active:0,
      state:{}
    
    }
  },
   created()
  {
     if(this.$route.query.id)
     {
         axios.get('https://api.cat-shop.penkuoer.com/api/v1/addresses/'+this.$route.query.id,{headers:{
         authorization:`Bearer ${localStorage.getItem('token')}`
    }}).then((res)=>{
            this.areaList.name=res.data.receiver;
            this.areaList.tel=res.data.mobile;
            this.areaList.addressDetail=res.data.address;
            this.areaList.isDefault=res.data.isDefault;
            this.areaList.province=res.data.regions.split('-')[0];
            this.areaList.city=res.data.regions.split('-')[1];
            this.areaList.county=res.data.regions.split('-')[2];
              this.areaList.addressDetail=res.data.address;
              this.state=this.areaList;
             
    })
     }
   
  },

  methods: {
    
      add(oarr)
      {
          
         
      },
    onSave(cont) {
         this.obj.receiver=cont.name;
         this.obj.mobile=cont.tel;
         this.obj.regions=cont.province+'-'+cont.city+'-'+cont.county;
         this.obj.address=cont.addressDetail;
         this.obj.isDefault=cont.isDefault;
         console.log(this.$route.id)
         if(this.$route.query.id)
         {
    axios.put('https://api.cat-shop.penkuoer.com/api/v1/addresses/'+this.$route.query.id,this.obj,{headers:{
        authorization:`Bearer ${localStorage.getItem('token')}`
      }}).then((res)=>{
        Notify('地址修改成功');
        this.$router.push({name:'adresslist'})
      })
         }
         else
         {
      axios.post('https://api.cat-shop.penkuoer.com/api/v1/addresses',this.obj,{headers:{
        authorization:`Bearer ${localStorage.getItem('token')}`
      }}).then((res)=>{
        console.log
        Notify('地址保存成功')
      })
    }
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  }
}
</script>