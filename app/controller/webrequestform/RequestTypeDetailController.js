Ext.define('TestMobile.controller.webrequestform.RequestTypeDetailController', {

    extend: 'Ext.app.Controller',

    config: {
        refs: {
            requestTypeDetail: 'requesttypedetail'
        },
        control : {
            requesttypedetail: {
                showCheckList: 'onShowCheckList',
                save: 'onSaveRequestTypeDetail'
            }
        }
    },

    onShowCheckList: function(){
        var tmpMainController = this.getMainController();
        tmpMainController.showCheckListView();
    },

    onSaveRequestTypeDetail: function(argComponent){
        var tmpLblLocation = this.getRequestTypeDetail().requestType.down('#lblLocation');
        var tmpLocationValue = argComponent.down('#sfLocation');
        tmpLblLocation.setHtml(tmpLocationValue.getValue());
        var tmpBtnCheck = this.getRequestTypeDetail().requestType.down('#btnCheck');
        tmpBtnCheck.setIcon('resources/icons/check.png');
        this.onShowCheckList();
    },

    getMainController: function(){
        return this.getApplication().getController('MainController');
    }
});