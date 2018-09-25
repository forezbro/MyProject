// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
    data: {
      address: '请选择地址',
      success: false// 默认页面一打开是false
  },
  staticData: {
    type: 'seil'
  },
  handelAdressClick() {

    wx.chooseLocation({
      success: this.handleChooseLocationSucc.bind(this)
    })
  },
  handleChooseLocationSucc(res) {
    console.log(res)
    this.setData({
      address: res.address
    });
    Object.assign(this.staticData, {//将经度、纬度的数据存到staticData里
      latitude: res.latitude,
      longitude: res.longitude
    })
  },
  handleTypeChange(e) {
    this.staticData.type = e.detail.value
  },
  handleMessageContact(e) {
    console.log(e.detail.value)
    this.staticData.message = e.detail.value
  },
  handleChangeContact(e) {
    this.staticData.contact = e.detail.value
  },
  handleSubmit() {
    var that = this
    //console.log('asd')
    if (this.data.address === '点击选择 要勾选奥' || !this.data.address) {
      //console.log('请填写地址')
      wx.showToast({
        title: '请填写地址',
        icon: 'loading',
        duration: 2000
      })
      return
    }
    if (!this.staticData.message) {
      //console.log('请填写说明信息')
      wx.showToast({
        title: '请填写说明信息',
        icon: 'loading',
        duration: 2000
      })
      return
    }
    if (!this.staticData.contact) {
      //console.log('请填写联系方式')
      wx.showToast({
        title: '请填写联系方式',
        icon: 'loading',
        duration: 2000
      })
      return
    }
    wx.request({
      url: 'http://t.yushu.im/v2/movie/top250',
      data: {
        address: this.data.address,
        latitude: this.staticData.latitude,
        longitude: this.staticData.longitude,
        message: this.staticData.message,
        contact: this.staticData.contact,
        type: this.staticData.contact
      },
      method: "GET",
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        //console.log(res.data)
        if (res.data) {
          that.setData({
            success: true
          })
        }
      }
    })
  },
  onShareAppMessage: function (ops) {
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops.target)
    }
    return {
      title: '礼品',
      path: 'pages/publish/publish',
      success: function (res) {
        // 转发成功
        console.log("转发成功:" + JSON.stringify(res));
      },
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    }

  },
  go(e) {
    wx.switchTab({
      url: '../index/index'
    })
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