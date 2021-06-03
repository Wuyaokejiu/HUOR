// pages/search/search.js
import {Search} from "../../model/search";
import {showToast} from "../../utils/ui";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword:'',
    results:[],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  async onSearch(event){
    this.setData({
      search:true,
      items:[]
    })
    console.log(event)

    const keyword = event.detail.value
    if (!keyword){
      showToast("please input keyword")
      return
    }
    const search = new Search()
    const results = await search.search(keyword)
    console.log(results)
    this.setData({
      results,
    })

  },

  onCancel(event){
    this.setData({
      search:false
    })
  },

})