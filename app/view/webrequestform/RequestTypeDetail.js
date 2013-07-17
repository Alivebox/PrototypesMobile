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
        this.buttonContainer = this.createBottomButtonsContainer();
        this.add([
            this.header,
            this.container,
            this.buttonContainer
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
                },
                {
                    xtype: 'spacer'
                },
                {
                    xtype: 'button',
                    itemId: 'btnSubmit',
                    text: 'Submit',
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('submit', this)
                        }
                    }
                }
            ]
        };
        return tmpHeader;
    },

    createContainer: function(){
        var tmpFieldSets = this.createFieldSets();
        var tmpDurationButtons = this.onCreateDurationButtons();
        var tmpFacilityContainer = this.createFacilityContainer();
        var tmpCheckAvailability = this.createCheckAvailabilityButton();
        var tmpContainer = {
            xtype: 'container',
            items: [
                tmpFieldSets,
                tmpDurationButtons,
                tmpCheckAvailability,
                tmpFacilityContainer
            ]
        };
        return tmpContainer;
    },

    createFieldSets: function(){
        var tmpLocationSelectField = this.createLocationSelectField();
        var tmpLocationAbvLabel = this.createLocationAbvLabel();
        var tmpStartTimeZoneLabel = this.createStartTimeZoneLabel();
        var tmpEndTimeZoneLabel = this.createEndTimeZoneLabel();
        var tmpOrderTitle = this.createOrderTitleText();
        var tmpTypeSelectField = this.createTypeSelectField();
        var tmpStartDatePickerField = this.createDatePickerField('Start Date', 'dpStartDate');
        var tmpStartTimePickerField = this.createTimePickerField('Start Time', new Date(), 'tpStartTime', 'H:i T', 0);
        var tmpEndDatePickerField = this.createDatePickerField('End Date', 'dpEndDate');
        var tmpEndTimePickerField = this.createTimePickerField('End Time', new Date(), 'tpEndTime', 'H:i T', 30);
        var tmpDurationLabel = this.createDurationTextField();
        var tmpFieldSets =  {
            xtype: 'fieldset',
            items: [
                tmpLocationSelectField,
                tmpLocationAbvLabel,
                tmpStartTimeZoneLabel,
                tmpEndTimeZoneLabel,
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
        var tmpLocationSelectField = {
            xtype: 'selectfield',
            name: 'sfLocation',
            itemId: 'sfLocation',
            label: 'Location',
            placeHolder: 'Select a location',
            autoSelect: false,
            valueField: 'name',
            displayField: 'name',
            store: {
                data: [
                    { id: '0', name: ''},
                    { id: '1', name: 'New York'},
                    { id: '2', name: 'Atlanta'},
                    { id: '3', name: 'Los Angeles'}
                ]
            },
            listeners: {
                scope: this,
                change: function(){
                    this.fireEvent('locationSelected');
                }
            },
            cls: 'greyHolder'
        };
        return tmpLocationSelectField;
    },

    createLocationAbvLabel: function(){
        var tmpLocationAbvLabel = {
            xtype: 'label',
            itemId: 'lblLocation',
            html: '',
            right: 40,
            top: 15,
            cls: 'grey-label'
        };
        return tmpLocationAbvLabel;
    },

    createStartTimeZoneLabel: function(){
        var tmpStartTimeZoneLabel = {
            xtype: 'label',
            itemId: 'lblStartTime',
            html: '',
            right: 40,
            top: 200,
            cls: 'grey-label'
        };
        return tmpStartTimeZoneLabel;
    },

    createEndTimeZoneLabel: function(){
        var tmpEndTimeZoneLabel = {
            xtype: 'label',
            itemId: 'lblEndTime',
            html: '',
            right: 40,
            top: 340,
            cls: 'grey-label'
        };
        return tmpEndTimeZoneLabel;
    },

    createOrderTitleText: function(){
        var tmpProjectTitle =  {
            xtype: 'textfield',
            name: 'txtTitle',
            itemId: 'txtOrderTitle',
            label: 'Order Title'
        };
        return tmpProjectTitle;
    },

    createTypeSelectField: function(){
        var tmpTypeSelectField = {
            xtype: 'selectfield',
            name: 'sfType',
            itemId: 'sfType',
            label: 'Type',
            placeHolder: 'Select a type',
            autoSelect: false,
            valueField: 'name',
            displayField: 'name',
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

    createTimePickerField: function(argLabel, argDate, argItemId, argTimeZoneFormat, argMinutes){
        var tmpTime = new Date();
        tmpTime.setHours(10,argMinutes,0);
        var tmpTimePickerField = {
            xtype: 'timepickerfield',
            label: argLabel,
            value: tmpTime,
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

    createCheckAvailabilityButton: function(){
        var tmpCheckAvailabilityButton = {
            xtype: 'button',
            text: 'Check Availability',
            itemId: 'btnCheckAvailable',
            hidden: true,
            margin: '10 10 10 10',
            listeners: {
                scope: this,
                tap: function(){
                    this.fireEvent('checkAvailability')
                }
            }
        };
        return tmpCheckAvailabilityButton;
    },

    createBottomButtonsContainer: function(){
        var tmpCancelButton = this.createCancelButton();
        var tmpBottomButtons = {
            xtype: 'container',
            default: {
                margin: '10 10 10 10',
                width: '100%'
            },
            items: [
                tmpCancelButton
            ]
        }
        return tmpBottomButtons;
    },

    createSubmitButton: function(){
        var tmpSubmitButton = {
            xtype: 'button',
            itemId: 'btnSubmit',
            text: 'Submit',
            listeners: {
                scope: this,
                tap: function(){
                    this.fireEvent('submit', this)
                }
            }
        };
        return tmpSubmitButton;
    },

    createCancelButton: function(){
        var tmpCancelButton = {
            xtype: 'button',
            itemId: 'btnCancel',
            text: 'Cancel order',
            margin: '0 10 0 10',
            listeners: {
                scope: this,
                tap: function(){
                    this.fireEvent('Cancel', this)
                }
            }
        };
        return tmpCancelButton;
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
        };
        return tmpDurationTextField;
    },

    createFacilityContainer : function(){
        var tmpFacility = this.createFacilityLabel();
        var tmpGroupFacility = this.createFacilityRadioField();
        var tmpFacilityContainer =  {
            xtype: 'container',
            itemId: 'cFacility',
            hidden: true,
            padding: '20 0 0 0',
            items: [
                tmpFacility,
                tmpGroupFacility
            ]
        };
        return tmpFacilityContainer;
    },

    createFacilityLabel: function(){
        var tmpFacility = {
            xtype: 'label',
            html: 'Facility',
            style: 'font-weight:bold;',
            margin: '-20 0 0 0'
        }
        return tmpFacility;
    },

    createFacilityRadioField: function(){
        var tmpGroupFacility = {
            xtype: 'fieldset',
            items: [
                {
                    xtype: 'radiofield',
                    name : 'rfFacility',
                    value: 'any',
                    label: 'Any',
                    checked: true
                },
                {
                    xtype: 'radiofield',
                    name : 'rfFacility',
                    value: 'room1',
                    label: 'Room 1'
                },
                {
                    xtype: 'label',
                    html: 'Unavailable',
                    style: 'color:red;',
                    itemId: 'room1',
                    right: 50,
                    top: 60
                },
                {
                    xtype: 'radiofield',
                    name : 'rfFacility',
                    value: 'room2',
                    label: 'Room 2'
                },
                {
                    xtype: 'label',
                    html: 'Available',
                    style: 'color:green;',
                    itemId: 'room2',
                    right: 50,
                    top: 110
                },
                {
                    xtype: 'radiofield',
                    name : 'rfFacility',
                    value: 'room3',
                    label: 'Room 3'
                },
                {
                    xtype: 'label',
                    html: 'Confirmed',
                    style: 'color:blue;',
                    itemId: 'room3',
                    right: 50,
                    top: 155
                },
                {
                    xtype: 'radiofield',
                    name : 'rfFacility',
                    value: 'room4',
                    label: 'Room 4'
                },
                {
                    xtype: 'label',
                    html: 'Unavailable',
                    style: 'color:red;',
                    itemId: 'room4',
                    right: 50,
                    top: 200
                },
                {
                    xtype: 'radiofield',
                    name : 'rfFacility',
                    value: 'room5',
                    label: 'Room 5'
                },
                {
                    xtype: 'label',
                    html: 'Available',
                    style: 'color:green;',
                    itemId: 'room5',
                    right: 50,
                    top: 245
                },

                {
                    xtype: 'radiofield',
                    name : 'rfFacility',
                    value: 'room6',
                    label: 'Room 6'
                },
                {
                    xtype: 'label',
                    html: 'Available',
                    style: 'color:green;',
                    itemId: 'room6',
                    right: 50,
                    top: 290
                }
            ]
        };
        return tmpGroupFacility;
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
                    top: -165,
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
                    top: -165,
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