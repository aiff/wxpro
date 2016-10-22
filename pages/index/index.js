//index.js
//获取应用实例
var app = getApp()
Page({
  
  data: {
    // diss:true,
    len:2,
    imgUrls:['../../img/2.jpg','../../img/1.jpg'],
    name:'qq',
    //  array:[1,2,3,4,'hello'],
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
     //this.setdata:true
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
