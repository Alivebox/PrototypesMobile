Ext.define('TestMobile.view.order.OrderDetail', {
    extend: 'Ext.Container',
    xtype: 'orderdetail',
    config: {
        scrollable: true
    },

    initialize: function(){
        this.header = this.createHeader();
        this.container = this.createContainer();
        this.add([
            this.header,
            this.container
        ]);
        this.callParent(arguments);
    },

    createHeader: function() {
        var tmpHeader = {
            xtype : 'toolbar',
            docked: 'top',
            title: 'Order Name',
            items: [
                {
                    xtype: 'button',
                    text: 'Menu',
                    itemId: 'btnMenu',
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('showOrderMenu')
                        }
                    }
                }
            ]
        };
        return tmpHeader;
    },

    createContainer: function(){
        var tmpAccessContainer = this.createAccessContainer();
        var tmpFieldSets = this.createFieldSets();
        var tmpBottomButtons = this.createBottomButtons();
        var tmpContainer = {
            xtype: 'container',
            items: [
                tmpAccessContainer,
                tmpFieldSets,
                tmpBottomButtons
            ]
        };
        return tmpContainer;
    },

    createAccessContainer: function(){
        var tmpAccessContainer = {
            xtype: 'container',
            layout: {
                type: 'hbox',
                pack: 'center'
            },
            defaults: {
                style: 'margin-left: 10px; margin-top: 10px;'
            },
            items: [
                {
                    xtype: 'button',
                    text: 'Summary',
                    listeners: {
                        scope: this,
                        tap: function() {
                            this.fireEvent('showSummary')
                        }
                    }
                },
                {
                    xtype: 'button',
                    text: 'Task',
                    listeners: {
                        scope: this,
                        tap: function() {
                            this.fireEvent('showTask')
                        }
                    }
                },
                {
                    xtype: 'button',
                    text: 'Comments',
                    listeners: {
                        scope: this,
                        tap: function() {
                            this.fireEvent('showComments')
                        }
                    }
                }
            ]
        };
        return tmpAccessContainer;
    },

    createFieldSets: function(){
        var tmpDescriptionTextArea = this.createDescriptionTextArea();
        var tmpOrderTitle = this.createOrderTitleText();
        var tmpTypeSelectField = this.createTypeSelectField();
        var tmpStartDatePickerField = this.createDatePickerField('Start Date', 'dpStartDate');
        var tmpStartTimePickerField = this.createTimePickerField('Start Time', new Date(), 'tpStartTime');
        var tmpEndDatePickerField = this.createDatePickerField('End Date', 'dpEndDate');
        var tmpEndTimePickerField = this.createTimePickerField('End Time', new Date(), 'tpStartTime');
        var tmpDurationTimePickerField = this.createTimePickerField('Duration', new Date(0, 0, 0, 0, 0, 0, 0), 'tpDuration')
        var tmpFieldSets =  {
            xtype: 'fieldset',
            items: [
                tmpDescriptionTextArea,
                tmpOrderTitle,
                tmpTypeSelectField,
                tmpStartDatePickerField,
                tmpStartTimePickerField,
                tmpDurationTimePickerField,
                tmpEndDatePickerField,
                tmpEndTimePickerField
            ]
        };
        return tmpFieldSets;
    },

    createDescriptionTextArea: function(){
        var tmpDescriptionTextArea = {
            xtype: 'textareafield',
            label: 'Description',
            name: 'taDescription',
            readOnly: true,
            value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
                'sed do eiusmod tempor incididunt ut labore'
            };
        return tmpDescriptionTextArea;
    },

    createOrderTitleText: function(){
        var tmpOrderTitle =  {
            xtype: 'textfield',
            name: 'txtTitle',
            value: 'Order Title',
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
            picker: {
                yearFrom: 2010
            }
        };
        return tmpDatePickerField;
    },

    createTimePickerField: function(argLabel, argDate, argItemId){
        var tmpTimePickerField = {
            xtype: 'timepickerfield',
            label: argLabel,
            value: argDate,
            itemId: argItemId,
            name: 'time'
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
    }

});