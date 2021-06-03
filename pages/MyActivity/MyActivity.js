// pages/MyActivity/MyActivity.js
import {Activity} from "../../model/activity";
import {getWindowHeightRpx} from "../../utils/system";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    joinedActivity:[],
    publishedActivity:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    const winHeight = await getWindowHeightRpx()
    const h = winHeight - 152
    this.setData({
      h
    })
    const activity = new Activity()
    const joinedActivity = await activity.getJoinedActivities()
    const publishedActivity = await activity.getAllActivities()
    console.log(joinedActivity)
    this.setData({
      joinedActivity,
      publishedActivity
    })
  },
  onShow: function () {
    app.modeChange(this)
  },
  changeMode:function(){
    let mode = wx.getStorageSync('mode');
    if(mode === 'light'){
        wx.setStorageSync('mode', 'dark')
    }else{
        wx.setStorageSync('mode', 'light')
    }
    app.modeChange(this);
},
  switchNav: function (e) {
    console.log(e);
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
      })
    }
  },

  swiperChange: function (e) {
    // console.log(e);
    this.setData({
      currentTab: e.detail.current,
    })
  },
})