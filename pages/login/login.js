// pages/login/login.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    resetActive:0,
    Email:'',
    password: '',
    isshow: true
  },
  getEmail:function(e){
    this.setData({
      Email: e.detail.value
    })
    console.log(this.data.Email)
  },
  getpassword:function(e){
    this.setData({
      password:e.detail.value
    })
    console.log(this.data.password)
    
  },
  seepassword: function(){
    var password = this.data.password;    
    var that = this
    if (that.data.isshow == true) {
      that.setData({
        isshow: false,
        password:password
      })
    } else if (that.data.isshow == false) {
      that.setData({
        isshow: true,
        password: password        
      })
    }
  },
  login: function(){
    console.log('登陆成功')
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },
  wxlogin:function(){
    wx.reLaunch({
      url: '/pages/index/index',
    })
    app.globalData.wxlogin =1;
  },
  design: function(){
    wx.navigateTo({
      url: '/pages/design/design',
    })
  },
  reset: function(){
    console.log('选择重置方式');
    this.setData({
      resetActive:1
    })
    
  },
  cancelzhezhao: function(){
    this.setData({
      resetActive: 0
    })
  },
  Email:function(){
    console.log('选择了Email注册')
  },
  Tel: function () {
    console.log('选择了Tel注册')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})