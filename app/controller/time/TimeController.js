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
    },

    calculateEndDate: function(argStartDate, argStartTime, argDuration){
        if(argStartDate == null || argDuration == null){
            return 0;
        }
        var tmpHours = argDuration.split(" ", 1);
        argStartDate.setHours(argStartTime.getHours(),argStartTime.getMinutes());
        var tmpEndDate = new Date();
        tmpEndDate.setTime(argStartTime.getTime() + (tmpHours[0]*60*60*1000));
        return tmpEndDate;
    }

});