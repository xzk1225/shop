import md5 from 'js-md5'

function getData(url, data) {
if(url.url){
  var http = 'http://app.buwaibao.com/v1/web/index.php/'
}else{
 // var http = 'http://192.168.0.66:88/'
 var http = 'http://api.buwaibao.com/'
}
  var date = sign(data)

  
  console.log('请求的数据信息', date)
  return new Promise((resolve, reject) => {
    wx.request({
      url:http+url.data , //仅为示例，并非真实的接口地址
      data: date,
      method:'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        // resolve(res);  //  这里是用的一个promise 在外部调用时候需要用到 。then(data()=>{data.data})
         switch (res.data.code) {
             case 1000:
               resolve(res)
               break;
             case 1001:
               wx.showToast({
                 title: '处理失败，请稍后再试',
                 icon: 'none'
               })
               resolve(res)
               break;
             case 3001:
             wx.showToast({
               title: '余额不足',
               icon:'none'
             })
             resolve(res)
               break;
             case 2009:
               wx.showToast({
                 title: '请勿重复邀请',
                 icon: 'none'
               })
               resolve(res)
               break;
             case 2010:
               wx.showToast({
                 title: '请先完成职业认证',
                 icon: 'none'
               })
               resolve(res)
               break;
             case -1:
               wx.showToast({
                 title: '系统繁忙',
                 icon: 'none'
               })
               resolve(res)
               break;
             case 6000:
               wx.showToast({
                 title: '小程序未正式发布，接口受限, 此功能无法开放',
                 icon: 'none'
               })
               resolve(res)
               break;
             case 2003:
               wx.showToast({
                 title: '手机号码已被注册',
                 icon: 'none'
               })
               resolve(res)
               break;
             case 2002:
               wx.showToast({
                 title: '验证码错误',
                 icon: 'none'
               })
               resolve(res)
               break;
             case 2006:
               wx.showToast({
                 title: '旧密码验证失败',
                 icon: 'none'
               })
               resolve(res)
               break;
             default:
               resolve(res)
             
           }

      },
      fail: function (err) {
        reject(err)
      }
    })
  })
};

function sign(data){
  
  var str='';
  if(data){
    for (var k in data) {
      str += k + '=' + data[k] + '&'
    }
  }else{
    data={}
  }
  
  str +='key=0d4f8a7b9bf57d772905b1a88d822fd1';  
  data.sign=md5(str);
  
  return data
}

function wxNav(url,data){
        if(data){
          let str = url + '?'
          for (var key in data) {
            str += key + '=' + data[key] + '&'
          }
          str = str.slice(0, str.length - 1)
          wx.navigateTo({
            url: str
          })
        }else{
          wx.navigateBack({
            delta: url
          })
        }
}
function setStorg(key,val){
  wx.setStorage({
  key:key,
  data:val
})
}

function getStorg(key) {
  return wx.getStorageSync(key)
  // body...
}
function img(url, data, de, avatar) { // 单图上传
  var http = 'http://api.buwaibao.com/' + url;
  var imgdat = sign(de);
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: http, 
      filePath: data,
      name: avatar,
      formData: imgdat,
      success: function (res) {
        var data = res.data
        resolve(res)
      },
      fail: function (res) {
        reject(reject)
      }
    })
  })

}
function toast(title,icon) {
  wx.showToast({
  title: title,
  icon:icon? icon: 'success',
  duration: 2000
})
  // body...
}



const reques = {
  getdata: getData,
  nav:wxNav,
  setS:setStorg,
  imgdata: img,
  getS:getStorg,
  toast:toast

}
export default reques