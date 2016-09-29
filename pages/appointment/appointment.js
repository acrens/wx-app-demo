// appointment.js
Page({
    data: {
        actionSheetHidden: true,
        actionSheetItems: [
        	'儿科',
            '妇科',
            '老人科',
            '成人体检科',
            '儿童体检科',
            '麻醉科'
        ],
        department: '', // 科室
        birth: '2016-09-01' // 出生日期
    },
    // 选择出生日期
    bindDateChange: function(e) {
    	this.setData({
	      	birth: e.detail.value
	    });
    },
    // 弹出内容层
    actionSheetTap: function() {
        this.setData({
            actionSheetHidden: false
        });
    },
    // 点击背景或者取消按钮会被调用
    actionSheetChange: function() {
        this.setData({
            actionSheetHidden: true
        });
    },
    // 点击选择一项
    bindItemTap: function(e) {
        var curTarget = e.currentTarget;
        var name = curTarget.dataset.name;
        this.setData({
            department: name,
            actionSheetHidden: true
        });
    },
    onLoad: function(options) {
        var that = this
    }
});
