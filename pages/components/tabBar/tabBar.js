const app = getApp()

Component({
  // 相当于Vue中的props， 使用组件的页面，传递给组件的数据
  properties: {
    selectTabBar: {
      type: String,
      value: 0
    }
  },
  // 组件本身的数据
  data: {
    tabBar: getApp().globalData.tabBar
  },
  methods: {
    tabBarNavigate(e) {
      var path = e.target.dataset.path;
      path = path.replace(/pages/, "..");
      console.log(path)
      wx.redirectTo({
        url: path,
      })
    },
    selectBar: function (e) {
      console.log(e.target.dataset.index)
      this.setData({
        selectTabBar: e.target.dataset.index,
      })
      this.tabBarNavigate(e)
    }
  },
})
