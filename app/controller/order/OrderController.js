Ext.define('PrototypesMobile.controller.order.OrderController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            mainView : 'main',
            myOrders: 'myorders',
            orderdetail: 'orderdetail',
            btnMenuBack: 'myorders [itemId=btnMenuBack]',
            btnOrderName: 'itemorder [itemId=btnOrderName]',
            btnOrderDetailBack: 'orderdetail [itemId=btnOrderDetailBack]'
        },

        control: {
            btnMenuBack: {
                tap: 'onShowNavigationMenu'
            },
            myOrders: {
                afterrender: 'onMyOrdersBoxReady'
            },
            btnOrderName: {
                tap: 'onShowOrderDetail'
            },
            btnOrderDetailBack: {
                tap: 'onShowOrderMenu'
            }
        }
    },

    launch: function() {
    },

    onShowNavigationMenu: function(){
        this.getMainView().setActiveItem(8);
    },

    onShowOrderMenu: function(){
        this.getMainView().setActiveItem(7);
    },

    onMyOrdersBoxReady: function(){
        var tmpOrder1 = this.getMyOrders().down('itemorder[itemId=order1]');
    },

    onShowOrderDetail: function(){
        this.getMainView().setActiveItem(6);
    }

});