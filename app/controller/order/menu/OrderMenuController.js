Ext.define('TestMobile.controller.order.menu.OrderMenuController', {

    extend: 'Ext.app.Controller',

    config: {
        
        refs: {
            mainMenu: 'mainmenu'
        },
        
        control: {
            mainmenu: {
                showActiveOrders: 'onShowActiveOrders',
                showQueueOrders: 'onShowQueueOrders',
                showWebForm: 'onShowWebForm',
                showViewOrderHistory: 'onShowViewOrderHistory',
                showMrgMenu: 'onShowMrgMenu',
                goBack: 'onGoBack',
                goHome: 'onGoHome',
                logOut: 'onLogOut'
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
    },

    onGoHome: function(){
        var tmpMainController = this.getMainController();
        tmpMainController.showMainMenuView();
        var tmpMgrMenu = this.getMainMenu().down('#pMgrMenu');
        tmpMgrMenu.setHidden(true);
    },

    onLogOut: function(){
        var tmpMainController = this.getMainController();
        var tmpMgrMenu = this.getMainMenu().down('#pMgrMenu');
        Ext.Msg.confirm("Logout", "Are you sure you want to Log out?", function(btn){
            if (btn == 'yes'){
                tmpMainController.showLoginView();
                tmpMgrMenu.setHidden(true);
            }
        });
    },

    onGoBack: function(){
        var tmpMgrMenu = this.getMainMenu().down('#pMgrMenu');
        tmpMgrMenu.setHidden(true);
    },
    
    onShowMrgMenu: function(){
        var tmpMgrMenu = this.getMainMenu().down('#pMgrMenu');
        tmpMgrMenu.setHidden(false);
    }
});