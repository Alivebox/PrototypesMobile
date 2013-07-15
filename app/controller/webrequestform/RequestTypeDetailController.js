Ext.define('TestMobile.controller.webrequestform.RequestTypeDetailController', {

    extend: 'Ext.app.Controller',

    //Will handle the updateTimeMethod
    flatActiveChange: false,

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
                locationSelected: 'onLocationSelected',
                durationChanged: 'onUpdateEndTime',
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
            }
        }
    },

    onShowCheckList: function(){
        var tmpMainController = this.getMainController();
        tmpMainController.setRightAnimation();
        tmpMainController.showCheckListView();
    },

    onSubmitRequestTypeDetail: function(argComponent){
        var tmpLblLocation = this.getRequestTypeDetail().requestType.down('#lblLocation');
        var tmpLocationValue = argComponent.down('#sfLocation');
        tmpLblLocation.setHtml(tmpLocationValue.getValue());
        tmpLblLocation.removeCls('italic-lightGrey');
        var tmpImgCheck = this.getRequestTypeDetail().requestType.down('#imgCheck');
        var tmpLblRequested = this.getRequestTypeDetail().requestType.down('#lblRequested');
        this.getRequestTypeDetail().requestType.setHeight(65);
        tmpLblRequested.setHtml('Requested');
        tmpLblRequested.setHeight(23);
        tmpImgCheck.setSrc('resources/icons/check.png');
        this.onShowCheckList();
    },

    updateDurationTime: function(){
        if(this.flatActiveChange){
            return;
        }
        var tmpDpStartDate = this.getRequestTypeDetail().down('#dpStartDate');
        var tmpDpEndDate = this.getRequestTypeDetail().down('#dpEndDate');
        var tmpTpStartTime = this.getRequestTypeDetail().down('#tpStartTime');
        var tmpTpEndTime = this.getRequestTypeDetail().down('#tpEndTime');
        var tmpDifHours = this.getDateUtil().calculateHoursDuration(tmpDpStartDate.getValue(), tmpDpEndDate.getValue(), tmpTpStartTime.getValue(), tmpTpEndTime.getValue());
        var tmpTxtDuration = this.getRequestTypeDetail().down('#txtDuration');
        this.flatActiveChange = true;
        tmpTxtDuration.setValue(tmpDifHours + ' hrs');
        this.flatActiveChange = false;
        this.updateTimeZone();
    },

    getDateUtil: function(){
        return TestMobile.ux.util.date.DateUtil;
    },

    getMainController: function(){
        return this.getApplication().getController('MainController');
    },

    onLocationSelected: function(){
        var tmpLabelLocation = this.getRequestTypeDetail().down('#lblLocation');
        var tmpSfLocation = this.getRequestTypeDetail().down('#sfLocation');
        switch (tmpSfLocation.getValue()) {
            case 'New York':
                tmpLabelLocation.setHtml('ET');
                this.updateTimeZone();
                tmpSfLocation.removeCls('greyHolder');
                return;
            case 'Los Angeles':
                tmpLabelLocation.setHtml('PT');
                this.updateTimeZone();
                tmpSfLocation.removeCls('greyHolder');
                return;
            case 'Atlanta':
                tmpLabelLocation.setHtml('ET');
                this.updateTimeZone();
                tmpSfLocation.removeCls('greyHolder');
                return;
            default :
                tmpLabelLocation.setHtml('');
        }
    },

    onUpdateEndTime: function(){
        if(this.flatActiveChange){
            return;
        };
        var tmpDpStartDate = this.getRequestTypeDetail().down('#dpStartDate');
        var tmpDpEndDate = this.getRequestTypeDetail().down('#dpEndDate');
        var tmpTpStartTime = this.getRequestTypeDetail().down('#tpStartTime');
        var tmpTpEndTime = this.getRequestTypeDetail().down('#tpEndTime');
        var tmpTxtDuration = this.getRequestTypeDetail().down('#txtDuration');
        var tmpNewEndDate = this.getDateUtil().calculateEndDate(tmpDpStartDate.getValue(), tmpTpStartTime.getValue(), tmpTxtDuration.getValue());
        this.flatActiveChange = true;
        tmpDpEndDate.setValue(tmpNewEndDate);
        tmpTpEndTime.setValue(tmpNewEndDate);
        this.flatActiveChange = false;
        this.updateTimeZone();
    },

    updateTimeZone: function(){
        var tmpLabelLocation = this.getRequestTypeDetail().down('#lblLocation');
        if(tmpLabelLocation.getHtml() === ''){
            return;
        }
        var tmpEndTime = this.getRequestTypeDetail().down('#lblEndTime');
        var tmpStartTime = this.getRequestTypeDetail().down('#lblStartTime');
        var tmpDpStartDate = this.getRequestTypeDetail().down('#dpStartDate');
        var tmpDpEndDate = this.getRequestTypeDetail().down('#dpEndDate');
        var tmpTpStartTime = this.getRequestTypeDetail().down('#tpStartTime');
        var tmpTpEndTime = this.getRequestTypeDetail().down('#tpEndTime');
        var tmpNewStartTimeZone = this.getDateUtil().getNewTimeZoneLocation(tmpDpStartDate.getValue(), tmpTpStartTime.getValue(), tmpLabelLocation.getHtml());
        var tmpNewStartTimeZoneString = Ext.util.Format.date(tmpNewStartTimeZone, 'H:i ');
        tmpNewStartTimeZoneString = tmpNewStartTimeZoneString + tmpLabelLocation.getHtml();
        tmpStartTime.setHtml(tmpNewStartTimeZoneString);
        var tmpNewEndTimeZone = this.getDateUtil().getNewTimeZoneLocation(tmpDpEndDate.getValue(), tmpTpEndTime.getValue(), tmpLabelLocation.getHtml());
        var tmpNewEndTimeZoneString = Ext.util.Format.date(tmpNewEndTimeZone, 'H:i ');
        tmpNewEndTimeZoneString = tmpNewEndTimeZoneString + tmpLabelLocation.getHtml();
        tmpEndTime.setHtml(tmpNewEndTimeZoneString);
    },

    onTypeSelected: function(){
        var tmpType = this.getRequestTypeDetail().down('#sfType');
        tmpType.removeCls('greyHolder');
    }


});