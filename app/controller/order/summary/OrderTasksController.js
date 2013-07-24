Ext.define('TestMobile.controller.order.summary.OrderTasksController', {

    extend: 'Ext.app.Controller',

    config: {
        control: {
            mainmenu: {
                showActiveOrders: 'onShowActiveOrders',
                showQueueOrders: 'onShowQueueOrders',
                showWebForm: 'onShowWebForm'
            }
        }
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