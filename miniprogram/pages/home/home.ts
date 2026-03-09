export {}

const modules = [
  { title: '旅游租车', icon: 'car', url: '/pages/car-list/car-list' },
  { title: '预定酒店', icon: 'shop', url: '/pages/not-open/not-open' },
  { title: '预约导游', icon: 'user-talk', url: '/pages/not-open/not-open' },
  { title: '定制游', icon: 'edit', url: '/pages/custom-tour/custom-tour' },
  { title: '参团游', icon: 'map-information-2', url: '/pages/group-tour/group-tour' },
  { title: '门票预约', icon: 'ticket', url: '/pages/not-open/not-open' },
]

const tours = [
  { name: '拉萨精华三日游', tags: '无购物 · 纯玩', price: 1280 },
  { name: '林芝桃花节四日游', tags: '含往返 · 特惠', price: 2380 },
  { name: '雅鲁藏布大峡谷一日', tags: '无自费 · 小团', price: 680 },
  { name: '纳木错圣湖两日游', tags: '含住宿 · 舒适', price: 1580 },
]

Page({
  data: {
    modules,
    tours,
    swiperList: [
      'https://tdesign.gtimg.com/miniprogram/images/swiper1.png',
      'https://tdesign.gtimg.com/miniprogram/images/swiper2.png',
      'https://tdesign.gtimg.com/miniprogram/images/swiper3.png',
    ],
  },
  goModule(e: WechatMiniprogram.BaseEvent) {
    const { url } = e.currentTarget.dataset
    wx.navigateTo({ url })
  },
  goGroupTour() {
    wx.navigateTo({ url: '/pages/group-tour/group-tour' })
  },
})
