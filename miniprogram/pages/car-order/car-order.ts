Page({
  submit() {
    wx.showToast({ title: '订单已提交', icon: 'success' })
  },
  showDetail() {
    wx.showModal({
      title: '费用明细',
      content: '车辆服务费 ¥980/天，保险服务 ¥80，合计金额以客服确认为准。',
      showCancel: false,
    })
  },
})
