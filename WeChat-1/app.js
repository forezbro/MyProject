
var util = require('utils/util.js');
App({

  onLaunch() {
    console.log('初始化完成 全局只渲染一次')
  },
  globalData: {},
  onLaunch: function () {
    try {
      var res = wx.getSystemInfoSync()
      // console.log(res)
      this.globalData.windowWidth = res.windowWidth;
      this.globalData.windowHeight = res.windowHeight;
      console.log(this.globalData)
    } catch (e) {
      // Do something when catch error
    }
   
  },
  onLoad: function () {
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      time: time
    });
  }
})
