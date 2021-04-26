// pages/publishing/publishing.js
import {Activity} from "../../model/activity";
import {Http} from "../../utils/http";

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
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    onTitle(event) {
        console.log(event.detail)
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
        console.log(event.detail)
        const address = event.detail.value
        this.setData({
            address
        })
    },

    onDescription(event) {
        console.log(event.detail)
        const description = event.detail.value
        this.setData({
            description
        })
    },

    changeRadio(event) {
        console.log(event.detail)
        const state = parseInt(event.detail.key)
        this.setData({
            state
        })
    },

    async onSumbit(event) {
        if (this.title && this.address && this.limitNum && this.state && this.description) {
            return
        }
        const activity = new Activity()
        const limitNum = parseInt(this.data.limitNum)
        this.setData({
            limitNum
        })
        console.log(this.data.limitNum)
        // await activity.postActivity(this.data.title, this.data.state, this.data.limitNum, this.data.address, this.data.description)
        await Http.request({
            url:`activity/insert`,
            method:"POST",
            data:{
                title: this.data.title,
                state: this.data.state,
                address: this.data.address,
                limitNum: this.data.limitNum,
                description: this.data.description
            }
        })
    }
})