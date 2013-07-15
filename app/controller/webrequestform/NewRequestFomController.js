Ext.define('TestMobile.controller.webrequestform.NewRequestFomController', {
    extend: 'Ext.app.Controller',

    //Will handle the updateTimeMethod
    flatActiveChange: false,

    config: {
        refs: {
            datePickerStartDate : 'newrequestform [itemId=dpStartDate]',
            datePickerEndDate : 'newrequestform [itemId=dpEndDate]',
            datePickerStartTime : 'newrequestform [itemId=tpStartTime]',
            datePickerEndTime : 'newrequestform [itemId=tpEndTime]',
            newRequestForm: 'newrequestform',
            listRequest: 'listrequest',
            requestTitle: 'newrequestform [itemId=txtTitle]'
        },
        control : {
            newrequestform: {
                showBack: 'onShowListRequest',
                showNext: 'onShowCheckList',
                cancelProject: 'onShowListRequest',
                durationChanged: 'onUpdateEndTime',
                titleSelected: 'onTitleSelected',
                typeSelected: 'onTypeSelected'
            },
            datePickerStartDate: {
                change: 'updateDurationTime'
            },
            datePickerEndDate: {
                change: 'updateDurationTime'
            },
            datePickerStartTime: {
                change: 'updateDurationTime'
            },
            datePickerEndTime: {
                change: 'updateDurationTime'
            },
            requestTitle: {
                change: 'onUpdateTBTitle'
            }
        }
    },

    onShowListRequest: function(){
        this.getListRequest().deselectAll();
        var tmpMainController = this.getMainController();
        tmpMainController.setRightAnimation();
        tmpMainController.showListRequestView();
    },

    onShowCheckList: function(){
        var tmpMainController = this.getMainController();
        tmpMainController.setLeftAnimation();
        tmpMainController.showCheckListView();
    },

    updateDurationTime: function(){
        if(this.flatActiveChange){
            return;
        }
        var tmpDpStartDate = this.getNewRequestForm().down('#dpStartDate');
        var tmpDpEndDate = this.getNewRequestForm().down('#dpEndDate');
        var tmpTpStartTime = this.getNewRequestForm().down('#tpStartTime');
        var tmpTpEndTime = this.getNewRequestForm().down('#tpEndTime');
        var tmpDifHours = this.getDateUtil().calculateHoursDuration(tmpDpStartDate.getValue(), tmpDpEndDate.getValue(), tmpTpStartTime.getValue(), tmpTpEndTime.getValue());
        var tmpTxtDuration = this.getNewRequestForm().down('#txtDuration');
        this.flatActiveChange = true;
        tmpTxtDuration.setValue(tmpDifHours + ' hrs');
        this.flatActiveChange = false;
    },

    getDateUtil: function(){
        return TestMobile.ux.util.date.DateUtil;
    },

    getMainController: function(){
        return this.getApplication().getController('MainController');
    },

    onUpdateTBTitle: function(){
        var tmpTxtTitle = this.getNewRequestForm().down('#txtTitle');
        var tmpTbRequest = this.getNewRequestForm().down('#tbRequest');
        if(Ext.isEmpty(tmpTxtTitle.getValue())){
            tmpTbRequest.setTitle('New Request');
            return;
        }
        tmpTbRequest.setTitle(tmpTxtTitle.getValue());
    },

    onUpdateEndTime: function(){
        if(this.flatActiveChange){
            return;
        };
        var tmpDpStartDate = this.getNewRequestForm().down('#dpStartDate');
        var tmpDpEndDate = this.getNewRequestForm().down('#dpEndDate');
        var tmpTpStartTime = this.getNewRequestForm().down('#tpStartTime');
        var tmpTpEndTime = this.getNewRequestForm().down('#tpEndTime');
        var tmpTxtDuration = this.getNewRequestForm().down('#txtDuration');
        var tmpNewEndDate = this.getDateUtil().calculateEndDate(tmpDpStartDate.getValue(), tmpTpStartTime.getValue(), tmpTxtDuration.getValue());
        this.flatActiveChange = true;
        tmpDpEndDate.setValue(tmpNewEndDate);
        tmpTpEndTime.setValue(tmpNewEndDate);
        this.flatActiveChange = false;
    },

    onTitleSelected: function(){
        var tmpShowTitle = this.getNewRequestForm().down('#sfShowTitle');
        tmpShowTitle.removeCls('greyHolder');
    },

    onTypeSelected: function(){
        var tmpType = this.getNewRequestForm().down('#sfType');
        tmpType.removeCls('greyHolder');
    }

});