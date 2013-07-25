Ext.define('TestMobile.view.order.summary.OrderActuals', {

    extend: 'Ext.List',
    xtype: 'orderactuals',
    config: {
        fullscreen: true,
        itemTpl: '<div style="font:15px">{title}</div>' +
            '<div>{time}<strong>{hour}</strong></div>',
        grouped: true,
        store: Ext.create('Ext.data.Store', {
            sorters: 'date',
            grouper: {
                groupFn: function(record) {
                    return record.get('date');
                }
            },
            fields: ['title', 'time', 'hour', 'date'],

            data: [
                { title: 'CAM - Nathan Ayers',   time: '10:00AM - 2:00PM', hour: '4 HR', date: 'Tuesday 18 June'},
                { title: 'Panasonic 2400 HD',   time: '10:00AM - 2:00PM', hour: '4 HR', date: 'Tuesday 18 June'},
                { title: 'HD Tape Stock',   time: '10:00AM - 2:00PM', hour: '2 EA', date: 'Tuesday 18 June'},
                { title: 'CAM - Nathan Ayers',   time: '10:00AM - 2:00PM', hour: '4 HR', date: 'Monday 17 June'},
                { title: 'Panasonic 2400 HD',   time: '10:00AM - 2:00PM', hour: '4 HR', date: 'Monday 17 June'},
                { title: 'HD Tape Stock',   time: '10:00AM - 2:00PM', hour: '1 EA', date: 'Monday 17 June'}
            ]
        })
    },

    initialize: function(){
        this.actualsForm = this.createActualsForm();
        this.add([
            this.actualsForm
        ]);
        this.callParent(arguments);
    },

    createActualsForm: function(){
        var tmpBottomToolBar = this.createBottomToolBar();
        var tmpFieldSet = this.createFieldSets();
        var tmpHeaderToolBar = this.createHeaderToolBar();
        var tmpDurationButton = this.onCreateDurationButtons();
        var tmpActualsForm = {
            xtype: 'panel',
            itemId: 'pActualsForm',
            width: '100%',
            height: 400,
            top: 50,
            hidden: true,
            modal: true,
            scrollable: true,
            items: [
                tmpHeaderToolBar,
                tmpFieldSet,
                tmpBottomToolBar,
                tmpDurationButton
            ]
        }
        return tmpActualsForm;
    },

    createHeaderToolBar: function() {
        var tmpHeaderToolBar = {
            xtype: 'toolbar',
            docked: 'top',
            title: 'Add Actuals to order 100565',
            cls: 'white-tool-bar',
            layout: {
                type: 'hbox',
                pack: 'center'
            }
        };
        return tmpHeaderToolBar;
    },

    createFieldSets: function(){
        var tmpStartDatePickerField = this.createDatePickerField('Start Date', 'dpStartDate');
        var tmpStartTimePickerField = this.createTimePickerField('Start Time', new Date(), 'tpStartTime', 'H:i T');
        var tmpEndDatePickerField = this.createDatePickerField('End Date', 'dpEndDate');
        var tmpEndTimePickerField = this.createTimePickerField('End Time', new Date(), 'tpEndTime', 'H:i T');
        var tmpDurationLabel = this.createDurationTextField();
        var tmpFieldSets = {
            xtype: 'fieldset',
            items: [
                tmpStartDatePickerField,
                tmpStartTimePickerField,
                tmpDurationLabel,
                tmpEndTimePickerField
            ]
        };
        return tmpFieldSets;
    },

    createDatePickerField: function(argLabel, argItemId){
        var tmpYearFrom = new Date().getFullYear();
        var tmpYearTo = tmpYearFrom + 2;
        var tmpDatePickerField = {
            xtype: 'datepickerfield',
            name: 'date',
            label: argLabel,
            value: new Date(),
            itemId: argItemId,
            picker: {
                yearTo: tmpYearTo,
                yearFrom: tmpYearFrom
            },
            dateFormat: 'd M Y'
        };
        return tmpDatePickerField;
    },

    createTimePickerField: function(argLabel, argDate, argItemId, argTimeZoneFormat){
        argDate.setHours(10,0,0);
        var tmpTimePickerField = {
            xtype: 'timepickerfield',
            label: argLabel,
            value: argDate,
            itemId: argItemId,
            name: 'time',
            dateFormat: argTimeZoneFormat
        };
        return tmpTimePickerField;
    },

    createDurationTextField: function(){
        var tmpDurationTextField = {
            xtype: 'textfield',
            label: 'Duration',
            value: '30 min(s)',
            itemId: 'txtDuration',
            clearIcon : false,
            listeners: {
                scope: this,
                change: function(){
                    this.fireEvent('durationChanged');
                }
            }
        }
        return tmpDurationTextField;
    },

    createBottomToolBar: function() {
        var tmpBottomToolBar = {
            xtype: 'toolbar',
            docked: 'bottom',
            cls: 'white-tool-bar',
            layout: {
                type: 'hbox',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'button',
                    text: 'Cancel',
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('cancelActuals')
                        }
                    }
                },
                {
                    xtype: 'button',
                    text: 'Submit',
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('submitActuals')
                        }
                    }
                }
            ]
        };
        return tmpBottomToolBar;
    },

    onCreateDurationButtons: function(){
        var tmpDurationButtons = {
            xtype: 'container',
            layout: {
                type: 'hbox'
            },
            items: [
                {
                    xtype: 'button',
                    icon: 'resources/icons/minus.png',
                    top: -110,
                    right: 40,
                    height: '30px',
                    width: '30px',
                    padding: '0 10 10 0',
                    cls: 'transparent-button',
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('minusDuration');
                        }
                    }
                },
                {
                    xtype: 'button',
                    icon: 'resources/icons/plus.png',
                    top: -110,
                    right: 10,
                    height: '30px',
                    width: '30px',
                    padding: '0 10 10 0',
                    cls: 'transparent-button',
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('addDuration');
                        }
                    }
                }
            ]
        }
        return tmpDurationButtons;
    }

});
