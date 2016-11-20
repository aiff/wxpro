var app = getApp()

var diaries = require("../list.js")

Page({

    data: {
        diaries: diaries.data.diaries,
        deviceInfo: {},
    },

    onLoad() {
        var that = this;
        // 获取当前设备信息
        app.getDeviceInfo(function(deviceInfo) {
            that.setData({
                deviceInfo: deviceInfo,
            });

            console.log(deviceInfo);
        })
    }
})