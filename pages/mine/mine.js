// pages/major/major.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: '',
    avatarUrl:''
    
  },
 intoLogin:function(){
   wx.navigateTo({
     url: '/pages/login/login',
   })
 },
 intoDesign:function(){
   wx.navigateTo({
     url: '/pages/design/design',
   })
 },
  
  intoSetup:function(e){
    console.log(e)
    if(this.data.nickName != '' && this.data.avatarUrl!=''){
      wx.navigateTo({
        url: '/pages/setUp/setUp',
      })
    }else {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    if (app.globalData.wxlogin==1){
      wx.getUserInfo({
        success: function (res) {
          that.setData({
            nickName: res.userInfo.nickName,
            avatarUrl: res.userInfo.avatarUrl
          })
        },
      })
      
      // console.log(that.data)
      
    }
    // console.log(that.data.nickName)
    // console.log(that.data.avatarUrl)
    
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