Page({
  goOrders() { wx.navigateTo({ url: '/pages/orders/orders' }) },
  onTabChange(e: any) {
    const v = e.detail.value
    if (v === 'home') wx.redirectTo({ url: '/pages/home/home' })
    if (v === 'service') wx.redirectTo({ url: '/pages/service/service' })
  },
})
