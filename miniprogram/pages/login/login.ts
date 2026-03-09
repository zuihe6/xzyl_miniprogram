Page({
  data: { agreed: false },
  onAgreeChange(e: WechatMiniprogram.CustomEvent) {
    this.setData({ agreed: e.detail.checked })
  },
  login() {
    if (!this.data.agreed) {
      wx.showToast({ title: '请您先阅读用户协议', icon: 'none' })
      return
    }
    wx.showToast({ title: '登录成功', icon: 'success' })
    setTimeout(() => wx.switchTab({ url: '/pages/myself/myself' }), 500)
  },
})
