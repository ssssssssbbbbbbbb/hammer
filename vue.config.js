const path = require("path")
module.exports = {
    //跨域的配置
    devServer:{
        proxy:{
            "/mobile":{
                target:"https://shopapi.smartisan.com",
                changeOrigin:true
            },
            "/product":{
                target:"https://shopapi.smartisan.com",
                changeOrigin:true
            },
        }
    },
    // https://shopapi.smartisan.com/mobile/skulist?page=1商品列表的接口
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "@api":path.join(__dirname,"./src/api"),
                "@common":path.join(__dirname,"./src/common"),
                "@components":path.join(__dirname,"./src/components"),
                "@lib":path.join(__dirname,"./src/lib"),
                "@pages":path.join(__dirname,"./src/pages"),
                "@router":path.join(__dirname,"./src/router"),
                "@static":path.join(__dirname,"./src/static"),
                "@store":path.join(__dirname,"./src/store"),
                "@utils":path.join(__dirname,"./src/utils"),
            }
        }
    }
}

