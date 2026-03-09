export {}

const cars = [
  { id: 1, name: '丰田普拉多 5座越野', desc: '适合高原山路 · 动力强劲', brand: 'TOYOTA', price: 980 },
  { id: 2, name: '别克 GL8 商务 7座', desc: '空间宽敞 · 商务舒适', brand: 'BUICK', price: 880 },
  { id: 3, name: '本田雅阁 5座轿车', desc: '城市通勤 · 经济省油', brand: 'HONDA', price: 580 },
]

Page({
  data: {
    cityOptions: [
      { label: '拉萨', value: '拉萨' },
      { label: '林芝', value: '林芝' },
      { label: '阿里', value: '阿里' },
      { label: '日喀则', value: '日喀则' },
      { label: '山南', value: '山南' },
      { label: '那曲', value: '那曲' },
      { label: '波密', value: '波密' },
      { label: '昌都', value: '昌都' },
    ],
    carTypeValue: 0,
    cityValue: '拉萨',
    cars,
  },
  onTypeChange(e: WechatMiniprogram.CustomEvent) {
    this.setData({ carTypeValue: e.detail.value })
  },
  goDetail() {
    wx.navigateTo({ url: '/pages/car-detail/car-detail' })
  },
})
