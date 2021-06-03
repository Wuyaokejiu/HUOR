import {Activity} from "../../model/activity";

const { default: date } = require("../../miniprogram_npm/lin-ui/common/async-validator/validator/date");

Page({
  /**
   * 页面的初始数据
   */
  data: {
    title:"This Is the Title",
    creatTime:1619623312000,
    startTime:"2021-6-15",
    stopJoinTime:"2021-5-30",
    location:"this is location",
    joinNum:"1",
    limitNum:"4",
    tag:["tag1", "tag2", "tag3"],
    description:"this is discription",
    like:0,
    join:0,
    like_text:"collect",
    join_text:"join",
    displayTime:""
  },

  makeRequest: function () {
    var self = this
    self.setData({
      loading: true
    })
    wx.request({
      url:'',
      data:{

      },
      success: function (result) {
        wx.showToast({
          title: 'Loading',
          icon:'loading',
          mask: true,
          duration: 2000
        })
        self.setData({
          loading: false
        })
      },
      fail: function(){
        self.setData({
          loading: false
        })
      }
    })
  },

  //收藏
  like:async function (event) {
    console.log(event)
    const activity = new Activity()
    if(event.currentTarget.dataset.like === 0){//0为未收藏，1为已收藏
      let like = 1
      let like_text = "collected"
      this.setData({
        like,
        like_text
      })
      await activity.changeCollectedStatus(this.data.item.orderId,like)
    }else{
      let like = 0
      let like_text = "collect"
      this.setData({
        like,
        like_text
      })
      await activity.changeCollectedStatus(this.data.item.orderId,like)
    }
  },

  //加入
  join:async function (event) {
    const activity = new Activity()
    if(event.currentTarget.dataset.join === 0){
      let join = 1
      let join_text = "joined"
      this.setData({
        join,
        join_text,
      })
      await activity.changeJoinedStatus(this.data.item.orderId,join)
    }else{
      let join = 0
      let join_text = "join"
      this.setData({
        join,
        join_text
      })
      await activity.changeJoinedStatus(this.data.item.orderId,join)
    }
  },

  displayTime: function (dataTime) {
    var currentTime = (new Date()).valueOf();
    var intervalTime = currentTime - dataTime;
    var timestrap = new Date(intervalTime);
    var num = 0;
    var date = null;
    if(intervalTime < 60000){//seconds
      date = timestrap.getSeconds();
      num = 1;
    }else if(intervalTime >= 60000 && intervalTime < 3600000){ //minutes
      date = timestrap.getMinutes();      
      num = 2;
    }else if(intervalTime >= 3600000 && intervalTime < 86400000){//hours
      date = timestrap.getHours();
      num = 3;
    }else if(intervalTime >= 86400000 && intervalTime < 2592000000){//days
      date = timestrap.getDay();
      num = 4;
    }else{//detail: month-date
      date = (new Date(dataTime)).getDate();
    } 
    this.displayTimeHelper(num, date)
  },

  displayTimeHelper: function(num, date){
    switch (num){
      case 1:
        this.setData({displayTime : (date)+" senconds before"})
        break;
      case 2:
        this.setData({displayTime : (date)+" minutes before"})
        break;
      case 3:
        this.setData({displayTime : (date)+" hours before"})
        break;
      case 4:
        this.setData({displayTime : (date)+" days before"})
        break;
      default:
        this.setData({displayTime : date});
        break;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const item = JSON.parse(options.item)

    let like = item.collection
    let join = item.joinStatus
    let like_text
    let join_text
    if (like === 0 || !like){
      like =0
      like_text = "collect"
    }
    if (like === 1){
      like_text = "collected"
    }
    if (join === 0 || !like){
      join =0
      join_text = "join"
    }
    if (join === 1){
      join_text = "joined"
    }
    console.log(like)
    console.log(join)
    const createTime = new Date(item.createTime).getTime()
    this.setData({
      item,
      createTime,
      like,
      join,
      like_text,
      join_text
    })
    this.makeRequest();
    this.displayTime(this.data.creatTime);
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

})