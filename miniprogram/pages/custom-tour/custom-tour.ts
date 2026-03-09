Page({
  data: {
    hotel: '四星/高档',
    meal: '当地特色',
    adult: 2,
    child: 0,
  },
  submit() {
    wx.showToast({ title: '定制需求已提交', icon: 'success' })
  },
  onStepChange(e: WechatMiniprogram.CustomEvent) {
    const { key } = e.currentTarget.dataset
    this.setData({ [key]: e.detail.value })
  },
})
