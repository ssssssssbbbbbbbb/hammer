<template>
    <div>售后</div>
</template>
<script>
export default {
     name: "shouhou",
  beforeRouteEnter (to, from, next) {
  if(localStorage.getItem("loginList")){
    next()
  }else{
    next("/singin")
  }
  
  }
}
</script>
<style >
    
</style>