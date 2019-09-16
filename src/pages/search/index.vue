<template>
    <div>
     搜索
    </div>
</template>
<script>
 import {shopSearch} from '@api';
export default {
   name:"Search",
   async created(){
       let{ids}=this.$route.params;
       let data=await shopSearch(ids);
       this.shopSearch=data.data.list;
       console.log(this.shopSearch)
   },
   data(){
       return{
           shopSearch:[]
       }
   }
}
</script>
<style>
    
</style>