Ext.define('TestMobile.controller.order.summary.OrderDetailsController', {

    extend: 'Ext.app.Controller',

    bottomHandlingView: undefined,

    config: {

        refs: {
            datePickerStartDate : 'orderdetail [itemId=dpStartDate]',
            datePickerEndDate : 'orderdetail [itemId=dpEndDate]',
            datePickerStartTime : 'orderdetail [itemId=tpStartTime]',
            datePickerEndTime : 'orderdetail [itemId=tpEndTime]',
            orderDetail: 'orderdetail',
            orderComments: 'ordercomments',
            orderActuals: 'orderactuals'
        },

        control: {
            orderdetail: {
                showMrgMenu: 'onShowMrgMenu',
                backList: 'onShowListOrder',
                hideMgrPanel: 'onHidePanel',
                goHome: 'onGoHome',
                logOut: 'onLogOut',
                showTask: 'onShowTask',
                showComments: 'onShowComments',
                showSummaryDetail: 'onShowSummaryDetail',
                showActuals: 'onShowActuals',
                showDocuments: 'onShowDocuments',
                bottomAddTapped: 'onBottomTapped'
            },
            listorders: {
                showNavigationMenu: 'onShowNavigationMenu'
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
        var tmpMgrMenu = this.getOrderDetail().down('#pMgrMenu');
        tmpMgrMenu.setHidden(true);
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

    onBottomTapped: function(){
        if(this.bottomHandlingView == 'comments'){
            var tmpCommentsPanel = this.getOrderComments().down('#pCommentsForm');
            tmpCommentsPanel.setHidden(false);
            return;
        }
        if(this.bottomHandlingView == 'actuals'){
            var tmpCommentsPanel = this.getOrderActuals().down('#pActualsForm');
            tmpCommentsPanel.setHidden(false);
            return;
        }
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
        var tmpMgrMenu = this.getOrderDetail().down('#pMgrMenu');
        tmpMgrMenu.setHidden(true);
    },

    onLogOut: function(){
        var tmpMainController = this.getMainController();
        var tmpMgrMenu = this.getOrderDetail().down('#pMgrMenu');
        Ext.Msg.confirm("Logout", "Are you Sure u want to Log out?", function(btn){
            if (btn == 'yes'){
                tmpMainController.showLoginView();
                tmpMgrMenu.setHidden(true);
            }
        });
    },

    onShowTask: function(){
        var tmpCOrderSummaryView = this.getOrderDetail().down('#cOrderSummaryView');
        tmpCOrderSummaryView.setActiveItem('ordertasks');
        this.hideBottomToolBar(true);
    },

    onShowComments: function(){
        var tmpCOrderSummaryView = this.getOrderDetail().down('#cOrderSummaryView');
        tmpCOrderSummaryView.setActiveItem('ordercomments');
        this.bottomHandlingView = 'comments';
        this.hideBottomToolBar(false);
        this.hideRightArrowHead(true);
    },

    onShowSummaryDetail: function(argComponent){
        var tmpCOrderSummaryView = this.getOrderDetail().down('#cOrderSummaryView');
        tmpCOrderSummaryView.setActiveItem('orderform');
        this.hideBottomToolBar(true);
    },

    onShowActuals: function(){
        var tmpCOrderSummaryView = this.getOrderDetail().down('#cOrderSummaryView');
        tmpCOrderSummaryView.setActiveItem('orderactuals');
        this.bottomHandlingView = 'actuals';
        this.hideBottomToolBar(false);
        this.hideRightArrowHead(false);
    },

    onShowDocuments: function(){
        var tmpCOrderSummaryView = this.getOrderDetail().down('#cOrderSummaryView');
        tmpCOrderSummaryView.setActiveItem('orderdocuments');
        this.hideBottomToolBar(true);
    },

    hideBottomToolBar: function(argFlat){
        var tmpBottomToolBar = this.getOrderDetail().down('#tbBottom');
        tmpBottomToolBar.setHidden(argFlat);

    },

    hideRightArrowHead: function(argFlat){
        var tmpRightArrowHead = this.getOrderDetail().down('#imgRightArrowHead');
        tmpRightArrowHead.setHidden(argFlat);
    }
});