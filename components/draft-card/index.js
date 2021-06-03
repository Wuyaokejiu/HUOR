// components/card/index.js
import {ActivityDetail} from "../../model/activityDetail";

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: Object,
  },

  /**
   * 组件的初始数据
   */
  data: {
    activityTypeText: '',
    activityTypeIcon: '',
    _activity:Object,

  },

  observers:{
    'item,currentType': function (item){
      if (!item){
        return
      }
      const activity = new ActivityDetail(item)
      this.setData({
        activityTypeText: activity.activityTypeText(item.state),
        activityTypeIcon: activity.activityTypeIcon(item.state)
      })

      this.setData({
        _activity:activity
      })
    }
  },

  attached() {
    // console.log(this.properties.item)
    // console.log(this.data.activityTypeText)
    // console.log(this.data.activityTypeIcon)
    // console.log(this.data._activity)
  },

  /**
   * 组件的方法列表
   */
  methods: {

    onGoToDetail(event){
      const item = JSON.stringify(this.properties.item)
      console.log(item)
      wx.navigateTo({
        url:`/pages/publishing/publishing?item=${item}`
      })
    }
  }
})
