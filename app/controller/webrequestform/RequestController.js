Ext.define('PrototypesMobile.controller.webrequestform.RequestController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            mainView : 'main',
            listRequest : 'listrequest',
            checkList: 'checklist',
            cCheckListBody: 'checklist [itemId=cCheckListBody]',
            requestTypePicker : 'requesttypepicker',
            btnNewRequest : 'listrequest [itemId=btnNewRequest]',
            btnConfiguration : 'listrequest [itemId=btnConfiguration]',
            btnRequestBack: 'newrequestform [itemId=btnRequestBack]',
            btnCheckListBack: 'checklist [itemId=btnCheckListBack]',
            btnSubmit: 'newrequestform [itemId=btnSubmit]',
            btnAdd: 'checklist [itemId=btnAdd]',
            btnCheck: 'requesttype [itemId=btnCheck]',
            requestTypeDetail: 'requesttypedetail',
            btnRequestDetailBack : 'requesttypedetail [itemId=btnRequestDetailBack]',
            btnSave: 'webformsetting [itemId=btnSave]'
        },

        control : {
            btnNewRequest: {
                tap : 'onShowNewRequestForm'
            },
            btnConfiguration: {
                tap : 'onShowConfigurationMenu'
            },
            listRequest: {
                itemtap : 'onItemTap'
            },
            btnRequestBack: {
                tap : 'onShowHomeView'
            },
            btnCheckListBack: {
                tap : 'onShowNewRequestForm'
            },
            btnSubmit: {
                tap : 'onShowCheckListView'
            },
            btnAdd: {
                tap : 'onAddRequestType'
            },
            requestTypePicker: {
                change: 'onRequestTypePicked'
            },
            btnCheck: {
                tap: 'onCheckClicked'
            },
            btnRequestDetailBack: {
                tap: 'onShowCheckListView'
            },
            btnSave: {
                tap : 'onShowHomeView'
            }
        }
    },

    launch: function() {
    },

    onShowConfigurationMenu: function(){
        this.getMainView().setActiveItem(1);
    },

    onItemTap: function(){
        this.getMainView().setActiveItem(2);
    },

    onShowNewRequestForm: function(){
        this.getMainView().setActiveItem(2);
    },

    onShowHomeView: function(){
        this.getMainView().setActiveItem(0);
    },

    onShowCheckListView: function(){
        this.getMainView().setActiveItem(3);
    },

    onAddRequestType: function(){
        Ext.Viewport.add(this.getRequestTypePicker());
        this.getRequestTypePicker().show();
    },

    onRequestTypePicked: function(argComponent, argValue){
        var tmpRequestType = Ext.create('PrototypesMobile.view.webrequestform.RequestType', {});
        var tmpTxtRequestType = tmpRequestType.down('#txtRequestType');
        var tmpBtnCheck = tmpRequestType.down('#btnCheck');
        tmpBtnCheck.setListeners();
        tmpTxtRequestType.setPlaceHolder(argValue.requesttype);
        this.getCCheckListBody().add(tmpRequestType);
        this.getRequestTypePicker().hide();
    },

    onCheckClicked: function(argComponent){
        var tmpTitle = argComponent.parent.down('#txtRequestType').getPlaceHolder();
        var tmpToolBar = this.getRequestTypeDetail().down('#tbRequestTypeDetail');
        tmpToolBar.setTitle(tmpTitle);
        this.getMainView().setActiveItem(4);
    }
});