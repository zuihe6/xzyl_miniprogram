Page({
  onQuickTap(e: WechatMiniprogram.BaseEvent) {
    const text = e.currentTarget.dataset.text as string
    wx.showToast({ title: `已发送：${text}`, icon: 'none' })
  },
})
