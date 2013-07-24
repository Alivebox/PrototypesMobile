Ext.define('TestMobile.controller.order.menu.OrderMenuController', {

    extend: 'Ext.app.Controller',

    config: {
        control: {
            mainmenu: {
                showActiveOrders: 'onShowActiveOrders',
                showQueueOrders: 'onShowQueueOrders',
                showWebForm: 'onShowWebForm',
                showViewOrderHistory: 'onShowViewOrderHistory'
            }
        }
    },

    onShowViewOrderHistory: function(){
        this.getMainController().showMyWorkHistory();
    },

    onShowActiveOrders: function(){
        var tmpMainController = this.getMainController();
        tmpMainController.showListOrdersView();
    },

    onShowQueueOrders: function(){
        var tmpMainController = this.getMainController();
        tmpMainController.showListOrdersView();
    },

    onShowWebForm: function(){
        var tmpMainController = this.getMainController();
        tmpMainController.showListRequestView();
    },

    getMainController: function(){
        return this.getApplication().getController('MainController');
    }
});