//app.js
App({
    getUserInfo: function(cb) {

    },
    onLaunch: function() {
        console.log('App 启动...')
    },
    onShow: function() {
        console.log('App 展示进入前台')
    },
    onHide: function() {
        console.log('App 隐藏进入后台')
    },
    globalData: {
        userInfo: null
    }
})
