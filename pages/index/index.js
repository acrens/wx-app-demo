//index.js
Page({
    data: {
        clinics: [{
            name: '丁香诊所滨江店',
            phone: '0571-86687392',
            address: '滨江区滨盛路2313号（长河路滨盛路口）',
            logo: 'https://clinic.dxycdn.com/3/2016/04/07/1460013886002507080.png'
        }, {
            name: '丁香诊所城西店',
            phone: '0571-28235136',
            address: '西湖区莲花街333路',
            logo: 'https://clinic.dxycdn.com/3/2016/04/07/1460013886002507080.png'
        }]
    },
    // 跳转页面 
    bindViewTap: function() {
        wx.navigateTo({
            url: '../appointment/appointment'
        });
    },
    onLoad: function() {
        var that = this
    }
});
