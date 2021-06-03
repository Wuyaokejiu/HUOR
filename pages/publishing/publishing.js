// pages/publishing/publishing.js
import {Activity} from "../../model/activity";
import {Http} from "../../utils/http";
import {showToast} from "../../utils/ui";
import rules from "../../miniprogram_npm/lin-ui/behaviors/rules";
// import {getSlashYMDHMS, toDate} from "../../utils/date";
import {formatTime} from "../../utils/util"
import {Draft} from "../../model/draft";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        title: '',
        state: 0,
        limitNum: 0,
        address: '',
        description: '',
        startDate:'2021-01-01',
        startTime:'08:00',
        endDate:'2021-01-01',
        endTime:'12:00',
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // const timestamp = new Date(this.data.startDate+' '+this.data.startTime).getTime()
        if (options.item){
            const item = JSON.parse(options.item)
        }
        const state = options.status
        this.setData({
            state
        })
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
    onTitle(event) {
        // console.log(event.detail)
        const title = event.detail.value
        this.setData({
            title
        })
    },

    onNumber(event) {
        console.log(event.detail)
        const limitNum = event.detail.value
        this.setData({
            limitNum
        })
    },

    onAddress(event) {
        // console.log(event.detail)
        const address = event.detail.value
        this.setData({
            address
        })
    },

    onDescription(event) {
        // console.log(event.detail)
        const description = event.detail.value
        this.setData({
            description
        })
    },

    // changeRadio(event) {
    //     // console.log(event.detail)
    //     const state = parseInt(event.detail.key)
    //     this.setData({
    //         state
    //     })
    // },

    changeStartDate: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail)
        this.setData({
            startDate: e.detail.value
        })
    },

    changeStartTime: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            startTime: e.detail.value
        })
    },

    changeEndDate: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            endDate: e.detail.value
        })
    },

    changeEndTime: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            endTime: e.detail.value
        })
    },



    async onSave(event){
        const start = this.data.startDate+' '+this.data.startTime
        const end = this.data.endDate+' '+ this.data.endTime
        const draft = new Draft()
        await draft.postDraft(
            this.data.title,
            this.data.state,
            this.data.limitNum,
            this.data.address,
            this.data.description,
            start,
            end
        )
        showToast("successfully saved")
    },

    async onSumbit(event) {
        
   
                if (this.submitDataCheck()){
                }
            },
            submitDataCheck(){
                const limitNum = parseInt(this.data.limitNum)
                this.setData({
                    limitNum
                })
                if (!this.data.title) {
                    showToast("please input the title of your activity")
                    return false
                }
                if (!this.data.state){
                    showToast("please choose the type of your activity")
                    return false
                }
                if (!this.data.limitNum){
                    showToast("incorrect input of person number")
                    return false
                }
        
                if (!this.data.address){
                    showToast("please input the address of your activity")
                    return false
                }
                if (!this.data.description){
                    showToast("describe your activity briefly")
                    return false
                }
                var that = this;
                wx.showModal({
                    
                    title: '提示',
                    content: '确定发布以上信息吗',
        
                    success (res) {
                      if (res.confirm) {
                        that.Sumbit()
                      } 
                    }
                    
                  })
        
            },
            async Sumbit(event) {
                
                    const start = this.data.startDate+' '+this.data.startTime
                    const end = this.data.endDate+' '+ this.data.endTime
                    const activity = new Activity()
                    try {
                        await activity.postActivity(
                            this.data.title,
                            this.data.state,
                            this.data.limitNum,
                            this.data.address,
                            this.data.description,
                            start,
                            end
                        )
                        wx.redirectTo({
                            url: `/pages/publish-success/publish-success`
                        })
                    } catch (e) {
                        showToast("failed to publish")
                    }
                
            },
})