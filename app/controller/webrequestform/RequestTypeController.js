Ext.define('TestMobile.controller.webrequestform.RequestTypeController', {

    extend: 'Ext.app.Controller',

    config: {
        refs: {
            requestTypeDetail: 'requesttypedetail',
            newRequestForm: 'newrequestform'
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
        var tmpTitle = argComponent.down('#txtRequestType').getValue();
        var tmpProjectTitle = this.getNewRequestForm().down('#txtTitle').getValue();
        var tmpToolBar = this.getRequestTypeDetail().down('#tbRequestTypeDetail');
        var tmpTxtOrderTitle = this.getRequestTypeDetail().down('#txtOrderTitle');
        tmpTxtOrderTitle.setPlaceHolder(tmpProjectTitle + ' : ' + tmpTitle);
        tmpToolBar.setTitle(tmpTitle);
        this.getRequestTypeDetail().requestType = argComponent;
        this.getMainController().setLeftAnimation();
        this.getMainController().showRequestTypeDetailView();
    },

    getMainController: function(){
        return this.getApplication().getController('MainController');
    }
});