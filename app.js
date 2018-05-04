//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    const Bmob = require('utils/bmob.js');
    Bmob.initialize("98bb2719a228589565cebb882b060104", "6067b7aa8026cd571f64a94a65ebee81");

    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

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
    wxlogin:'',
    tabBar:[
      {
        "text": "首页",
        "index":"0",
        "pagePath": "pages/index/index"
      },
      {
        "text": "专栏",
        "index": "1",        
        "pagePath": "pages/major/major"
      },
      {
        "index": "2",
        "text": "问答",
        "pagePath": "pages/question/question"
      },
      {
        "index": "3",
        "text": "我的",
        "pagePath": "pages/mine/mine"
      }
    ]

  }
})