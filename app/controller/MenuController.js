Ext.define('PrototypesMobile.controller.MenuController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            mainView : 'main',
            btnActive: 'menu [itemId=btnActive]',
            btnQueue: 'menu [itemId=btnQueue]',
            tbMyOrders : 'myorders [itemId=tbMyOrders]'
        },

        control: {
            btnActive: {
                tap: 'onActiveSelected'
            },
            btnQueue: {
                tap: 'onQueueSelected'
            }
        }
    },

    launch: function() {
    },

    onActiveSelected: function(){
        this.getTbMyOrders().setTitle('My Active Orders');
        this.getMainView().setActiveItem(3);
    },

    onQueueSelected: function(){
        this.getTbMyOrders().setTitle('My Orders Queue');
        this.getMainView().setActiveItem(3);
    }

});