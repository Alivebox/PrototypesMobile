Ext.define('TestMobile.controller.webrequestform.RequestTypeDetailController', {

    extend: 'Ext.app.Controller',

    config: {
        refs: {
            datePickerStartDate : 'requesttypedetail [itemId=dpStartDate]',
            datePickerEndDate : 'requesttypedetail [itemId=dpEndDate]',
            datePickerStartTime : 'requesttypedetail [itemId=tpStartTime]',
            datePickerEndTime : 'requesttypedetail [itemId=tpEndTime]',
            requestTypeDetail: 'requesttypedetail'
        },
        control : {
            requesttypedetail: {
                showCheckList: 'onShowCheckList',
                submit: 'onSubmitRequestTypeDetail',
                locationSelected: 'onLocationSelected'
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

    onShowCheckList: function(){
        var tmpMainController = this.getMainController();
        tmpMainController.showCheckListView();
    },

    onSubmitRequestTypeDetail: function(argComponent){
        var tmpLblLocation = this.getRequestTypeDetail().requestType.down('#lblLocation');
        var tmpLocationValue = argComponent.down('#sfLocation');
        tmpLblLocation.setHtml(tmpLocationValue.getValue());
        var tmpImgCheck = this.getRequestTypeDetail().requestType.down('#imgCheck');
        var tmpLblRequested = this.getRequestTypeDetail().requestType.down('#lblRequested');
        this.getRequestTypeDetail().requestType.setHeight(65);
        tmpLblRequested.setHtml('Requested');
        tmpLblRequested.setHeight(23);
        tmpImgCheck.setSrc('resources/icons/check.png');
        this.onShowCheckList();
    },

    updateDurationTime: function(){
        var tmpDpStartDate = this.getRequestTypeDetail().down('#dpStartDate');
        var tmpDpEndDate = this.getRequestTypeDetail().down('#dpEndDate');
        var tmpTpStartTime = this.getRequestTypeDetail().down('#tpStartTime');
        var tmpTpEndTime = this.getRequestTypeDetail().down('#tpEndTime');
        var tmpDifHours = this.getTimeController().calculateHoursDuration(tmpDpStartDate.getValue(), tmpDpEndDate.getValue(), tmpTpStartTime.getValue(), tmpTpEndTime.getValue());
        var tmpTxtDuration = this.getRequestTypeDetail().down('#txtDuration');
        tmpTxtDuration.setValue(tmpDifHours + ' hrs');
    },

    getTimeController: function(){
        return this.getApplication().getController('TestMobile.controller.time.TimeController');
    },

    getMainController: function(){
        return this.getApplication().getController('MainController');
    },

    onLocationSelected: function(){
        var tmpTxtAvailable = this.getRequestTypeDetail().down('#txtAvailable');
        var tmpSfLocation = this.getRequestTypeDetail().down('#sfLocation');
        switch (tmpSfLocation.getValue()) {
            case 'New York':
                tmpTxtAvailable.setValue('2');
                return;
            case 'Los Angeles':
                tmpTxtAvailable.setValue('0');
                return;
            case 'Atlanta':
                tmpTxtAvailable.setValue('3');
        }
    }
});