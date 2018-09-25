var APP_URL1 = "https://www.getworld.cn/web/listPublishNews"
Page({
  data: {
    moto:[
      { url:"../../img/lp1.png"},
      { url: "../../img/lp2.png"},
      { url: "../../img/lp3.png"},
      { url: "../../img/lp4.png"}
    ]
  },
  onTapdetail: function (event) {
    var postad = event.currentTarget.dataset.postad //获取传递的值
    // console.log(postad);
    wx.navigateTo({
      //url: 'post-detail/post-detail' //跳转详情页 切记配置app.json文件
      url: '../detail1/detail1?id=' + postad //传递参数
    })
  },
  onLoad: function (options) {

    var that = this
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 2000
    }),
      wx.request({
        url: APP_URL1,
        data: { seciton: [] },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          wx.hideToast();
          var data = res.data.rows
          console.log(data)
          that.setData({
            section: data
          })
        }
      })
  },
  onShow() {
    console.log('页面显示')
  },
  onHide() {
    console.log('页面隐藏')
  },
  onReady() {
    console.log('页面初次渲染完成')
  },
  onUnload() {
    console.log('页面卸载')
  },
  onPullDownRefresh() {
  },
  onReachBottom() {
  },
  onShareAppMessage() {
  },
  showTest() {
    console.log(this.test)
  }
})
