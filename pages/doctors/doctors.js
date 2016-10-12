// doctors.js
Page({
    data: {
    	doctors: [{
            name: '测试医生',
            department: '儿科',
            photo: 'https://clinic.dxycdn.com/3/2016/04/07/1460013886002507080.png'
        }, {
            name: '测试医生',
            department: '儿科',
            photo: 'https://clinic.dxycdn.com/3/2016/04/07/1460013886002507080.png'
        }, {
            name: '测试医生',
            department: '儿科',
            photo: 'https://clinic.dxycdn.com/3/2016/04/07/1460013886002507080.png'
        }, {
            name: '测试医生',
            department: '儿科',
            photo: 'https://clinic.dxycdn.com/3/2016/04/07/1460013886002507080.png'
        }, {
            name: '测试医生',
            department: '儿科',
            photo: 'https://clinic.dxycdn.com/3/2016/04/07/1460013886002507080.png'
        }, {
            name: '测试医生',
            department: '儿科',
            photo: 'https://clinic.dxycdn.com/3/2016/04/07/1460013886002507080.png'
        }, {
            name: '测试医生',
            department: '儿科',
            photo: 'https://clinic.dxycdn.com/3/2016/04/07/1460013886002507080.png'
        }, {
            name: '测试医生',
            department: '儿科',
            photo: 'https://clinic.dxycdn.com/3/2016/04/07/1460013886002507080.png'
        }, {
            name: '测试医生',
            department: '儿科',
            photo: 'https://clinic.dxycdn.com/3/2016/04/07/1460013886002507080.png'
        }, {
            name: '测试医生',
            department: '儿科',
            photo: 'https://clinic.dxycdn.com/3/2016/04/07/1460013886002507080.png'
        }, {
            name: '测试医生',
            department: '儿科',
            photo: 'https://clinic.dxycdn.com/3/2016/04/07/1460013886002507080.png'
        }, {
            name: '测试医生',
            department: '儿科',
            photo: 'https://clinic.dxycdn.com/3/2016/04/07/1460013886002507080.png'
        }]
    },
    /**
     * 跳转到医生个人信息页面
     */
    navUrl: function(e) {
    	wx.navigateTo({
            url: '../appointment/appointment'
        });
    },
    onLoad: function(options) {
        var that = this
    }
});
