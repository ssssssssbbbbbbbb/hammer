<template>
  <div class="mine-dizhi">
    <div class="div1">
            <router-link tag="P" to="/shouhou">地址管理  </router-link >
            <router-link tag="P" to="/shouhou">我的优惠卷 </router-link >
            <router-link tag="P" to="/shouhou">优先购买码 </router-link >
            <router-link tag="P" to="/shouhou">提货兑换卡 </router-link >
        </div>
  </div>
</template>
<script>
export default {
  name: "mine-dizhi",
  
};
</script>
<style>
section .div1{
    width:90%;
    height:5rem;
    border: solid 1px #eee;
    border-radius: 5%;
    margin-left: 40px;
    margin-top:0.4rem; 
    margin-bottom: 10px;
    background:#fff
}
section .div1 p{
    font-size: 0.45rem;
    height: 100px;
    border-bottom: 1px solid #000;
    
}
</style>