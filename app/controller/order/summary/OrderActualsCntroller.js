Ext.define('TestMobile.controller.order.summary.OrderActualsCntroller', {

    extend: 'Ext.app.Controller',

    //Will handle the updateTimeMethod
    flatActiveChange: false,

    config: {

        refs: {
            datePickerStartDate : 'orderactuals [itemId=dpStartDate]',
            datePickerStartTime : 'orderactuals [itemId=tpStartTime]',
            datePickerEndTime : 'orderactuals [itemId=tpEndTime]',
            orderDetail: 'orderdetail',
            orderActual: 'orderactuals'
        },

        control: {
            orderactuals: {
                minusDuration: 'onMinusDuration',
                durationChanged: 'onUpdateEndTime',
                addDuration: 'onAddDuration',
                cancelActuals: 'onCancelActuals',
                submitActuals: 'onSubmitActuals'
            },

            datePickerStartDate: {
                change: 'onUpdateEndTime'
            },
            datePickerStartTime: {
                change: 'onUpdateEndTime'
            },
            datePickerEndTime: {
                change: 'updateDurationTime'
            }
        }
    },

    updateDurationTime: function(){
        if(this.flatActiveChange){
            return;
        }
        var tmpDpStartDate = this.getOrderActual().down('#dpStartDate');
        var tmpTpStartTime = this.getOrderActual().down('#tpStartTime');
        var tmpTpEndTime = this.getOrderActual().down('#tpEndTime');
        var tmpDifHours = this.getDateUtil().calculateHoursDuration(tmpDpStartDate.getValue(), tmpDpStartDate.getValue(), tmpTpStartTime.getValue(), tmpTpEndTime.getValue());
        var tmpTxtDuration = this.getOrderActual().down('#txtDuration');
        this.flatActiveChange = true;
        tmpTxtDuration.setValue((tmpDifHours) + ' min(s)');
        this.flatActiveChange = false;
    },

    getDateUtil: function(){
        return TestMobile.ux.util.date.DateUtil;
    },

    onUpdateEndTime: function(){
        if(this.flatActiveChange){
            return;
        };
        var tmpDpStartDate = this.getOrderActual().down('#dpStartDate');
        var tmpTpStartTime = this.getOrderActual().down('#tpStartTime');
        var tmpTpEndTime = this.getOrderActual().down('#tpEndTime');
        var tmpTxtDuration = this.getOrderActual().down('#txtDuration');
        var tmpNewEndDate = this.getDateUtil().calculateEndDate(tmpDpStartDate.getValue(), tmpTpStartTime.getValue(), tmpTxtDuration.getValue());
        this.flatActiveChange = true;
        tmpTpEndTime.setValue(tmpNewEndDate);
        this.flatActiveChange = false;
    },

    onMinusDuration: function(){
        var tmpDuration = this.getOrderActual().down('#txtDuration');
        var tmpArrayValues = tmpDuration.getValue().split(" ", 2);
        var tmpNewValue = (parseInt(tmpArrayValues[0]) - 15) + " " + tmpArrayValues[1];
        tmpDuration.setValue(tmpNewValue);
    },

    onAddDuration: function(){
        var tmpDuration = this.getOrderActual().down('#txtDuration');
        var tmpArrayValues = tmpDuration.getValue().split(" ", 2);
        var tmpNewValue = (parseInt(tmpArrayValues[0]) + 15) + " " + tmpArrayValues[1];
        tmpDuration.setValue(tmpNewValue);
    },

    closeActualsPanel: function(){
        var tmpActualssPanel = this.getOrderActual().down('#pActualsForm');
        tmpActualssPanel.setHidden(true);
    },

    onSubmitActuals: function(){
        this.closeActualsPanel();
    },

    onCancelActuals: function(){
        this.closeActualsPanel();
    }
});