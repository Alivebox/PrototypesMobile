Ext.define('TestMobile.controller.webrequestform.CheckListController', {

    extend: 'Ext.app.Controller',

    config: {
        refs: {
            cCheckListBody: 'checklist [itemId=cCheckListBody]',
            requestTypePicker : 'requesttypepicker'
        },
        control : {
            checklist: {
                showBack: 'onShowWebRequestForm',
                showRequestTypePicker: 'onShowRequestTypePicker',
                requestTypePicked: 'onRequestTypePicked'
            }
        }
    },

    onShowWebRequestForm: function(){
        var tmpMainController = this.getMainController();
        tmpMainController.showNewResquestFormView();
    },

    onShowRequestTypePicker: function(){
        Ext.Viewport.add(this.getRequestTypePicker());
        this.getRequestTypePicker().show();
    },

    onRequestTypePicked: function(){
        var tmpRequestType = Ext.create('TestMobile.view.webrequestform.RequestType', {});
        var tmpTxtRequestType = tmpRequestType.down('#txtRequestType');
        var tmpBtnCheck = tmpRequestType.down('#btnCheck');
        tmpTxtRequestType.setPlaceHolder(this.getRequestTypePicker().getValue().requesttype);
        this.getCCheckListBody().add(tmpRequestType);
        this.getRequestTypePicker().hide();
    },

    getMainController: function(){
        return this.getApplication().getController('MainController');
    }
});