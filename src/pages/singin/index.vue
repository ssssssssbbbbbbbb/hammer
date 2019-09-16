<template>
  <div>
    <div class="box">
      <!--头部-->
      <header>
        <p>
          <span>登录官网</span>
        </p>
      </header>
      <section>
        <div class="container">
        <div class="form-group">
          <input type="text" class="form-control" id="login_username" placeholder="手机号/邮箱" @input="handleLoginNum($event)"/>
        </div>
        <div class="form-group">
          <input type="password" class="form-control" id="login_password" placeholder="请输入密码" @input="handleLoginPsw($event)" />
        </div>
        <router-link to="singup" tag="p" class="text-primary toggleTo">没有账号？立即注册</router-link>
        <button type="submit" class="btn btn-primary" @click="handleLoginClick()">登陆</button>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      position: state => state.Login.position
    })
  },
   methods: {
    ...mapMutations({
     handleLoginNum: "Login/handleLoginNum",
      handleLoginPsw: "Login/handleLoginPsw",
      handleLoginClick: "Login/handleLoginClick"
    })
  },
  watch: {
    position(newVal, oldVal) {
      console.log(newVal, 1111);
      if (newVal) {
        this.$router.push("/shouye");
      }
    }
  }
};
</script>
<style >
.box {
  width: 100%;
  height: 100%;
  background: #eee;
}
header {
  width: 100%;
  height: 1rem;
  background: #fff;
  position: absolute;
  top: 0;
}
header p {
  height: 1rem;
  background: #000;
  color: #fff;
  line-height: 0.5rem;
  text-align: center;
}
header p span {
  font-size: 33px;
}
section {
  width: 100%;
  background: #eee;
  position: absolute;
  top: 1rem;
  bottom: 1rem;
  overflow-y: auto;
}
section .container{
    width: 100%;
    height: 300px;
    background:rgba(255,255,255,.6);
    border-radius: 10px;
    padding: 20px;
    text-align: center
}
section .container .form-control{
    width:80%;
    height:80px;
    font-size: 30px;
}
section .container .btn{
    width: 80%;
    height: 80px;
    font-size: 0.3rem;
    background: rgb(119, 187, 243);
}
</style>