// pages/set/set.js

let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isAuto: false,
    mode: 'light',
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
    let isAuto = wx.getStorageSync('isAuto'),
      mode = wx.getStorageSync('mode');
    this.setData({
      isAuto,
      mode,
    })
    app.modeChange(this);
  },
  autoChange: function (e) {
    console.log(e)
    let isAuto = e.detail.value;
    wx.setStorageSync('isAuto', isAuto)
    isAuto ? app.autoChangeBack() : clearInterval(app.autoTime)
    this.setData({
      isAuto
    })
  },
  change: function (e) {
    clearInterval(app.autoTime);
    this.setData({
      isAuto: false,
    })
    wx.setStorageSync('isAuto', false)
    if (e.detail.value) {
      wx.setStorageSync('mode', 'dark')
    } else {
      wx.setStorageSync('mode', 'light')
    }
    app.modeChange(this);
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