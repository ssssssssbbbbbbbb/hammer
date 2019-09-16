const state = {
    num: "",
    psw: "",
    bool: "",
    position: "",
    loginum: "",
    loginpsw: "",
    loginList: []
}

const mutations = {
    handleInputNum(state, e) {
        let val = e.target.value;
        state.num = val;
    },
    handleInputPsw(state, e) {
        let val = e.target.value;
        state.psw = val;
    },
    handleClickLogin(state) {
        let arr = {}
        arr.username = state.num
        arr.password = state.psw
        if (!localStorage.getItem("loginList")) {
            state.loginList.push(arr)
            localStorage.setItem("loginList", JSON.stringify(state.loginList))
        }
        if (localStorage.getItem("loginList")) {
            let DataList = JSON.parse(localStorage.getItem("loginList"))
            for (var i = 0; i < DataList.length; i++) {
                if (DataList[i].username == state.num) {
                    state.bool = false
                    alert("账户名重复")
                    return;
                } else {
                    state.bool = true
                }
            }
            DataList.push(arr)
            console.log(DataList)
            localStorage.setItem("loginList", JSON.stringify(DataList))
        }
        console.log(state.bool)
    },
    handleLoginNum(state, e) {
        let val = e.target.value;
        state.loginum = val;
    },
    handleLoginPsw(state, e) {
        let val = e.target.value;
        state.loginpsw = val;
    },
    handleLoginClick(state) {
        let data = JSON.parse(localStorage.getItem("loginList"));
        console.log(data)
        for (var i = 0; data.length; i++) {
            if (data[i].username != state.loginum && data[i].password != state.loginpsw) {
                alert("用户名或密码不正确")
                state.position = false
                return;
            } else {
                sessionStorage.setItem("token", JSON.stringify(data[i]))
                state.position = true
                alert("登录成功")
                return
            }
        }
    }

}



export default {
    state,
    mutations,
    namespaced: true
}