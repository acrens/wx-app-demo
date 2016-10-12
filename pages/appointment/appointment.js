// appointment.js
Page({
    data: {
        actionSheetHidden: true,
        sexSheetHidden: true,
        actionSheetItems: [
        	'儿科',
            '妇科',
            '老人科',
            '成人体检科',
            '儿童体检科',
            '麻醉科'
        ],
        sexSheetItems: [
            '男',
            '女',
            '不详'
        ],
        department: '', // 科室
        birth: '', // 出生日期
        sex: '' // 性别
    },
    // 选择出生日期
    bindDateChange: function(e) {
    	this.setData({
	      	birth: e.detail.value
	    });
    },
    // 弹出内容层
    actionSheetTap: function(e) {
        var that = this;
        var name = e.currentTarget.dataset.name;

        switch(name) {
            case 'department':
                that.setData({
                    actionSheetHidden: false
                });
            break;

            default:
                that.setData({
                    sexSheetHidden: false
                });
            break;
        }
    },
    // 点击背景或者取消按钮会被调用
    actionSheetChange: function(e) {
        var that = this;
        var name = e.currentTarget.dataset.name;

        switch(name) {
            case 'department':
                that.setData({
                    actionSheetHidden: true
                });
            break;

            default:
                that.setData({
                    sexSheetHidden: true
                });
            break;
        }
    },
    // 点击选择一项
    bindItemTap: function(e) {
        var that = this;
        var curTarget = e.currentTarget;
        var name = curTarget.dataset.name;
        var type = curTarget.dataset.type;

        switch(type) {
            case 'department':
                that.setData({
                    department: name,
                    actionSheetHidden: true
                });
            break;

            default: 
                that.setData({
                    sex: name,
                    sexSheetHidden: true
                });
            break;
        }
    },
    // 表单提交
    subForm: function(e) {
        wx.navigateTo({
            url: '../reservation/reservation'
        });
    },
    onLoad: function(options) {
        var that = this
    }
});
