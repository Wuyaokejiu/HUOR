// pages/detail_huor/detail_huor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"this is title",
    creatTime:"2021-4-5",
    startTime:"2021-6-15",
    stopJoinTime:"2021-5-30",
    location:"this is location",
    joinNum:"1",
    limitNum:"4",
    tag:["tag1", "tag2", "tag3"],
    description:"this is discription"

  },
  Toast(){
   wx.showToast({
     title: '收藏成功',
     icon: 'none',
     image: '',
     duration: 2500,
     mask: false,
     success(){
       wx.navigateTo({
         url: '../mycol2/mycol2',
         success: (result) => {
           
         },
         fail: () => {},
         complete: () => {}
       });
         
     },
     fail: () => {},
     complete: () => {}
   });
     
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      //更新数据
    })
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