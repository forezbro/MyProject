var APP_URL3 = "http://www.yidianzixun.com/home/q/get_pc_slides?appid=yidian&_=1535768096749"
var APP_URL4 = "http://www.yidianzixun.com/home/q/get_pc_slides?appid=yidian&_=1535768096749"
const app=getApp()
Page({

  data: {
    selected: true,
    selected1: false,
    controls: [{
      id: 1,
      iconPath: '../../img/pin.png', 
      position: {
        left: (app.globalData.windowWidth / 2) - 10,
        top: ((app.globalData.windowHeight - 30) / 2) - 15,
        width: 20,
        height: 30
      },
      clickable: true
    },
      {
        id: 2,
        iconPath: '../../img/center.png',
        position: {
          left: 20,
          top: app.globalData.windowHeight-110,
          width: 31,
          height: 31
        },
        clickable: true
      }]
  },
  onTapdetail: function (event) {
    var postad = event.currentTarget.dataset.postad //获取传递的值
    // console.log(postad);
    wx.navigateTo({
      //url: 'post-detail/post-detail' //跳转详情页 切记配置app.json文件
      url: '../detail2/detail2?id=' + postad //传递参数
    })
  },
  controltap() {
    this.mapCtx.moveToLocation()//将地图中心移动到当前定位点
  },
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('map')
  },
  selected: function (e) {
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
  onShow: function () {
    var that=this
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var speed = res.speed
        var accuracy = res.accuracy
        console.log(res)
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          
						  
        })
      }
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
        url: APP_URL3,
        data: { alls: [] },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          wx.hideToast();
          var data = res.data.slides
          console.log(data)
          that.setData({
            alls: data
          })
        }
      })
    wx.request({
      url: APP_URL4,
      data: { allss: [] },
      header: {
        'content-type': 'application/json'
      },
      success: (res)=> {
        wx.hideToast();
        var data = res.data.modules
        console.log(data)
        this.setData({
          allss: data
        })
      }
    })
  },
})