// components/state-entrance/index.js
import {activityStatusBehavior} from "../behavior/activityStatus";

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [activityStatusBehavior],
  properties: {
    status: Number,
  },

  /**
   * 组件的初始数据
   */
  data: {
    icon:'',
    text:'',
  },

  observers:{
    'status':function (status){
      if (!status){
        return
      }
      const icon = this.activityTypeIcon(status)
      const text = this.activityTypeText(status)
      this.setData({
        icon,
        text
      })
    }
  },

  attached() {
    // console.log(this.properties.item)
    // console.log(this.data.text)
    // console.log(this.data.icon)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onGoToPublish(event){
      const status = this.properties.status
      wx.navigateTo({
        url:`/pages/publishing/publishing?status=${status}`
      })
    }
  }
})
