// pages/BG_change/BG_change.js
var pics= [
  "pic1", "pic2", "pic3", "pic4"
]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    x: 0,
    y: 0,
    album_items: [
      { index: 0 },
      { index: 1 },
      { index: 2 },
      { index: 3 }
    ],
    selected: 0,
    pic_no:"pic1"
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
    var that = this
    var vx, vy
    wx.onAccelerometerChange(function (res) {
      vx = 50 * res.x.toFixed(2) + 50
      vy = 50 - 50 * res.y.toFixed(2)
      that.setData({
        x: vx + "%",
        y: vy + "%"
      })
    })
    wx.startAccelerometer({
      interval: 'ui'
    })
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

  },

  albumsClick: function (e) {
    this.setData({
      selected: e.currentTarget.dataset.index,
      pic_no: pics[e.currentTarget.dataset.index]
    })
  }
})