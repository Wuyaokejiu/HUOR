// pages/home/home.js
import {Activity} from "../../model/activity";
import {getWindowHeightRpx} from "../../utils/system";
import {ActivityType} from "../../core/enum";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentTab: 1,
        activities: [],
        winHeight: 0,
        top: 0,
        collectedActivity:[],
        joinedActivity:[],
        unlikeIds:[]
    },

    switchNav:async function (e) {
        // console.log(e);
        var that = this;
        if (this.data.currentTab === e.target.dataset.current) {
            return false;
        } else {
            that.setData({
                currentTab: e.target.dataset.current,
            })
        }
        await this.onPullDownRefresh()
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

    onLoad:async function (options) {
        const winHeight = await getWindowHeightRpx()
        const h = winHeight - 142
        this.setData({
            h
        })
        await this.initData()
    },
    onShow(){
        app.modeChange(this);
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
    async initData(){
        const activity = new Activity()
        let activities = await activity.getAllActivities()
        const collectedActivity = activities.filter(item => item.collection === 1)
        const joinedActivity = activities.filter(item => item.joinStatus === 1)
        console.log(this.data.unlikeIds)
        for (let id of this.data.unlikeIds){
            activities = activities.filter(item => item.id !== id)
        }
    
        // console.log(collectedActivity)
        // console.log(joinedActivity)
    
        this.setData({
            activities,
            collectedActivity,
            joinedActivity,
        })
    },
    
    async updateActivities(event){
        const ids = this.data.unlikeIds;
        for (let id of ids){
            if (event.detail.id === id){
                return
            }
        }
        const unlikeIds = this.data.unlikeIds
        unlikeIds[unlikeIds.length] = event.detail.id
        this.setData({
            unlikeIds,
        })
        await this.initData()
    },

    onGoToSearch(event){
        wx.navigateTo({
            url:`/pages/search/search`
        })
    },

    async onPullDownRefresh(event){
        wx.showNavigationBarLoading()
        await this.initData()
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新
    },

    // async onPageScroll(event){
    //     // console.log(event)
    //     if (event.detail.scrollTop === 0){
    //         await this.onPullDownRefresh()
    //     }
    // },

    async onTabItemTap(event){
        const top = 0
        this.setData({
            top
        })
        if (this.data.top === 0){
            await this.onPullDownRefresh()
        }
    },


})