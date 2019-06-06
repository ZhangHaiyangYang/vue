<template>
<van-address-edit
  :area-list="areaList"
  show-postal
  show-delete:false
  show-set-default
  show-search-result
  :search-result="searchResult"
  @confirm="add"
  @save="onSave"
  @change-detail="onChangeDetail"

/>
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
   
    }
  },
   created()
  {
   
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
      axios.post('https://api.cat-shop.penkuoer.com/api/v1/addresses',this.obj,{headers:{
        authorization:`Bearer ${localStorage.getItem('token')}`
      }}).then((res)=>{
        console.log
        Notify('地址保存成功')
      })
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