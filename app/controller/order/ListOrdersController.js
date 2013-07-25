Ext.define('TestMobile.controller.order.ListOrdersController', {

    extend: 'Ext.app.Controller',

    config: {
        
        refs: {
            listOrders: 'listorders'  
        },
        control: {
            listorders: {
                showMrgMenu: 'onShowMrgMenu',
                goBack: 'onGoBack',
                goHome: 'onGoHome',
                logOut: 'onLogOut'
            }
        }
    },

    getMainController: function(){
        return this.getApplication().getController('MainController');
    },
    
    onLogOut: function(){
        var tmpMainController = this.getMainController();
        var tmpMgrMenu = this.getListOrders().down('#pMgrMenu');
        Ext.Msg.confirm("Logout", "Are you sure you want to Log out?", function(btn){
            if (btn == 'yes'){
                tmpMainController.showLoginView();
                tmpMgrMenu.setHidden(true);
            }
        });
    },

    onGoBack: function(){
        this.onGoHome();
        var tmpMgrMenu = this.getListOrders().down('#pMgrMenu');
        tmpMgrMenu.setHidden(true);
    },

    onShowMrgMenu: function(){
        var tmpMgrMenu = this.getListOrders().down('#pMgrMenu');
        tmpMgrMenu.setHidden(false);
    },

    onGoHome: function(){
        var tmpMainController = this.getMainController();
        tmpMainController.showMainMenuView();
        var tmpMgrMenu = this.getListOrders().down('#pMgrMenu');
        tmpMgrMenu.setHidden(true);
    }
});