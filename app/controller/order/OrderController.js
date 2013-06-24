Ext.define('PrototypesMobile.controller.order.OrderController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            mainView : 'main',
            myOrders: 'myorders',
            btnMenuBack: 'myorders [itemId=btnMenuBack]'
        },

        control: {
            btnMenuBack: {
                tap: 'onBackMenu'
            },
            myOrders: {
                afterrender: 'onMyOrdersBoxReady'
            }
        }
    },

    launch: function() {
    },

    onBackMenu: function(){
        this.getMainView().setActiveItem(2);
    },

    onMyOrdersBoxReady: function(){
        var tmpOrder1 = this.getMyOrders().down('itemorder[itemId=order1]');
    }

});