// components/empty/index.js


Component({
    /**
     * 组件的属性列表
     */
    properties: {
        text: {
            type: String,
            value: 'There is no collected activity now~'
        },
        btnText:{
            type:String,
            value:'ToAdd'
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

    /**
     * 组件的方法列表
     */
    methods: {
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
