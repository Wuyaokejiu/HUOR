// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      status:[1,2,3,4],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // const status = [1,2,3,4]
    // console.log(status)
    this.attached()
    // this.setData({
    //   status:status,
    // })
  },

  attached(){
    console.log(this.data.status)
  }


})