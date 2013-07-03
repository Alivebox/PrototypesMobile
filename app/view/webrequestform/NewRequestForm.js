Ext.define('TestMobile.view.webrequestform.NewRequestForm', {
    extend: 'Ext.Container',
    xtype: 'newrequestform',
    config: {
        scrollable: true
    },

    initialize: function(){
        this.header = this.createHeader();
        this.container = this.createContainer();
        this.cancelProject = this.createCancelProjectButton();
        this.add([
            this.header,
            this.container,
            this.cancelProject
        ]);
        this.callParent(arguments);
    },

    createHeader: function() {
        var tmpHeader = {
            xtype : 'toolbar',
            itemId: 'tbRequest',
            docked: 'top',
            title: 'New Request',
            items: [
                {
                    xtype: 'button',
                    text: 'Back',
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('showBack')
                        }
                    }
                },
                {
                    xtype: 'spacer'
                },
                {
                    xtype: 'button',
                    text: 'Next',
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('showNext')
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
        var tmpShowTitleSelectField = this.createShowTitleSelectField();
        var tmpProjectTitle = this.createProjectTitleText();
        var tmpTypeSelectField = this.createTypeSelectField();
        var tmpStartDatePickerField = this.createDatePickerField('Start Date', 'dpStartDate');
        var tmpStartTimePickerField = this.createTimePickerField('Start Time', new Date(), 'tpStartTime', 'H:i T');
        var tmpEndDatePickerField = this.createDatePickerField('End Date', 'dpEndDate');
        var tmpEndTimePickerField = this.createTimePickerField('End Time', new Date(), 'tpEndTime', 'H:i T  ');
        var tmpDurationLabel = this.createDurationTextField();
        var tmpFieldSets =  {
            xtype: 'fieldset',
            items: [
                tmpShowTitleSelectField,
                tmpProjectTitle,
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

    createShowTitleSelectField: function(){
        var tmpShowTitleSelectField =  {
            xtype: 'selectfield',
            name: 'showTitle',
            label: 'Show Title',
            valueField: 'name',
            displayField: 'name',
            store: {
                data: [
                    { id: '1', name: 'Anderson Cooper 360'},
                    { id: '2', name: 'WeekEnds'},
                    { id: '3', name: 'Special days'}
                ]
            }
        };
        return tmpShowTitleSelectField;
    },

    createProjectTitleText: function(){
        var tmpProjectTitle =  {
            xtype: 'textfield',
            name: 'txtTitle',
            label: 'Project Title',
            value: 'Project Name',
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

    createCancelProjectButton: function(){
        var tmpSubmitButton = {
            xtype: 'button',
            itemId: 'bntCancel',
            cls: 'margin-all-10',
            text: 'Cancel Project',
            listeners: {
                scope: this,
                tap: function(){
                    this.fireEvent('cancelProject')
                }
            }
        };
        return tmpSubmitButton;
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