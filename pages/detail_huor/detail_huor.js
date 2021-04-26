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
    description:"this is discription",
    like:0,
    join:0,
    like_text:"",
    join_text:""
  },

  //收藏
  like: function () {
    //先上传，再显示
    if(this.data.like == 0){
      //上传：
      this.setData({
        like:1,
        like_text:"已收藏"
      })
    }else{   
      this.setData({
        like:0,
        like_text:"先收藏着"
      })
    }
    this.onLoad();
  },

  //加入
  join: function () {
    if(this.data.join==0){
      this.setData({
        join:1,
        join_text:"已加入",
        
      })
      
    }else{
      this.setData({
        join:0,
        join_text:"立即加入"
      })
    }
    this.onLoad();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    if(this.data.like==0){
      this.setData({
        like_text:"先收藏着"
      })
    }else{
      this.setData({
        like_text:"已收藏"
      })
    }
    if(this.data.join==0){
      this.setData({
        join_text:"立即加入"
      })
    }else{
      this.setData({
        join_text:"已加入"
      })
    }
    
    
    
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
    var that = this;
    that.setData({
      currentTab:0
    })
    this.onLoad();
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