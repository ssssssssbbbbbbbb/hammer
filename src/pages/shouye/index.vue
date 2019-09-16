<template>
  <div class="shouye">
    <div class="header">
      <ul>
        <li>
          <a href="#" class="iconfont">&#xe605;</a>
        </li>
        <li>
          <a href="#" class="iconfont">&#xe82e;</a>
        </li>
        <li>
          <router-link tag="a" to="/search" class="iconfont">&#xe62b;</router-link>
        </li>
      </ul>
    </div>
    <div class="section">
      <div class="banner">
        <div class="swipping">
          <van-swipe :autoplay="3000" indicator-color="white" class="aa">
            <van-swipe-item v-for="(item,index) in image" :key="index">
              <img :src="item" alt="图片载入失败" />
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>

      <div class="shop">
        <!-- <div class="shop1"  v-for="(item,index) in  skuInfo" :key="index">
          <div class="figure">
            <a href="#">
              <img :src="item.images | toImg('131,131')" />
            </a>
            <span>{{item.skuName}}</span>
            <span>￥{{item.originalPrice}}</span>
          </div>
          
        </div> -->
        <router-link tag="div" :to="{name:'details',params:{id:item.skuId}}" class="shop2" v-for="(item,index) in  skuInfo" :key="index">
						<figure><a href="#"> <img :src="item.images" /></a>
							<figcaption>{{item.skuName}}</figcaption>
							<figcaption>￥{{item.originalPrice}}</figcaption>
						</figure>
					
						
					</router-link>
					
      </div>
    </div>
    <router-view></router-view>
    <Alley-TabBar/>
  </div>
</template>
<script>
import TabBar from "@components/tabBar"
import { shopList } from "@api";
import Vue from "vue";
import { Button, Swipe, SwipeItem } from "vant";
Vue.use(Button)
  .use(Swipe)
  .use(SwipeItem);

export default {
  name: "shouye",
  async created() {
    let { skuInfo } = this.$route.params;
    let data = await shopList(skuInfo);
    console.log(data.data.skuInfo);
    this.skuInfo = data.data.skuInfo;
    // console.log(this.skuInfo.length)
     for(var i=0;i<this.skuInfo.length;i++){
      this.promotionList.push(this.skuInfo[i].promotionList);
    
     } 
      //  console.log(this.promotionList)   
  },
  data() {
    return {
      skuInfo: [],
      promotionList:[],
      image: [
        "https://resource.smartisan.com/resource/fe82a9246a3100ba5254a3628fc5d5cd.png",
        "https://resource.smartisan.com/resource/39889b696bf757d0213f2cba95e80e7b.png",
        "https://resource.smartisan.com/resource/7899ec6d5ee787669dbb0eb55bbf0e46.png"
      ]
    };
  },
   components:{
      [TabBar.name]:TabBar
    }
};
</script>
<style >
.shouye{width: 100%;
	 height: 100%;}
.header {
  width: 100%;
  height: 0.5rem;
  background: #eee;
  position: absolute;
  top: 0;
}
.header ul {
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header ul li {
  padding: 0 5px;
  font-size: 0.3rem;
}
.section {
  width: 100%;
  background: #fff;
  position: absolute;
  top: 0.5rem;
  bottom: 0.5rem;
  overflow-y: auto;
}

.section .banner .swipping {
  width: 100%;
  height: 3rem;
  position: relative;
}
.section .banner .aa {
  width: 100%;
  background:#fff;
  height: 3rem;
  border: none;
  border-radius: 0.1rem;
}
.section .banner .aa img {
  width: 100%;
  height: 100%;
}
.van-swipe__track {
  width: 100%;
  display: flex;
}
.shop{
margin-top: 0.8rem;
}
.shop .shop2{
   width:50%;
  display: flex;
  display: inline-block;
	justify-content: center;
	align-items: center;
}	
.shop2 figure{
  width:50%;
}
.shop .shop2 figure img{
	width: 1.71rem;
	height: 1.71rem;
	
}
</style>