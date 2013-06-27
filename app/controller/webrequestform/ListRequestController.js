Ext.define('TestMobile.controller.webrequestform.ListRequestController', {
    extend: 'Ext.app.Controller',

    config: {
        control : {
            listrequest: {
                showNewRequestForm: 'onShowWebRequestForm',
                showSettings: 'onShowSettings'
            }
        }
    },

    onShowWebRequestForm: function(){
        var tmpMainController = this.getMainController();
        tmpMainController.showNewResquestFormView();
    },

    onShowSettings: function(){
        var tmpMainController = this.getMainController();
        tmpMainController.showWebFormSettingsView();
    },

    getMainController: function(){
        return this.getApplication().getController('MainController');
    }
});