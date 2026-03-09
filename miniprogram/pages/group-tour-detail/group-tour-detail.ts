Page({
  data: {
    count: 1,
    date: '今天 03-05',
  },
  onCountChange(e: WechatMiniprogram.CustomEvent) {
    this.setData({ count: e.detail.value })
  },
  chooseDate(e: WechatMiniprogram.BaseEvent) {
    this.setData({ date: e.currentTarget.dataset.date })
  },
  showDetail() {
    wx.showModal({
      title: '费用明细',
      content: '成人票 ¥680/人，保险 ¥20/人，总价随人数自动计算。',
      showCancel: false,
    })
  },
  buyNow() {
    wx.showToast({ title: '购买成功', icon: 'success' })
  },
})
