export {}

const tours = [
  {
    title: '【直通车】雅鲁藏布大峡谷一日游（林芝出发）',
    tip: '无购物，无自费，冬游西藏特惠价',
    spot: '南迦巴瓦峰 两江汇流 佛掌沙丘',
    price: 680,
  },
  {
    title: '拉萨布达拉宫+大昭寺文化深度二日游',
    tip: '精品小团，含专业讲解',
    spot: '布达拉宫 八廓街 大昭寺',
    price: 980,
  },
]

Page({
  data: { tours },
  goDetail() {
    wx.navigateTo({ url: '/pages/group-tour-detail/group-tour-detail' })
  },
})
