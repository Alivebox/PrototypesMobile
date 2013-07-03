Ext.define('TestMobile.controller.webrequestform.NewRequestFomController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
          datePickerStartDate : 'newrequestform [itemId=dpStartDate]',
          datePickerEndDate : 'newrequestform [itemId=dpEndDate]',
          datePickerStartTime : 'newrequestform [itemId=tpStartTime]',
          datePickerEndTime : 'newrequestform [itemId=tpEndTime]',
          newRequestForm: 'newrequestform'
        },
        control : {
            newrequestform: {
                showBack: 'onShowListRequest',
                showNext: 'onShowCheckList'
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

    updateDurationTime: function(){
        var tmpDpStartDate = this.getNewRequestForm().down('#dpStartDate');
        var tmpDpEndDate = this.getNewRequestForm().down('#dpEndDate');
        var tmpTpStartTime = this.getNewRequestForm().down('#tpStartTime');
        var tmpTpEndTime = this.getNewRequestForm().down('#tpEndTime');
        var tmpDifHours = this.getTimeController().calculateHoursDuration(tmpDpStartDate.getValue(), tmpDpEndDate.getValue(), tmpTpStartTime.getValue(), tmpTpEndTime.getValue());
        var tmpTxtDuration = this.getNewRequestForm().down('#txtDuration');
        tmpTxtDuration.setValue(tmpDifHours + ' hrs');
    },

    getTimeController: function(){
        return this.getApplication().getController('TestMobile.controller.time.TimeController');
    },

    getMainController: function(){
        return this.getApplication().getController('MainController');
    }

});