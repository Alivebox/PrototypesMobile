Ext.define('TestMobile.controller.order.OrderController', {

    extend: 'Ext.app.Controller',

    config: {
        control: {
            listorders: {
                showNavigationMenu: 'onShowNavigationMenu'
            },
            orderdetail: {
                showOrderMenu: 'onShowOrderMenu'
            },
            itemorder: {
                showOrderDetail: 'onShowOrderDetail'
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
    }
});