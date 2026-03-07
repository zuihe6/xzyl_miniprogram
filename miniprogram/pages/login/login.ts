Page({
  data: { mobile: '', code: '', agree: true },
  onMobile(e: any) { this.setData({ mobile: e.detail.value }) },
  onCode(e: any) { this.setData({ code: e.detail.value }) },
  onAgree(e: any) { this.setData({ agree: e.detail.checked }) },
})
