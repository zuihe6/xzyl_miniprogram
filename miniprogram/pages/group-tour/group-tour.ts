Page({
  data: {
    tours: [
      { title: '【直通车】雅鲁藏布大峡谷一日游（林芝出发）', spot: '南迦巴瓦峰 两江汇流 佛掌沙丘', price: 399 },
      { title: '【纯玩】纳木错圣湖一日游（拉萨出发）', spot: '念青唐古拉山 那根拉山口 纳木错', price: 328 },
    ],
  },
  goDetail() { wx.navigateTo({ url: '/pages/group-tour-detail/group-tour-detail' }) },
})
