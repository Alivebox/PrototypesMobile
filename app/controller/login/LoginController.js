Ext.define('TestMobile.controller.login.LoginController', {

    extend: 'Ext.app.Controller',

    config: {
        control: {
            login: {
                showCompanies: 'onShowCompanies',
                showMainMenu: 'onShowMainMenu',
                showNeedHelp: 'onShowNeedHelp'
            }
        }
    },

    onShowCompanies: function(){
        var tmpMainController = this.getMainController();
        tmpMainController.setLeftAnimation();
        tmpMainController.showCompaniesView();
    },

    onShowMainMenu: function(){
        var tmpMainController = this.getMainController();
        tmpMainController.setLeftAnimation();
        tmpMainController.showMainMenuView();
    },

    onShowNeedHelp: function(){
        var tmpMainController = this.getMainController();
        tmpMainController.setLeftAnimation();
        tmpMainController.showHelpView();
    },

    getMainController: function(){
        return this.getApplication().getController('MainController');
    }

});