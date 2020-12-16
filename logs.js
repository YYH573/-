var util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    modalHidden: true,
    toastHidden: true
  },
  onShow: function () {
    wx.setNavigationBarTitle({
      title: '种树记录'
    })
    this.getLogs()
  },
  set: function () {
  },
 onLoad: function () {

   },
  
  getLogs: function () {
    let logs = wx.getStorageSync('logs')
    logs.forEach(function (item) {
      console.log(item)
      item.startTime = new Date(item.startTime).toLocaleString()
    })
    this.setData({
      logs: logs
    })
  },

 

  switchModal: function () {
    this.setData({
      modalHidden: !this.data.modalHidden
    })
  },
  hideToast: function () {
    this.setData({
      toastHidden: true
    })
  },
  clearLog: function (e) {
    wx.setStorageSync('logs', [])
    this.switchModal()
    this.setData({
      toastHidden: false
    })
    this.getLogs()
  }
})
