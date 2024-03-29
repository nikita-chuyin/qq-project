//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var that = this
    var logs = qq.getStorageSync('logs') || []
    logs.unshift(Date.now())
    qq.setStorageSync('logs', logs)

    // 登录
    qq.login({
      success: res => {
      }
    })

    // 获取用户信息
    qq.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          qq.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              qq.login({
                success(res){
                  qq.request({
                    url: that.globalData.host + that.globalData.apiVersion + "auth/qq_login",
                    method: "POST",
                    data: {
                      code: res.code,
                      userInfo: that.globalData.userInfo
                    },
                    success(result){
                      console.log(result)
                    }
                  })
                }
              })
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  
  globalData: {
    userInfo: null,
    host: "http://127.0.0.1:8000/",
    apiVersion: "v1.0/"
  }
})