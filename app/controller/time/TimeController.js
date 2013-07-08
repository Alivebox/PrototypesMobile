Ext.define('TestMobile.controller.time.TimeController', {

    extend: 'Ext.app.Controller',

    config: {
        control: {
        }
    },

    calculateHoursDuration: function(argStartDate, argEndDate, argStartTime, argEndTime){
        if(argStartDate == null || argEndDate == null){
            return 0;
        }
        argStartDate.setHours(0,0,0,0);
        argEndDate.setHours(0,0,0,0);
        var tmpDif = argEndDate.getTime() - argStartDate.getTime();
        var tmpDifTime = argEndTime.getTime() - argStartTime.getTime();
        var tmpHours = (tmpDif + tmpDifTime) / (1000 * 60 * 60);
        return Math.round(tmpHours);
    }

});