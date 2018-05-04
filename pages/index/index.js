//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    active:0,
    touch:false,
    addActive:0,
    wxlogin:'',
    items:[
      {
        "title":"推送一"
      },
      {
        "title": "推送二"
      },
      {
        "title": "推送三"
      },
      {
        "title": "推送四"
      },
      {
        "title": "推送一"
      },
      {
        "title": "推送一"
      },
      {
        "title": "推送一"
      },
      {
        "title": "推送一"
      },
      {
        "title": "推送一"
      },
      {
        "title": "推送一"
      },
      {
        "title": "推送一"
      },
      {
        "title": "推送一"
      }
    ],
    
  },
  //事件处理函数
  addItems:function(){
    if (app.globalData.wxlogin==1){
      this.setData({
        addActive: 1
      })
    } else if (app.globalData.wxlogin == ''){
      wx.reLaunch({
        url: '/pages/login/login',
      })
    }
    
  },
  cancelAddItems:function(){
    this.setData({
      addActive: 0
    })
  },
  changecolor:function(e) {
    // console.log(e.target.dataset.index);
    this.setData({
      active: e.target.dataset.index
    })
  },
  addQuestion:function(){
    wx.navigateTo({
      url: '/pages/pushQuestion/pushQuestion',
    })
  },
  writeNodes:function(){
    wx.navigateTo({
      url: '/pages/writeNodes/writeNodes',
    })
  },
  writeArticles:function(){
    wx.navigateTo({
      url: '/pages/writeArticles/writeArticles',
    })
  },
  caoGao:function(){
    wx.navigateTo({
      url: '/pages/caogao/caogao',
    })
  },
  tabBarNavigate(e){
    var path = e.target.dataset.path;
    path = path.replace(/pages/, "..");
    console.log(path)  
    wx.redirectTo({
      url: path,
    })
  },
  selectBar:function(e){
    this.setData({
      selectTabBar: e.target.dataset.index,
    })
    this.tabBarNavigate(e)
  },
  onLoad: function (options) {
    console.log(app.globalData.wxlogin)
    
    if (app.globalData.userInfo) {
      this.setData({
     
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
