//index.js
//获取应用实例
var app = getApp()
Page({
  
  data: {
    //ddis:false
    motto: 'Hello World  eric',
    userInfo: {}
  },
  inputfn:function(e){
      console.log(e);

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },doload :function(){
  //  this.setdata:false
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})