<template>
  <div id="hello">
    <button @click="post">发送</button>    
    <!-- <div class="content-top  clearFix">
      <div class="left" @click="upload">请上传图片</div>
      <div class="right"></div>
    </div>
    <div class="content-middle">
      <p>选中两张图片，大小为55.5KB</p>
    </div>
    <div class="content-bottom"></div> -->
    <input type="file" multiple @change="upload" id="upload">
    <img :src="img"/>
    <button @click="getLoginMsg">获取</button>
    <ol>
      <li v-for="msg in msgs">
        {{ msg }}
      </li>
    </ol>
  </div>
</template>

<script>
import Vue from 'vue';
import {sGetPhotoMsg,sQryLoginMsg,sUploadImg} from '../axios/api';
import {test} from '../axios/http';
import {formatDate} from '../common/publicMethod'
export default {
  name: 'HelloWorld',
  data () {
    return {
      img: "",
      msgs: []
    }
  },
  methods: {
    post: function () {
      Vue.axios.post('/small_api/api/v1/login/sendMsg', {
          // 此参数就是写到请求体中的参数
          phoneNum: "18860454529"
        }).then((response) => {
          console.log(response);
          console.log(response.data.msg);
          this.postData = response.data;
          this.$router.push("/test");
        }).catch((error) => {
          console.log(error);
        });
    },
    upload: function (e) {
      let that = this;
      const reader = new FileReader();
      let name = e.target.files[0].name;
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = function(){
        // alert(this.result);
        // console.log(this.result);
      //   sGetPhotoMsg({
      //     IMG_BASE: this.result
      //  }).then(res => {
      //   console.log(res);
      //   that.img = this.result;
      // }).catch(err => console.log(err));

       sUploadImg({
          IMG_BASE: this.result,
          PHONE_NAME: name
       }).then(res => {
        console.log(res);
        that.img = this.result;
      }).catch(err => console.log(err));
      };

    },
    getLoginMsg: function () {
      let that = this;
      sQryLoginMsg().then(res => {
        that.msgs = res.msg; 
        for (var i = that.msgs.length - 1; i >= 0; i--) {
          that.msgs[i].opTime = formatDate(that.msgs[i].opTime);
        }
      }).catch(err => console.log(err));
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*div,input,img{
  margin: 0;padding: 0;
}
#hello{
  border: 1px solid #ccc;
  width: 800px;
  height: 600px;
  margin: 50px auto;
  border-radius: 5px;
}
#upload{
  opacity: 0;
}
.content-top div{
  border: 1px dashed #ccc;
  height: 120px;
  border-radius: 5px;
  float: left;
  margin: 4%;
}
.left{
  width: 30%;
  line-height: 120px;
}
.right{
  width: 50%;
}
.content-middle{
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

.clearFix{
  zoom:1;
}
.clearFix:after{
  content: "";
  display: block;
  width: 0;
  height: 0;
  clear: both;
}*/
</style>
