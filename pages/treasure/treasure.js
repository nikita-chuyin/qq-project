Page({
  data: {
    imageSrc: [0,1,2,3]
  },
  scanCode(){
    wx.scanCode({
      onlyFromCamera: true,
      scanType: ['qrCode'],
      success(res){
        console.log(res)
      },
      fail(res){
        console.log(res)
        wx.showToast({
          title: '扫码失败，请重试',
          icon: 'none',
          duration: 2000
        })
      }
    })
  }
})