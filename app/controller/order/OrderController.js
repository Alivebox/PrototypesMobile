Ext.define('TestMobile.controller.order.OrderController', {

    extend: 'Ext.app.Controller',

    config: {

        refs: {
            datePickerStartDate : 'orderdetail [itemId=dpStartDate]',
            datePickerEndDate : 'orderdetail [itemId=dpEndDate]',
            datePickerStartTime : 'orderdetail [itemId=tpStartTime]',
            datePickerEndTime : 'orderdetail [itemId=tpEndTime]',
            orderDetail: 'orderdetail'
        },

        control: {
            listorders: {
                showNavigationMenu: 'onShowNavigationMenu'
            },
            orderdetail: {
                showOrderMenu: 'onShowOrderMenu'
            },
            itemorder: {
                showOrderDetail: 'onShowOrderDetail'
            },
            datePickerStartDate: {
                change: 'updateDurationTime'
            },
            datePickerEndDate: {
                change: 'updateDurationTime'
            },
            datePickerStartTime: {
                change: 'updateDurationTime'
            },
            datePickerEndTime: {
                change: 'updateDurationTime'
            }
        }
    },

    getMainController: function(){
        return this.getApplication().getController('MainController');
    },

    onShowOrderDetail: function(){
        var tmpMainController = this.getMainController();
        tmpMainController.showOrderDetailView();
    },

    onShowNavigationMenu: function(){
        var tmpMainController = this.getMainController();
        tmpMainController.showNavigationMenuView();
    },

    onShowOrderMenu: function(){
        var tmpMainController = this.getMainController();
        tmpMainController.showOrderMenuView();
    },

    updateDurationTime: function(){
        var tmpDpStartDate = this.getOrderDetail().down('#dpStartDate');
        var tmpDpEndDate = this.getOrderDetail().down('#dpEndDate');
        var tmpTpStartTime = this.getOrderDetail().down('#tpStartTime');
        var tmpTpEndTime = this.getOrderDetail().down('#tpEndTime');
        var tmpDifHours = this.getDateUtil().calculateHoursDuration(tmpDpStartDate.getValue(), tmpDpEndDate.getValue(), tmpTpStartTime.getValue(), tmpTpEndTime.getValue());
        var tmpTxtDuration = this.getOrderDetail().down('#txtDuration');
        tmpTxtDuration.setValue(tmpDifHours + ' hrs');
    },

    getDateUtil: function(){
        return TestMobile.ux.util.date.DateUtil;
    }
});