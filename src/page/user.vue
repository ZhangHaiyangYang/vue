<template>
    <div id="user">
<van-cell-group>
  <van-field
    v-model="user.userName"
    required
    clearable
    label="用户名"
  
    placeholder="请输入姓名"
   
  />
   <van-field
    v-model="user.nickName"
    required
    clearable
    label="昵称"
    placeholder="请输入昵称"
   
  />

  <van-field
    v-model="user.password"
    type="password"
    label="密码"
    placeholder="请输入密码"
    required
  />
   <van-field
    v-model="password2"
    type="password"
    label="确认密码"
    placeholder="请输入密码"
    required
  />
</van-cell-group>
 <van-uploader name="uploader" :after-read="addimg">
 
  <img width="50px" height="50px" class="head-img" src="img/user.jpg" ref="goodsImg"/>
</van-uploader>
<p><button class="bu">登录</button> <button @click="adduser" class="bu">注册</button></p>
<van-dialog v-model="show" title="请输入用户名及密码" show-cancel-button></van-dialog>
</div>
</template>
<script>
import { constants } from 'crypto';
import axios from 'axios';
import { Notify } from 'vant';
export default {
    data()
    {
        return{
            password2:'',
            show:false,
            user:{
                userName:'',
                password:'',
                 avatar:'',
                 nickName:''
            }

        }
    },
    methods:{
        addimg(files)
        {
           this.$refs.goodsImg.src = files.content;
           var formdata=new FormData();
           formdata.append('file',files.file);
axios.post('http://api.cat-shop.penkuoer.com/api/v1/common/file_upload',formdata,{'Cont-Type':'multipart/form-data'}).then((res)=>{
               this.user.avatar=res.data.info;
               })

           
        },
        adduser()
        {
            
            
           if(this.user.userName && this.user.password&&this.user.nickName)
           {
               if(this.password2==this.user.password)
               {
                   axios.post('http://api.cat-shop.penkuoer.com/api/v1/auth/reg',this.user).then((res)=>{
                
                     localStorage.setItem('token',res.data.token);
                   })
               }
               else{
                 this.show=!this.show
               }
          
           }
           else{
             
              this.show=!this.show;
      
           }
          
        }

    }
}
</script>

<style scoped>
#user{
    box-sizing: border-box;
    padding-left: 50px
}
.bu{
    width: 100px;
    height: 50px;
    line-height: 30px;
    background: orange;
    color: pink;
    text-align: center;
    border: 0;
    border-radius: 30px;
    font-weight: bold;
    font-size: 20px;
    margin-left: 20px
}
.add{
    line-height: 50px
}
img{
  
}
</style>

