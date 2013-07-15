Ext.define('TestMobile.ux.util.date.DateUtil', {

    statics: {

        timeZoneData: [
            { value : '-12:00,0', text : '(-12:00) International Date Line West'},
            { value : '-11:00,0', data : '(-11:00) Midway Island, Samoa'},
            { value : '-10:00,0', data : '(-10:00) Hawaii'},
            { value : '-09:00,1', data : '(-09:00) Alaska'},
            { value : '-08:00,1', data : '(-08:00) Pacific Time (US & Canada)'},
            { value : '-07:00,0', data : '(-07:00) Arizona'},
            { value : '-07:00,1', data : '(-07:00) Mountain Time (US & Canada)'},
            { value : '-06:00,0', data : '(-06:00) Central America, Saskatchewan'},
            { value : '-06:00,1', data : '(-06:00) Central Time (US & Canada), Guadalajara, Mexico city'},
            { value : '-05:00,0', data : '(-05:00) Indiana, Bogota, Lima, Quito, Rio Branco'},
            { value : '-05:00,1', data : '(-05:00) Eastern time (US & Canada)'},
            { value : '-04:00,1', data : '(-04:00) Atlantic time (Canada), Manaus, Santiago'},
            { value : '-04:00,0', data : '(-04:00) Caracas, La Paz'},
            { value : '-03:30,1', data : '(-03:30) Newfoundland'},
            { value : '-03:00,1', data : '(-03:00) Greenland, Brasilia, Montevideo'},
            { value : '-03:00,0', data : '(-03:00) Buenos Aires, Georgetown'},
            { value : '-02:00,1', data : '(-02:00) Mid-Atlantic'},
            { value : '-01:00,1', data : '(-01:00) Azores'},
            { value : '-01:00,0', data : '(-01:00) Cape Verde Is.'},
            { value : '00:00,0', data : '(00:00) Casablanca, Monrovia, Reykjavik'},
            { value : '00:00,1', data : '(00:00) GMT: Dublin, Edinburgh, Lisbon, London'},
            { value : '+01:00,1', data : '(+01:00) Amsterdam, Berlin, Rome, Vienna, Prague, Brussels'},
            { value : '+01:00,0', data : '(+01:00) West Central Africa'},
            { value : '+02:00,1', data : '(+02:00) Amman, Athens, Istanbul, Beirut, Cairo, Jerusalem'},
            { value : '+02:00,0', data : '(+02:00) Harare, Pretoria'},
            { value : '+03:00,1', data : '(+03:00) Baghdad, Moscow, St. Petersburg, Volgograd'},
            { value : '+03:00,0', data : '(+03:00) Kuwait, Riyadh, Nairobi, Tbilisi'},
            { value : '+03:30,0', data : '(+03:30) Tehran'},
            { value : '+04:00,0', data : '(+04:00) Abu Dhadi, Muscat'},
            { value : '+04:00,1', data : '(+04:00) Baku, Yerevan'},
            { value : '+04:30,0', data : '(+04:30) Kabul'},
            { value : '+05:00,1', data : '(+05:00) Ekaterinburg'},
            { value : '+05:00,0', data : '(+05:00) Islamabad, Karachi, Tashkent'},
            { value : '+05:30,0', data : '(+05:30) Chennai, Kolkata, Mumbai, New Delhi, Sri Jayawardenepura'},
            { value : '+05:45,0', data : '(+05:45) Kathmandu'},
            { value : '+06:00,0', data : '(+06:00) Astana, Dhaka'},
            { value : '+06:00,1', data : '(+06:00) Almaty, Nonosibirsk'},
            { value : '+06:30,0', data : '(+06:30) Yangon (Rangoon)'},
            { value : '+07:00,1', data : 'Krasnoyarsk'},
            { value : '+07:00,0', data : '(+07:00) Bangkok, Hanoi, Jakarta'},
            { value : '+08:00,0', data : '(+08:00) Beijing, Hong Kong, Singapore, Taipei'},
            { value : '+08:00,1', data : '(+08:00) Irkutsk, Ulaan Bataar, Perth'},
            { value : '+09:00,1', data : '(+09:00) Yakutsk'},
            { value : '+09:00,0', data : '(+09:00) Seoul, Osaka, Sapporo, Tokyo'},
            { value : '+09:30,0', data : '(+09:30) Darwin'},
            { value : '+09:30,1', data : '(+09:30) Adelaide'},
            { value : '+10:00,0', data : '(+10:00) Brisbane, Guam, Port Moresby'},
            { value : '+10:00,1', data : '(+10:00) Canberra, Melbourne, Sydney, Hobart, Vladivostok'},
            { value : '+11:00,0', data : '(+11:00) Magadan, Solomon Is., New Caledonia'},
            { value : '+12:00,1', data : '(+12:00) Auckland, Wellington'},
            { value : '+12:00,0', data : '(+12:00) Fiji, Kamchatka, Marshall Is.'},
            { value : '+13:00,0', data : '(+13:00) Nuku alofa'}
        ],

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
        },


        calculateTimeZone: function(){
            var tmpRightNow = new Date();
            var tmpJan1 = new Date(tmpRightNow.getFullYear(), 0, 1, 0, 0, 0, 0);  // jan 1st
            var tmpJune1 = new Date(tmpRightNow.getFullYear(), 6, 1, 0, 0, 0, 0); // june 1st
            var tmpTemporal = tmpJan1.toGMTString();
            var tmpJan2 = new Date(tmpTemporal.substring(0, tmpTemporal.lastIndexOf(" ")-1));
            tmpTemporal = tmpJune1.toGMTString();
            var tmpJune2 = new Date(tmpTemporal.substring(0, tmpTemporal.lastIndexOf(" ")-1));
            var tmpStdTimeOffset = (tmpJan1 - tmpJan2) / (1000 * 60 * 60);
            var tmpDaylightTimeOffset = (tmpJune1 - tmpJune2) / (1000 * 60 * 60);
            var tmpDst;
            if (tmpStdTimeOffset == tmpDaylightTimeOffset) {
                tmpDst = "0"; // daylight savings time is NOT observed
            } else {
                // positive is southern, negative is northern hemisphere
                var hemisphere = tmpStdTimeOffset - tmpDaylightTimeOffset;
                if (hemisphere >= 0)
                    tmpStdTimeOffset = tmpDaylightTimeOffset;
                tmpDst = "1"; // daylight savings time is observed
            }
            var tmpCont;
            // check just to avoid error messages
            if (this.timeZoneData) {
                for (tmpCont = 0; tmpCont < this.timeZoneData.length; tmpCont++) {
                    if (this.timeZoneData[tmpCont].value == this.convert(tmpStdTimeOffset)+","+tmpDst) {
                        return this.timeZoneData[tmpCont];
                        break;
                    }
                }
            }
        },

        convert: function (value){
            var tmpHours = parseInt(value);
            value -= parseInt(value);
            value *= 60;
            var mins = parseInt(value);
            value -= parseInt(value);
            value *= 60;
            var secs = parseInt(value);
            var display_hours = tmpHours;
            // handle GMT case (00:00)
            if (tmpHours == 0) {
                display_hours = "00";
            } else if (tmpHours > 0) {
                // add a plus sign and perhaps an extra 0
                display_hours = (tmpHours < 10) ? "+0"+tmpHours : "+"+tmpHours;
            } else {
                // add an extra 0 if needed
                display_hours = (tmpHours > -10) ? "-0"+Math.abs(tmpHours) : tmpHours;
            }

            mins = (mins < 10) ? "0"+mins : mins;
            return display_hours+":"+mins;
        },

        /**
         * Works for New York, Atlanta and Los Angeles*/
        getNewTimeZoneLocation: function(argDate, argTime, argLocation){
            argDate.setHours(argTime.getHours(), argTime.getMinutes());
            var tmpStartDayLightComparation = new Date(argDate.getFullYear(), 2, 10, 2, 0);
            var tmpEndDayLightComparation = new Date(argDate.getFullYear(), 10, 3, 2, 0);
            var tmpDayLightSavingTime = 0;
            var tmpEasternOffSet = 240;
            var tmpPacificOffSet = 420;
            var tmpMyOffset = argDate.getTimezoneOffset();
            var tmpCompareTimeZone = undefined;
            var tmpCurrentHours = argDate.getHours();
            if(tmpStartDayLightComparation.getTime() < tmpStartDayLightComparation.getTime() && tmpEndDayLightComparation.getTime() > argDate.getTime()){
                tmpDayLightSavingTime = 0;
            }
            if(argLocation === "New York"){
                tmpCompareTimeZone = tmpEasternOffSet;
            }
            if(argLocation === "Atlanta"){
                tmpCompareTimeZone = tmpEasternOffSet;
            }
            if(argLocation === "Los Angeles"){
                tmpCompareTimeZone = tmpPacificOffSet;
            }
            tmpCompareTimeZone = tmpCompareTimeZone + tmpDayLightSavingTime;
            var tmpDifHours = (tmpMyOffset - tmpCompareTimeZone)/60;
            var tmpNewTimeZoneDate = new Date(argDate.getFullYear(), argDate.getMonth(), argDate.getDate(), (argDate.getHours() + tmpDifHours), argDate.getMinutes());
            return tmpNewTimeZoneDate;
        }
    }
});