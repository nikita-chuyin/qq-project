const app = getApp()

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    console.log('hello');
  },

  // 获取用户信息
  onGotUserInfo(e) {
    console.log(e.detail.userInfo)
    app.globalData.userInfo = e.detail.userInfo
    qq.login({
      success(res){
        qq.request({
          url: app.globalData.host + app.globalData.apiVersion + "auth/qq_login",
          method: "POST",
          data: {
            code: res.code,
            userInfo: app.globalData.userInfo
          },
          success(result){
            console.log(result)
          }
        })
      }
    })
  }
})