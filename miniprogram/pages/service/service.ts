Page({
  onTabChange(e: any) {
    const v = e.detail.value
    if (v === 'home') wx.redirectTo({ url: '/pages/home/home' })
    if (v === 'my') wx.redirectTo({ url: '/pages/myself/myself' })
  },
})
