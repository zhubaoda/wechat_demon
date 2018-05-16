import wepy from 'wepy'

export default class authMixin extends wepy.mixin {
  data = {
    authLoading: false
  }

  async auth () {
    this.authLoading = true
    let authRes = await this.$parent.authorize()

    this.authLoading = false
    return authRes
  }
}
