//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    searchKey: ''
  },

  onLoad: function () {
    
  },
  bindKeyInput: function (e) {
    this.setData({
      searchKey: e.detail.value
    })
    console.log(e.detail.value)
  },
  //事件处理函数
  searchResult: function () {
    var searchKey = this.data.searchKey
    wx.navigateTo({
      url: '../result/result?searchKey=' + searchKey
    })
  }
})
