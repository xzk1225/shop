<script>

import reques from './utils/reques.js'

export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

        wx.login({
          success: res => {
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
            var code = res.code
            console.log(res.code)
            wx.getUserInfo({
              success: res => {
                // 可以将 res 发送给后台解码出 unionId
                // this.globalData.Info = res.userInfo
                // console.log(res)  // res.encryptedData   res.iv   cod
                var send = {   //拼接好请求后台用哪个的data
                  code: code,
                  encryptedData: res.encryptedData,
                  iv: res.iv
                }
               send= {
                  code: '061eqhev15rE4a0ejRdv1eipev1eqhe6',
                    encryptedData: '6iZFmx8XNhHs3cb9iCMIlOt0/sOwBDg9Z0/f1Lc3JpbxxVbGdG2T7Wbs3x5gfPNT7pD+AVAE5DKdG4CGfFSE5/7pmiFE6gwrfv5RinKv29m89MlaPtvYv42d9DxMYmqXzsMqmtl+F4ppeg39hG509RfwrWuMy3T8DjrdgZCmAhHc16mkZ/n6ZigREnzNpeizciuORM7VKkZXKou5QQtsjZt3XWW6lSpY0P5kMaOv4jDAaqKzOXCFXEElffFUFfMkGrnmM2PGcwejALli3NqrLSa+9uBu5znlScm6HYHDOe6cFHTUeRJrkXmQSeyosaG0I/fjmYSeCCZiGXwdLEQhudCKoMYhfv61SBjQdH6V2BmjqgudnmFPNlGuyGrVEHvg6CoEKcJG/aox1VFWmfXEhLSA+IlFjzEmoyIL2EWBTXKBRGFri4fctnS0LJ4z0tWXdOaB5vo9F64H0eda7qcAHQ==',
                      iv: "NKkeBmZUVUll7GCb2wJbUQ=="
                }
                var that = this;
                var a = reques.getdata({ data: 'auth/mpLogin' }, send)
                a.then(res => {
                    console.log(res.data)
                    reques.setS('app_id',1234);
                    reques.setS('user_id',1157);
                    reques.setS('token','18ae1ae3e30f5483f216704504f4f1f5');

                  // wx.setStorage({
                  //   key: 'token',
                  //   // data: res.data.result.access_token,
                  //   data: '005c58041edf8497935e71385e663806',

                  // })
                })
                  .catch(function (e) {
                    console.log(e); // "哦，不!" 
                  })
                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                // if (this.userInfoReadyCallback) {
                //   this.userInfoReadyCallback(res)
                // }
              }
            })
          }
        })





















    console.log('app created and cache logs by setStorageSync')
  
  }
}
</script>

<style>

</style>
