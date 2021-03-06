Ext.define('TestMobile.view.webrequestform.NewRequestForm', {
    extend: 'Ext.Container',
    xtype: 'newrequestform',
    config: {
        scrollable: true
    },

    initialize: function(){
        this.header = this.createHeader();
        this.container = this.createContainer();
        this.durationButtons = this.onCreateDurationButtons();
        this.cancelProject = this.createCancelProjectButton();
        this.add([
            this.header,
            this.container,
            this.cancelProject,
            this.durationButtons
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
        var tmpEndTimePickerField = this.createTimePickerField('End Time', new Date(), 'tpEndTime', 'H:i T');
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
            itemId: 'sfShowTitle',
            label: 'Show Title',
            autoSelect: false,
            valueField: 'name',
            displayField: 'name',
            placeHolder: 'Select a show',
            store: {
                data: [
                    { id: '0', name: ''},
                    { id: '1', name: 'Anderson Cooper 360'},
                    { id: '2', name: 'Nancy Grace'},
                    { id: '3', name: 'Dr. Drew'},
                    { id: '4', name: 'CNN Newsroom'},
                    { id: '5', name: 'Anthony Bourdain Parts Unknown'}
                ]
            },
            listeners: {
                scope: this,
                change: function(){
                    this.fireEvent('titleSelected');
                }
            },
            cls: 'greyHolder'
        };
        return tmpShowTitleSelectField;
    },

    createProjectTitleText: function(){
        var tmpProjectTitle =  {
            xtype: 'textfield',
            itemId: 'txtTitle',
            label: 'Title',
            placeHolder: 'Name your request',
            cls: 'italic-place-holder'
        };
        return tmpProjectTitle;
    },

    createTypeSelectField: function(){
        var tmpTypeSelectField = {
            xtype: 'selectfield',
            itemId: 'sfType',
            label: 'Type',
            valueField: 'name',
            displayField: 'name',
            autoSelect: false,
            placeHolder: 'Select a type',
            store: {
                data: [
                    { id: '0', name: ''},
                    { id: '1', name: 'Pre Tape'},
                    { id: '2', name: 'Tape'},
                    { id: '3', name: 'Post Tape'}
                ]
            },
            listeners: {
                scope: this,
                change: function(){
                    this.fireEvent('typeSelected');
                }
            },
            cls: 'greyHolder'
        };
        return tmpTypeSelectField;
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
            cls: 'margin-all-10 show-mgr-button',
            text: 'Cancel Request',
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
                    top: -225,
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
                    top: -225,
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