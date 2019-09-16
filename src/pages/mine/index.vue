<template>
    <div>
        <div class="box">
      <!--头部-->
      <header>
        <p>
          <span>个人中心</span>
        </p>
      </header>
      <!--内容-->
      <section>
        <div class="mine">
            <i class="iconfont">&#xe61d;</i>
            <router-link tag="span" to="/singin">登录/注册</router-link>
        </div>
        <minedizhi/>
        <div class="div2">
            <p>常见问题 </p>
            <p>服务支持 </p>
            <p>意外碎屏保修服务 </p>
            <p>延长保修服务 </p>
        </div>
      </section>
    <router-view></router-view>
    <Alley-TabBar/>
    </div>
  </div>
   
</template>
<script>
import TabBar from "@components/tabBar"
import minedizhi from "@components/mine-dizhi"
export default {
    name:"mine",
    components:{
      [TabBar.name]:TabBar,
      minedizhi
    },

}
</script>
<style>
.box{width: 100%;
	 height: 100%;
     background: #eee}
header {
  width: 100%;
  height: 1rem;
  background: #fff;
  position: absolute;
  top: 0;
 
}
header p {
  height: 1.5rem;
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
section .mine{
    width:90%;
    height:2rem;
    border: solid 1px #eee;
    border-radius: 5%;
    margin-left: 40px;
    margin-top:0.4rem; 
    margin-bottom: 10px;
    background:#fff
}
section .mine .iconfont{
    font-size: 1.5rem;  
}
section .mine span{
    font-size: 0.5rem;
    margin-left:0.5rem;
}


section .div2{
    width:90%;
    height:5rem;
    border: solid 1px #eee;
    border-radius: 5%;
    margin-left: 40px;
    margin-top:0.4rem; 
    margin-bottom: 10px;
    background:#fff
}
section .div2 p{
    font-size: 0.45rem;
    height: 100px;
    border-bottom: 1px solid #000;
    
}
</style>