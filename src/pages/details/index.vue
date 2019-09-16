<template>
  <div>
    <div class="box">
      <!--头部-->
      <header>
        <p>
          <router-link to="/shouye">返回</router-link>
          <span>{{listDetails.sku_mobile_title}}</span>
        </p>
        <div class="div1">
          <ul>
            <li>
              <a href="#">商品</a>
            </li>
            <li>
              <a href="#">详情</a>
            </li>
            <li>
              <a href="#">参数</a>
            </li>
            <li>
              <a href="#">推荐</a>
            </li>
          </ul>
        </div>
      </header>
      <!--内容-->
      <section>
        <div class="shopimg">
          <img :src="listDetails.ali_image">
        </div>
        <div class="shopinfo">
          <h4>{{listDetails.sku_mobile_title}}</h4>
          <p>{{listDetails.sub_title}}</p>
          <span>￥{{listDetail.price}}</span>
          <span>满{{listDetails.doodle_stage}}包邮</span>
        </div> 
        <div class="shopyouhui">
          <h6>优惠信息</h6>
          <p>满减</p>
          <span>满300元减一百元</span><br>
          <p>限时秒杀</p>
          <span>9.10-9.13</span>
        </div>
        <div class="shoptp">
          <h2>{{listDetails.sku_mobile_sub_title}}</h2>
          <span>精致而低调</span>
          <i>足料有型</i>
          <img :src="listDetails.ali_image" >
        </div>
      </section>

      <!--底部-->
      <footer>
        <i class="iconfont">&#xe613;</i>
        <span>现在购买</span>
        <a href="#">加入购物车</a>
      </footer>
    </div>
  </div>
</template>
<script>
import { shopDetails } from "@api";
export default {
  name:"Details", 
  async created(){
    let{ id }=this.$route.params;
    let data= await shopDetails(id);
    this.listDetail=data.data.list[0]
    this.listDetails=data.data.list[0].shop_info
    console.log(this.listDetail)
    console.log(this.listDetails)
    
  },
  data(){
    return{
    listDetails:[],
    listDetail:[],
    
    }
  }
};
</script>
<style>
.box{width: 100%;
	 height: 100%;}
header {
  width: 100%;
  height: 1rem;
  background: #fff;
  position: absolute;
  top: 0;
}
header p {
  height: 0.5rem;
  background: #000;
  color: #fff;
  line-height: 0.5rem;
}
header p a {
  color: #fff;
  margin-left: 16px;
}
header p span {
  font-size: 33px;
  margin-left: 165px;
}
header .div1 {
  background: #eee;
  height: 0.5rem;
}
header ul {
  height: 0.5rem;
  text-align: center;
  margin-left: 200px;
  padding-top: 10px;
}
header ul li {
  float: left;
  width: 0.9rem;
  height: 0.32rem;
  border: solid 1px rgb(182, 167, 167);
}
/*内容*/
section {
  width: 100%;
  background: #fff;
  position: absolute;
  top: 1rem;
  bottom: 1rem;
  overflow-y: auto;
}
section .shopimg{
  width:100%;
  height:3.5rem;
  border-bottom: solid #eee 13px;
  
}
section .shopimg img{
  width: 3rem;
  height:3rem;
  margin-left: 1.8rem;
}
section .shopinfo{
  width:100%;
  height:3rem;
  border-bottom: solid 3px #eee;
}
section .shopinfo h4{
  font-size: .55rem;
  margin-bottom: .4rem;
  color: #333;
}
section .shopinfo p{
  font-size: .35rem;
  color: #7f7f7f;
  margin-bottom: .4rem;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
section .shopinfo span{
  font-size: .35rem;
  margin-right:2rem; 
}
section .shopyouhui{
  width:100%;
  height:3rem;
  border-bottom: solid 3px #eee;
}
section .shopyouhui h6{
    padding: 0 0 .45rem;
    color: #999;
    font-size: 32px;
}
section .shopyouhui p{
    overflow: hidden;
    display: inline-block;
    text-align: center;
    padding: 2px 10px;
    font-size: 35px;
    font-weight: 700;
    border-radius: 13px;
    background: red;
    border: 1px solid #d3d3d3;
    margin-right: 50px;
    
}
section .shopyouhui span{
  font-size: .35rem;
  color:yellow;
}
section .shoptp{
width:100%;
height:5rem;
text-align: center;

}
section .shoptp h2{
  font-size: 35px;
  margin: 10px 0px;
}
section .shoptp span{
  display: inline-block;
  padding: 0px 10px;
  border-right: 2px solid #000
}
section .shoptp img{
   width: 4rem;
   height:4rem;
   margin-left: 120px;
}
/*底部*/
footer {
  width: 100%;
  height: 1rem;
  background: #fff;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #666;
  align-items: center;
}

footer i {
  width: 0.25rem;
  height: 0.40rem;
  margin-left: 10px;
 
}
footer span {
  text-align: center;
  display: inline-block;
  border: rgb(102, 70, 70)px solid;
  width: 1.18rem;
}
footer a {
  width: 1.26rem;
  text-align: center;
  display: inline-block;
  border: 12px solid #3f6aec;
  border-radius: 0.2rem;
  background: #3f6aec;
}
</style>