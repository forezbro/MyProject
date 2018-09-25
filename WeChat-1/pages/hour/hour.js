var APP_URL ="https://www.getworld.cn/quickNews/listData"
var APP_URL2 = "https://www.getworld.cn/web/listPublishNews"
Page({
    data: {
      selected:true,
      selected1:false
        },
    selected:function(e){
    this.setData({
      selected1: false,
      selected: true
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true
    })
  },
 
  onLoad: function (options) {
  
   var that=this
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 2000
    }),
      wx.request({
        url: APP_URL,
      data: { movies:[]},
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          wx.hideToast();
          var data = res.data.rows.slice(0,20)
          console.log(data)
          that.setData({
            movies: data
          })
        }
      })
      wx.request({
        url: APP_URL2,
        data: {xw:[]},
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          wx.hideToast();
          var data = res.data.rows
          console.log(data)
          that.setData({
            xw: data
          })
        }
      })
  },
    onPullDownRefresh: function () {
      console.log("下拉刷新")
      let that = this;
      that.setData({
        pageIndex: 0, // 每次触发下拉事件pageIndex=0
      })
      that.gainLoadingListData()
    },
    gainLoadingListData: function () {
      let that = this;
      let pageIndex = that.data.pageIndex;
      let userCode = that.data.userCode;
      console.log("pageIndex == ", pageIndex);
      networking.gainData(userCode, pageIndex, function (data) {
        wx.stopPullDownRefresh(); // 数据请求成功后，停止刷新
        var array = data;
        that.setData({
          array: array,
        })
      }, function (message) {
        console.log("message=", message)
      })
    }
})