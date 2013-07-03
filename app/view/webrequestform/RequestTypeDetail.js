Ext.define('TestMobile.view.webrequestform.RequestTypeDetail', {
    extend: 'Ext.Container',
    xtype: 'requesttypedetail',
    requestType: undefined,
    config: {
        scrollable: true
    },

    initialize: function(){
        this.header = this.createHeader();
        this.container = this.createContainer();
        this.saveButton = this.createSaveButton();
        this.add([
            this.header,
            this.container,
            this.saveButton
        ]);
        this.callParent(arguments);
    },

    createHeader: function() {
        var tmpHeader = {
            xtype : 'toolbar',
            itemId: 'tbRequestTypeDetail',
            docked: 'top',
            title: 'New Request',
            items: [
                {
                    xtype: 'button',
                    text: 'Back',
                    itemId: 'btnBack',
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('showCheckList')
                        }
                    }
                }
            ]
        };
        return tmpHeader;
    },

    createContainer: function(){
        var tmpFieldSets = this.createFieldSets();
        var tmpContainer = {
            xtype: 'container',
            items: [
                tmpFieldSets
            ]
        };
        return tmpContainer;
    },

    createFieldSets: function(){
        var tmpLocationSelectField = this.createLocationSelectField();
        var tmpViewScheduleButton = this.createViewScheduleButton()
        var tmpOrderTitle = this.createOrderTitleText();
        var tmpTypeSelectField = this.createTypeSelectField();
        var tmpStartDatePickerField = this.createDatePickerField('Start Date', 'dpStartDate');
        var tmpStartTimePickerField = this.createTimePickerField('Start Time', new Date(), 'tpStartTime', 'H:i T');
        var tmpEndDatePickerField = this.createDatePickerField('End Date', 'dpEndDate');
        var tmpEndTimePickerField = this.createTimePickerField('End Time', new Date(), 'tpEndTime', 'H:i T  ');
        var tmpDurationLabel = this.createDurationTextField();
        var tmpFieldSets =  {
            xtype: 'fieldset',
            items: [
                tmpLocationSelectField,
                tmpViewScheduleButton,
                tmpOrderTitle,
                tmpTypeSelectField,
                tmpStartDatePickerField,
                tmpStartTimePickerField,
                tmpDurationLabel,
                tmpEndDatePickerField,
                tmpEndTimePickerField
            ]
        };
        return tmpFieldSets;
    },

    createLocationSelectField: function(){
        var tmpLocationSelectField =  {
            xtype: 'selectfield',
            name: 'sfLocation',
            itemId: 'sfLocation',
            label: 'Location',
            valueField: 'name',
            displayField: 'name',
            store: {
                data: [
                    { id: '1', name: 'New York'},
                    { id: '2', name: 'Atlanta'},
                    { id: '3', name: 'California'}
                ]
            }
        };
        return tmpLocationSelectField;
    },

    createViewScheduleButton: function(){
        var tmpViewScheduleButton = {
            xtype: 'button',
            itemId: 'btnSchedule',
            margin: '10 10 10 10',
            text: 'View Schedule'
        };
        return tmpViewScheduleButton;
    },

    createOrderTitleText: function(){
        var tmpProjectTitle =  {
            xtype: 'textfield',
            name: 'txtTitle',
            label: 'Order Title',
            value: 'Order Name',
            readOnly: true
        };
        return tmpProjectTitle;
    },

    createTypeSelectField: function(){
        var tmpTypeSelectField = {
            xtype: 'selectfield',
            name: 'sfType',
            label: 'Type',
            valueField: 'name',
            displayField: 'name',
            store: {
                data: [
                    { id: '1', name: 'Pre Tape'},
                    { id: '2', name: 'Tape'},
                    { id: '3', name: 'Post Tape'}
                ]
            }
        };
        return tmpTypeSelectField;
    },

    createDatePickerField: function(argLabel, argItemId){
        var tmpDatePickerField = {
            xtype: 'datepickerfield',
            name: 'date',
            label: argLabel,
            value: new Date(),
            itemId: argItemId,
            dateFormat: 'd M Y',
            picker: {
                yearFrom: 2010
            }
        };
        return tmpDatePickerField;
    },

    createTimePickerField: function(argLabel, argDate, argItemId, argTimeZoneFormat){
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

    createBottomButtons: function(){
        var tmpBottomButtons = {
            xtype: 'container',
            layout: {
                type: 'hbox',
                pack: 'center'
            },
            defaults: {
                style: 'margin-left: 10px; margin-top: 10px;' +
                    'border: none; background: none;'
            },
            items: [
                {
                    xtype: 'button',
                    icon: 'resources/icons/Stop.png',
                    listeners: {
                        scope: this,
                        tap: function() {
                            this.fireEvent('stop')
                        }
                    }
                },
                {
                    xtype: 'button',
                    icon: 'resources/icons/Pause.png',
                    listeners: {
                        scope: this,
                        tap: function() {
                            this.fireEvent('pause')
                        }
                    }
                },
                {
                    xtype: 'button',
                    icon: 'resources/icons/Complete.png',
                    listeners: {
                        scope: this,
                        tap: function() {
                            this.fireEvent('complete')
                        }
                    }
                }
            ]
        };
        return tmpBottomButtons;
    },

    createSaveButton: function(){
        var tmpSaveButton = {
            xtype: 'button',
            itemId: 'btnSave',
            text: 'Save',
            margin: '0 10 0 10',
            listeners: {
                scope: this,
                tap: function(){
                    this.fireEvent('save', this)
                }
            }
        };
        return tmpSaveButton;
    },

    createDurationTextField: function(){
        var tmpDurationTextField = {
            xtype: 'textfield',
            label: 'Duration',
            value: '0 hrs',
            itemId: 'txtDuration',
            readOnly: true
        }
        return tmpDurationTextField;
    }

});