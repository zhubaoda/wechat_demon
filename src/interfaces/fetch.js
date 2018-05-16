import wepy from 'wepy'

export default function Fetch (appid, host) {
  this.host = host
  this.appid = appid

  this.fetch = async (url, auth, data={}, method='GET') => {
    let response = await this._request(url, auth, data, method)
    if (response.data.code === 403) {
      await wepy.removeStorage({key: 'token'})
      return this.fetch(url, auth, data, method)
    }
    if (response.data.code === 4403) {
      console.log('登录')
      wepy.navigateTo({
        url: '/pages/login'
      })
    }
    return response.data
  }

  this.login = async () => {
    let wxUserInfo = {}
    const loginData = await wepy.login()
    try{
      wxUserInfo = await wepy.getUserInfo()
    } catch (e) {
      console.log(e)
    }
    let userinfo = await this.fetch('/user/login', false, {code: loginData.code, ...wxUserInfo})
    console.log(userinfo, 'userinfo')
    await wepy.setStorage({key: 'token', data: userinfo.data})
    return userinfo
  }

  this._request = async (url, auth, data, method) => {
    let header = { 'X-WX-APPID': this.appid }
    if (auth) {
      header['X-WX-TOEKN'] = await this._getToken()
    }
    if (method !== 'UPLOAD') {
      url = this.host + url
      return await wepy.request({url: url, data: data, header: header, method: method})
    } else {
      // 上传图片
      if (auth) {
        url = this.host + url + '?appid=' + this.appid + '&token=' + await this._getToken()
      } else {
        url = this.host + url
      }
      let name
      let src
      for (let key in data) {
        name = key
        src = data[key]
      }
      return await wepy.uploadFile({url: url, filePath: src, formData: {}, name: name})
    }
  }

  this._getToken = async () => {
    let token = ''
    try {
      token = await wepy.getStorage({key: 'token'})
      console.log('token-getStorage', token)
    } catch (err) {
      token = await this.login()
      console.log('token-login', token)
    }
    return token.data
  }
}