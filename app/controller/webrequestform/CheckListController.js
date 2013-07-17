Ext.define('TestMobile.controller.webrequestform.CheckListController', {

    extend: 'Ext.app.Controller',

    config: {
        refs: {
            cCheckListBody: 'checklist [itemId=cCheckListBody]',
            requestTypePicker : 'requesttypepicker',
            checkList: 'checklist'
        },
        control : {
            checklist: {
                showBack: 'onShowListRequest',
                showRequestTypePicker: 'onShowRequestTypePicker',
                requestTypePicked: 'onRequestTypePicked',
                backToForm: 'onShowWebRequestForm',
                afterrender: 'onCheckListAfterRender'
            }
        }
    },

    onCheckListAfterRender: function(){
    },

    onShowWebRequestForm: function(){
        var tmpMainController = this.getMainController();
        tmpMainController.setRightAnimation();
        tmpMainController.showNewResquestFormView();
    },

    onShowListRequest: function(){
        var tmpMainController = this.getMainController();
        tmpMainController.setRightAnimation();
        tmpMainController.showListRequestView();
    },

    onShowRequestTypePicker: function(){
        Ext.Viewport.add(this.getRequestTypePicker());
        this.getRequestTypePicker().show();
    },

    onRequestTypePicked: function(){
        for(var tmpCont = 0; tmpCont < this.getRequestTypePicker().getValue().quantity; tmpCont++){
            var tmpRequestType = Ext.create('TestMobile.view.webrequestform.RequestType', {});
            var tmpTxtRequestType = tmpRequestType.down('#txtRequestType');
            tmpTxtRequestType.setValue(this.getRequestTypePicker().getValue().requesttype);
            this.getCCheckListBody().add(tmpRequestType);
        }
        this.getRequestTypePicker().hide();
    },

    getMainController: function(){
        return this.getApplication().getController('MainController');
    }
});