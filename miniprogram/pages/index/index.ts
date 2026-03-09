Page({
  go(e: WechatMiniprogram.BaseEvent) {
    const url = e.currentTarget.dataset.url as string
    wx.navigateTo({ url })
  },
})
