Page({
  data: {
    cityOptions: [{ label: '拉萨', value: '拉萨' }, { label: '林芝', value: '林芝' }, { label: '阿里', value: '阿里' }],
    cars: [
      { name: '丰田普拉多 2.7L', desc: '四驱强劲动力，适合高原路况', brand: '丰田', price: 980 },
      { name: '别克GL8 商务版', desc: '空间舒适，适合家庭及团队', brand: '别克', price: 1280 },
    ],
  },
  detail(e: any) { wx.navigateTo({ url: e.currentTarget.dataset.url }) },
})
