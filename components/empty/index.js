// components/empty/index.js
import date from "../../miniprogram_npm/lin-ui/common/async-validator/validator/date";

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        text: {
            type: String,
            value: '暂时还没有关注哦~'
        },
        btnText:{
            type:String,
            value:'去看看'
        },
        show: {
            type: Boolean,
        },
        showBtn:{
            type:Boolean
        }


    },

    /**
     * 组件的初始数据
     */
    data: {
        currentTab: 0
    },

    lifetimes: {
        attached() {
            this._init()
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        _init() {
            wx.lin = wx.lin || {};
            wx.lin.showEmpty = (options) => {
                const {
                    btnText = '去看看',
                    text = '暂时还没有关注哦~',
                    showBtn = false
                } = {...options};
                this.setData({
                    btnText,
                    text,
                    showBtn,
                    show: true
                });
            };
            wx.lin.hideEmpty = () => {
                this.setData({
                    show: false
                });
            };
        },
        onTap(event) {
            let current = 1
            this.setData({
                current
            })
            this.triggerEvent('changeCurrent',{
                    current,
                }
            )
        }
    }
})
