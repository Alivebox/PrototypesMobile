Ext.define('TestMobile.view.order.summary.OrderForm', {

    extend: 'Ext.Container',
    xtype: 'orderform',

    initialize: function(){
        this.fieldSets = this.createFieldSets();
        this.bottomButtons = this.createBottomButtons();
        this.add([
            this.fieldSets,
            this.bottomButtons
        ]);
        this.callParent(arguments);
    },

    createFieldSets: function(){
        var tmpDescriptionContainer = this.createDescriptionContainer();
        var tmpOrderTitle = this.createOrderTitleText();
        var tmpTypeSelectField = this.createTypeSelectField();
        var tmpStartDatePickerField = this.createDatePickerField('Start Date', 'dpStartDate');
        var tmpStartTimePickerField = this.createTimePickerField('Start Time', new Date(), 'tpStartTime', 'H:i T');
        var tmpEndDatePickerField = this.createDatePickerField('End Date', 'dpEndDate');
        var tmpEndTimePickerField = this.createTimePickerField('End Time', new Date(), 'tpEndTime', 'H:i T');
        var tmpDurationLabel = this.createDurationTextField();
        var tmpFieldSets =  {
            xtype: 'fieldset',
            items: [
                tmpDescriptionContainer,
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

    createDescriptionContainer: function(){
        var tmpDescriptionContainer = {
            xtype: 'container',
            layout: 'vbox',
            padding: '0 0 0 10',
            items: [
                {
                    xtype: 'label',
                    html: 'Description'
                },
                {
                    xtype: 'label',
                    html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
                        'sed do eiusmod tempor incididunt ut labore'
                }
            ]
        };
        return tmpDescriptionContainer;
    },

    createOrderTitleText: function(){
        var tmpOrderTitle =  {
            xtype: 'textfield',
            name: 'txtTitle',
            label: 'Order Title',
            value: 'Order Name',
            readOnly: true
        };
        return tmpOrderTitle;
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
            items: [
                {
                    xtype: 'image',
                    src: 'resources/icons/Button Stop.png',
                    height: 80,
                    width: 80,
                    listeners: {
                        scope: this,
                        tap: function() {
                            this.fireEvent('stop')
                        }
                    }
                },
                {
                    xtype: 'image',
                    src: 'resources/icons/Button Pause.png',
                    height: 80,
                    width: 80,
                    listeners: {
                        scope: this,
                        tap: function() {
                            this.fireEvent('pause')
                        }
                    }
                },
                {
                    xtype: 'image',
                    src: 'resources/icons/Button Check.png',
                    height: 80,
                    width: 80,
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
