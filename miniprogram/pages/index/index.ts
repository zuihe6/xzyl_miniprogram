Page({
  go(e: any) {
    const url = e.currentTarget.dataset.url
    wx.navigateTo({ url })
  },
})
