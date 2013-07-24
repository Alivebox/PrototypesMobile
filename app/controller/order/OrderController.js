Ext.define('TestMobile.controller.order.OrderController', {

    extend: 'Ext.app.Controller',
    viewingItemOrder: undefined,
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
                showMrgMenu: 'onShowMrgMenu',
                backList: 'onShowListOrder',
                hideMgrPanel: 'onHidePanel',
                goHome: 'onGoHome',
                logOut: 'onLogOut'
            },
            itemorder: {
                showOrderDetail: 'onShowOrderDetail',
                onArrowClicked: 'showItemProperties'
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

    onShowMrgMenu: function(){
        var tmpMgrMenu = this.getOrderDetail().down('#pMgrMenu');
        tmpMgrMenu.setHidden(false);
    },

    onHidePanel: function(){
        var tmpMgrMenu = this.getOrderDetail().down('#pMgrMenu');
        tmpMgrMenu.setHidden(true);
    },

    onShowListOrder: function(){
        var tmpMainController = this.getMainController();
        tmpMainController.showListOrdersView();
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
    },

    showItemProperties: function(argComponent){
        var tmpBtnArrow = argComponent.down('#btnArrrow');
        tmpBtnArrow.setIcon('resources/icons/arrowDown.png');
        var tmpCOrderDetail = argComponent.down('#cOrderDetail');
        tmpCOrderDetail.setHidden(false);
        var tmpLblDate = argComponent.down('#lblDate');
        tmpLblDate.setHidden(false);
        if(this.viewingItemOrder == undefined){
            this.viewingItemOrder = argComponent;
            return;
        }
        var tmpBtnActualArrow = this.viewingItemOrder.down('#btnArrrow');
        tmpBtnActualArrow.setIcon('resources/icons/arrowRight.png');
        var tmpCActualOrderDetail = this.viewingItemOrder.down('#cOrderDetail');
        tmpCActualOrderDetail.setHidden(true);
        var tmpLblActualDate = this.viewingItemOrder.down('#lblDate');
        tmpLblActualDate.setHidden(true);
        this.viewingItemOrder = argComponent;
    },

    onGoHome: function(){
        var tmpMainController = this.getMainController();
        tmpMainController.showMainMenuView();
    },

    onLogOut: function(){
        var tmpMainController = this.getMainController();
        Ext.Msg.confirm("Logout", "Are you Sure u want to Log out?", function(btn){
            if (btn == 'yes'){
                tmpMainController.showLoginView();
            }
        });
    }
});