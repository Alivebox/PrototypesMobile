Ext.define('TestMobile.controller.webrequestform.NewRequestFomController', {
    extend: 'Ext.app.Controller',

    config: {
        control : {
            newrequestform: {
                showBack: 'onShowListRequest',
                showNext: 'onShowCheckList'
            }
        }
    },

    onShowListRequest: function(){
        var tmpMainController = this.getMainController();
        tmpMainController.showListRequestView();
    },

    onShowCheckList: function(){
        var tmpMainController = this.getMainController();
        tmpMainController.showCheckListView();
    },

    getMainController: function(){
        return this.getApplication().getController('MainController');
    }
});