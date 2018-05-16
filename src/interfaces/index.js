import wepy from 'wepy'
import Fetch from './fetch'

export default {
  async fetch () {
    const ext = await wepy.getExtConfig()
    let host = ext.extConfig.host
    let appid = ext.extConfig.appid
    let fetch = new Fetch(appid, host)
    return fetch.fetch(...arguments)
  },
  // 用户信息
  async getUserInfo () {
    return await this.fetch('/user/info', true)
  },
  // 发送验证码
  async sendCode (data) {
    return await this.fetch('/sms/send/dingzhi-adviser-place-code', true, data)
  },
  // 绑定手机号（登录）
  async bindPhone (data) {
    return await this.fetch('/dingzhi_adviser/adviser/bind', true, data)
  },
  // 顾问登录
  async login (data) {
    return await this.fetch('/dingzhi_adviser/adviser/login', true, data)
  },
  // 我的预约列表
  async getOrderList (data) {
    return await this.fetch('/dingzhi_adviser/adviser/order/list/temp', true, data)
  },
  // 取消预约
  async cancelOrder (data) {
    return await this.fetch(`/dingzhi_adviser/adviser/cancel/order`, true, data)
  },
  // 确定预约
  async takeOrder (data) {
    return await this.fetch(`/dingzhi_adviser/adviser/confirm/order`, true, data)
  },
  // 修改量体数据
  async modifyOrderInfo (data) {
    return await this.fetch('/dingzhi_adviser/adviser/order/info', true, data)
  },
  // 确认量体完成
  async confirmMeasure (data) {
    return await this.fetch('/dingzhi_adviser/adviser/confirm/measure', true, data)
  },
  // 上传量体数据
  async uploadParams (data) {
    return await this.fetch('/dingzhi_adviser/adviser/upload/params', true, data, 'POST')
  },
  // 预约订单详情
  async getOrderDetail (data) {
    return await this.fetch(`/dingzhi_adviser/adviser/order/detail/temp`, true, data)
  },
  // 上传图片
  async uploadImg (data) {
    return await this.fetch('/shop/refund/image/upload', true, data, 'UPLOAD')
  },
  // 常见问题
  async problem () {
    return await this.fetch(`/dingzhi_adviser/adviser/problem`, true)
  },
  // 获取商品列表
  async getGoodsList(categoryId, page, name) {
  	return await this.fetch(`/dingzhi/product/list`, true, {id:categoryId, page: page, name: name })
  },
  // 获取商品类型
  async getShopCategory() {
    return await this.fetch('/shop/category', false)
  },
  // 获取自定义的首页
  async getDesignPage() {
    return await this.fetch('/dingzhi/design/home/get', true)
  },
  // 获取信息
  async getNum() {
  	return  await this.fetch('/dingzhi_adviser/adviser/info', true)
  },
  // 获取商品详情
  async getGoods(goodsId) {
    return await this.fetch(`/dingzhi/product/detail/${goodsId}`, true)
  },
  // 顾问修改订单
  async modifyOrder(data) {
  	return await this.fetch(`/dingzhi_adviser/adviser/edit/order`, true, data, 'POST')
  },
  // 佣金
  async myMoney() {
  	return  await this.fetch('/dingzhi_adviser/adviser/commission', true)
  },
  // 售后详情 
  async  orderAfter(data) {
  	return await this.fetch('/dingzhi_adviser/adviser/support/detail', true, data)
  },
  // 顾问确定售后
  async  confirmAfter(id) {
  	return await this.fetch('/dingzhi_adviser/adviser/confirm/support', true, {id: id})
  },
  // 顾问售后列表
  async  afterList(page) {
  	return await this.fetch('/dingzhi_adviser/adviser/support/list', true, {page: page})
  }
}
