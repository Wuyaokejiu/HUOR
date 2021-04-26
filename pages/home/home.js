// pages/home/home.js
import {Activity} from "../../model/activity";
import {getWindowHeightRpx} from "../../utils/system";
import {ActivityType} from "../../core/enum";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        ads: ['/images/广告图片/柴犬.jpg','/images/广告图片/狗.jpeg','/images/广告图片/蜡笔小新.jpg'],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1200,

        currentTab: 1,
        activities: [],
        winHeight: 0,

    },


    swichNav: function (e) {
        // console.log(e);
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

    /** 搜索页面 */
    suo: function (e) {
        wx.navigateTo({
            url: '../search/search',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */


    onLoad:async function (options) {
        const winHeight = await getWindowHeightRpx()
        const h = winHeight - 142
        this.setData({
            h
        })
        await this.initData()
    },

    async initData(){
        const activity = new Activity()
        const activities = await activity.getAllActivities()
        console.log(activities)

        this.setData({
            activities,
        })
        // await activity.postActivity(8)
    },

    onGoToSearch(event){
        wx.navigateTo({
            url:`/pages/search/search`
        })
    },

})