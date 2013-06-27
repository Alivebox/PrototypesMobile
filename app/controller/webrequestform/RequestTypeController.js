Ext.define('TestMobile.controller.webrequestform.RequestTypeController', {

    extend: 'Ext.app.Controller',

    config: {
        refs: {
            requestTypeDetail: 'requesttypedetail'
        },
        control : {
            requesttype: {
                showRequestTypeDetail: 'onShowRequestTypeDetail',
                showRequestTypePicker: 'onShowRequestTypePicker',
                requestTypePicked: 'onRequestTypePicked'
            }
        }
    },

    onShowRequestTypeDetail: function(argComponent){
        var tmpTitle = argComponent.down('#txtRequestType').getPlaceHolder();
        var tmpToolBar = this.getRequestTypeDetail().down('#tbRequestTypeDetail');
        tmpToolBar.setTitle(tmpTitle);
        this.getRequestTypeDetail().requestType = argComponent;
        this.getMainController().showRequestTypeDetailView();
    },

    getMainController: function(){
        return this.getApplication().getController('MainController');
    }
});