Ext.define('TestMobile.controller.webrequestform.ListRequestController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            newRequestForm : 'newrequestform'
        },

        control : {
            listrequest: {
                showNewRequestForm: 'onShowWebRequestForm',
                showSettings: 'onShowSettings',
                select: 'onShowRequestForm'
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

    onShowRequestForm: function(argComponent, argRecord){
        var tmpToolBarRequest = this.getNewRequestForm().down('#tbRequest');
        tmpToolBarRequest.setTitle(argRecord.data.name);
        var tmpMainController = this.getMainController();
        tmpMainController.showNewResquestFormView();
    },

    getMainController: function(){
        return this.getApplication().getController('MainController');
    }
});