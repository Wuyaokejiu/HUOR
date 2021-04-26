// components/state-entrance/index.js
import {activityStatusBehavior} from "../behavior/activityStatus";

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [activityStatusBehavior],
  properties: {
    item: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    icon:'',
    text:'',
  },

  observers:{
    'item':function (item){
      if (!item){
        return
      }
      const icon = this.activityTypeIcon(item)
      const text = this.activityTypeText(item)
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
      wx.navigateTo({
        url:`/pages/publishing/publishing`
      })
    }
  }
})
