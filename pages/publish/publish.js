// pages/publish/publish.js
Page({
  onShareAppMessage() {
    return {
      title: 'checkbox',
      path: 'page/component/pages/checkbox/checkbox'
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    date: '2021-03-01',
    time: '10:00',
    dateE: '2021-03-02',
    timeE: '11:00',
    dateD: '2021-02-20',
    timeD: '10:00',
    long:'',
    place:'',
    member:'',
    detail:'',
    items: [
      {value: 'Sport', name: '运动'},
      {value: 'Academic', name: '学术', checked: 'true'},
      {value: 'Game', name: '游戏'},
      {value: 'Travel', name: '旅游'},
    ]
  },
  checkboxChange(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)

    const items = this.data.items
    const values = e.detail.value
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false

      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].value === values[j]) {
          items[i].checked = true
          break
        }
      }
    }

    this.setData({
      items
    })
  },


  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    this.setData(data);
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindDateChangeE: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      dateE: e.detail.value
    })
  },
  bindDateChangeD: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      dateD: e.detail.value
    })
  },
  
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  bindTimeChangeE: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      timeE: e.detail.value
    })
  },
  bindTimeChangeD: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      timeD: e.detail.value
    })
  },
  timeDifference:function(e){
    var duration=this.data.timeE*1-this.data.time*1;
    this.setData({
    result:duration
    });
    },
    onTame:function(e) {
      this.setData({
        title:e.detail.value
      });
      console.log(this.data.title)
    },
    onLong(e){
      this.setData({
        long: e.detail.value
      })
      console.log(this.data.long)
    },
    onPlace(e){
      this.setData({
        place: e.detail.value
      })
      console.log(this.data.place)
    },
    onMember(e){
      this.setData({
        member: e.detail.value
      })
      console.log(this.data.member)
    },
    onDetail(e){
      this.setData({
        detail: e.detail.value
      })
      console.log(this.data.detail)
    }
})