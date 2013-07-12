Ext.define('TestMobile.controller.webrequestform.setting.SettingRequestController', {
    extend: 'Ext.app.Controller',

    config: {
        control : {
            webformsetting: {
                showListRequest: 'onShowListRequest',
                save: 'onShowListRequest'
            }
        }
    },

    onShowListRequest: function(){
        var tmpMainController = this.getMainController();
        tmpMainController.setRightAnimation();
        tmpMainController.showListRequestView();
    },

    getMainController: function(){
        return this.getApplication().getController('MainController');
    }
});