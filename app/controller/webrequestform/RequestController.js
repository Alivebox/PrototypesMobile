Ext.define('PrototypesMobile.controller.webrequestform.RequestController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            mainView : 'main',
            listRequest : 'listrequest',
            checkList: 'checklist',
            cCheckListBody: 'checklist [itemId=cCheckListBody]',
            btnCheckListSubmit: 'checklist [itemId=btnSubmit]',
            requestTypePicker : 'requesttypepicker',
            btnNewRequest : 'listrequest [itemId=btnNewRequest]',
            btnConfiguration : 'listrequest [itemId=btnConfiguration]',
            btnRequestBack: 'newrequestform [itemId=btnRequestBack]',
            btnCheckListBack: 'checklist [itemId=btnCheckListBack]',
            btnRequestNext: 'newrequestform [itemId=btnRequestNext]',
            btnAdd: 'checklist [itemId=btnAdd]',
            btnCheck: 'requesttype [itemId=btnCheck]',
            requestTypeDetail: 'requesttypedetail',
            btnRequestDetailBack : 'requesttypedetail [itemId=btnRequestDetailBack]',
            btnSave: 'webformsetting [itemId=btnSave]',
            btnSettingsBack: 'webformsetting [itemId=btnSettingsBack]',
            btnRequestTypeSave: 'requesttypedetail [itemId=btnSave]'
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
            btnRequestNext: {
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
            },
            btnSettingsBack: {
                tap: 'onShowHomeView'
            },
            btnRequestTypeSave: {
                tap: 'onRequestTypeSave'
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
        this.getRequestTypeDetail().requestType = argComponent.parent;
        this.getMainView().setActiveItem(4);
    },

    onRequestTypeSave: function(argComponent){
        var tmpLblLocation = this.getRequestTypeDetail().requestType.down('#lblLocation');
        var tmpLocationValue = argComponent.parent.down('#sfLocation');
        tmpLblLocation.setHtml(tmpLocationValue.getValue());
        var tmpBtnCheck = this.getRequestTypeDetail().requestType.down('#btnCheck');
        tmpBtnCheck.setIcon('resources/icons/check.png');
        this.getMainView().setActiveItem(3);

    }
});