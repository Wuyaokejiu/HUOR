// app.js
import {Token} from "./model/token";

App({
  autoTime: null,
  pageThis: null,
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // const token = new Token()
    // token.verify()
  },

  onShow() {
    let hours = new Date().getHours(),
      mode = "dark";
    console.log(hours);
    if (hours >= 7 && hours < 18) {
      mode = 'light'
    }
    wx.setStorageSync('mode', mode);
    this.autoChangeBack()
  },

  autoChangeBack() {
    let t = this;
    if (wx.getStorageSync('isAuto')) {
      t.autoTime = setInterval(() => {
        let hours = new Date().getHours(),
          mode = "dark";
        if (hours >= 7 && hours < 18) {
          mode = 'light'
        }
        wx.setStorageSync('mode', mode);
        t.modeChange(t.pageThis);
      }, 1000)
    }
  },
  
  modeChange: function (t) {
    this.pageThis = t;
    let mode = wx.getStorageSync('mode');
    if (mode == 'light') {
      wx.setNavigationBarColor({
        backgroundColor: '#ffffff',
        frontColor: '#000000',
      })
      t.setData({
        mode: "light"
      })
    } else {
      wx.setNavigationBarColor({
        backgroundColor: '#272727',
        frontColor: '#ffffff',
      })
      t.setData({
        mode: "dark"
      })
    }
  },

  globalData: {
    userInfo: null
  }
})


