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
                select: 'onSelectedRequest'
            }
        }
    },

    onShowWebRequestForm: function(){
        var tmpTbRequest = this.getNewRequestForm().down('#tbRequest');
        tmpTbRequest.setTitle('New Request');
        var tmpSfShowTitle = this.getNewRequestForm().down('#sfShowTitle');
        tmpSfShowTitle.setValue('');
        var tmpTxtTitle = this.getNewRequestForm().down('#txtTitle');
        tmpTxtTitle.setValue('');
        var tmpSfType = this.getNewRequestForm().down('#sfType');
        tmpSfType.setValue('');
        var tmpDpStartDate = this.getNewRequestForm().down('#dpStartDate');
        tmpDpStartDate.setValue(null);
        var tmpDpEndDate = this.getNewRequestForm().down('#dpEndDate');
        tmpDpEndDate.setValue(null);
        var tmpTpStartTime = this.getNewRequestForm().down('#tpStartTime');
        tmpTpStartTime.setValue(null);
        var tmpTpEndTime = this.getNewRequestForm().down('#tpEndTime');
        tmpTpEndTime.setValue(null);
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
    },

    onSelectedRequest: function(){
        var tmpTbRequest = this.getNewRequestForm().down('#tbRequest');
        tmpTbRequest.setTitle('Project Name');
        var tmpSfShowTitle = this.getNewRequestForm().down('#sfShowTitle');
        tmpSfShowTitle.setValue('Anderson Cooper 360');
        var tmpTxtTitle = this.getNewRequestForm().down('#txtTitle');
        tmpTxtTitle.setValue('Project Name');
        var tmpSfType = this.getNewRequestForm().down('#sfType');
        tmpSfType.setValue('Pre Tape');
        var tmpDpStartDate = this.getNewRequestForm().down('#dpStartDate');
        tmpDpStartDate.setValue(new Date());
        var tmpDpEndDate = this.getNewRequestForm().down('#dpEndDate');
        tmpDpEndDate.setValue(new Date());
        var tmpTpStartTime = this.getNewRequestForm().down('#tpStartTime');
        tmpTpStartTime.setValue(new Date());
        var tmpTpEndTime = this.getNewRequestForm().down('#tpEndTime');
        tmpTpEndTime.setValue(new Date());
        var tmpMainController = this.getMainController();
        tmpMainController.showNewResquestFormView();
   },

    onUpdateTBTitle: function(){
        var tmpTxtTitle = this.getNewRequestForm().down('#txtTitle');
        var tmpTbRequest = this.getNewRequestForm().down('#tbRequest');
        if(Ext.isEmpty(tmpTxtTitle.getValue())){
            tmpTbRequest.setTitle('New Request');
            return;
        }
        tmpTbRequest.setTitle(tmpTxtTitle.getValue());
    }
});