<template>
  <div>
    <div class="box">
      <!--头部-->
      <header>
        <p>
          <span>注册官网</span>
        </p>
      </header>
      <section>
        <form class="form">
          <div class="user">
            <input type="text" class="form-control" placeholder="请输入手机号" color="#fff" id="user" name="user"  @input="handleInputNum($event)" />
          </div>
          <div class="password">
            <input type="password" class="form-control" placeholder="密码" id="password" name="password" @input="handleInputPsw($event)"/>
          </div>
          <div style="height: 30px; color:#fff">
            <div style="height: 30px;line-height: 1;">
              <input type="checkbox" checked style="color: blue;font-size: 20px"/> 
              <a href style="color: blue;font-size: 20px">同意注册条款</a>
            </div>
          </div>
          <button class="bn"  @click="handleClickLogin()">立即注册</button>
            <router-link to="/singin" tag="p" >登录</router-link>
        </form>
      </section>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      bool: state => state.Login.bool
    })
  },
  methods: {
    ...mapMutations({
     handleInputNum: "Login/handleInputNum",
      handleInputPsw: "Login/handleInputPsw",
      handleClickLogin: "Login/handleClickLogin"
    })
  },
  watch: {
    bool(newVal, oblVal) {
      if (newVal) {
        this.$router.push("/login");
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
section .form {
  width: 100%;
  height: 320px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
}
section .form .form-control{
    width:80%;
    height:80px;
    font-size: 30px;
}
section .form .bn{
    width: 80%;
    height: 80px;
    font-size: 0.3rem;
    background: rgb(119, 187, 243);
}
section .form p{
    margin-left: 500px;
}
</style>