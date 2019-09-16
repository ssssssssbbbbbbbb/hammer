import http from "@utils/http.js"
// 商品列表
export const shopList=(skuInfo)=>http({
    method:"get",
    url:"/mobile/skulist",
    data:{
        skuInfo:skuInfo
    } 
})
// 商品详情
export const shopDetails=(ids)=>http({
    method:"get",
    url:"/product/skus",
    data:{
        ids:ids
    }
})
// 搜索https://shopapi.smartisan.com/product/spus?ids=
export const shopSearch=(ids)=>http({
    method:"get",
    url:"/product/spus",
    data:{
        ids:"1000235,1000267,1000268,1000397,1000409,1000428,1000471,1000553,1000572,1000573,1000574,1000575,1000576,1000577,1000578,1000579,1000584"
    }
})