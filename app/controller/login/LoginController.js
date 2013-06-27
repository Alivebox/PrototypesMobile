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
        tmpMainController.showCompaniesView();
    },

    onShowMainMenu: function(){
        var tmpMainController = this.getMainController();
        tmpMainController.showMainMenuView();
    },

    onShowNeedHelp: function(){
        var tmpMainController = this.getMainController();
        tmpMainController.showHelpView();
    },

    getMainController: function(){
        return this.getApplication().getController('MainController');
    }

});