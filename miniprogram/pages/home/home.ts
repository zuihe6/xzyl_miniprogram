Page({
  data: {
    banners: [{ text: '珠穆朗玛峰大本营' }, { text: '林芝桃花节' }, { text: '纳木错圣湖' }],
    hotTags: ['热门路线', '布达拉宫', '林芝桃花', '雅鲁藏布大峡谷'],
    modules: [
      { name: '旅游租车', icon: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png', url: '/pages/car-list/car-list' },
      { name: '预定酒店', icon: 'https://tdesign.gtimg.com/mobile/demos/avatar2.png', url: '/pages/not-open/not-open' },
      { name: '预约导游', icon: 'https://tdesign.gtimg.com/mobile/demos/avatar3.png', url: '/pages/not-open/not-open' },
      { name: '定制游', icon: 'https://tdesign.gtimg.com/mobile/demos/avatar4.png', url: '/pages/custom-tour/custom-tour' },
      { name: '参团游', icon: 'https://tdesign.gtimg.com/mobile/demos/avatar5.png', url: '/pages/group-tour/group-tour' },
      { name: '门票预约', icon: 'https://tdesign.gtimg.com/mobile/demos/avatar6.png', url: '/pages/not-open/not-open' },
    ],
    tours: [
      { name: '拉萨精华三日游', desc: '无购物 · 纯玩', price: 1280 },
      { name: '林芝桃花节四日游', desc: '含往返 · 特惠', price: 2380 },
    ],
  },
  openModule(e: any) { wx.navigateTo({ url: e.currentTarget.dataset.url }) },
  open(e: any) { wx.navigateTo({ url: e.currentTarget.dataset.url }) },
  onTabChange(e: any) {
    const v = e.detail.value
    if (v === 'service') wx.redirectTo({ url: '/pages/service/service' })
    if (v === 'my') wx.redirectTo({ url: '/pages/myself/myself' })
  },
})
