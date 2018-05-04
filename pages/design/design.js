// pages/design/design.js
var Bmob = require('../../utils/bmob.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    Email:'',
    password:'',
    repassword:'',
    isshow:true,
    designable:0
  },
  getName:function(e){
    console.log(e.detail.value)
    this.setData({
      name: e.detail.value
    })
  },
  getEmail:function(e){
    console.log(e.detail.value) 
    this.setData({
      Email: e.detail.value
    })   
  },
  getpassword:function(e){
    console.log(e.detail.value) 
    this.setData({
      password: e.detail.value
    })   
  },
  getrepassword: function (e) {
    this.setData({
      repassword:e.detail.value
    })
    console.log(this.data.repassword)
  },
  seerepassword: function () {
    var repassword = this.data.repassword;
    var that = this
    if (that.data.isshow==true){
      that.setData({
        repassword: repassword,
        isshow: false
      })
    }else if(that.data.isshow==false){
      that.setData({
        repassword: repassword,
        isshow:true
      })
    }
  },
  design: function(){
    // wx.reLaunch({
    //   url: '/pages/login/login',
    // })
    if(this.data.password===this.data.repassword){
      wx.showModal({
        title: '注册成功',
        content: '是否登录',
        success: function (res) {
          if (res.confirm) {
            wx.reLaunch({
              url: '/pages/index/index',
            })
          } else {
            wx.reLaunch({
              url: '/pages/login/login',
            })
          }
        }
      })
    }else{
      this.setData({
        repassword:''
      })
      console.log('请重新输入密码')
      wx.showModal({
        title: '',
        content: '请重新确认密码',
      })
    }
  },
  telDesign:function(){
    // Bmob.Sms.requestSmsCode({ "mobilePhoneNumber": "15879139370", "template": "秋水白" }).then(function (obj) {
    //   console.log("smsId:" + obj.smsId); //
    // }, function (err) {
    //   console.log("发送失败:" + err);
    // });

    var Diary = Bmob.Object.extend("diary");
    var diary = new Diary();
    diary.set("title", "hello");
    diary.set("content", "hello world");
    //添加数据，第一个入口参数是null
    diary.save(null, {
      success: function (result) {
        // 添加成功，返回成功之后的objectId（注意：返回的属性名字是id，不是objectId），你还可以在Bmob的Web管理后台看到对应的数据
        console.log("日记创建成功, objectId:" + result.id);
      },
      error: function (result, error) {
        // 添加失败
        console.log('创建日记失败');

      }
    });
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