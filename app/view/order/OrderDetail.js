Ext.define('PrototypesMobile.view.order.OrderDetail', {
    extend: 'Ext.Container',
    xtype: 'orderdetail',
    config: {
        scrollable: true,
        items: [
            {
                xtype : 'toolbar',
                docked: 'top',
                title: 'Order Name',
                items: [
                    {
                        xtype: 'button',
                        text: 'Menu',
                        itemId: 'btnOrderDetailBack'
                    }
                ]
            },
            {
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
                        text: 'Summary'
                    },
                    {
                        xtype: 'button',
                        text: 'Task'
                    },
                    {
                        xtype: 'button',
                        text: 'Commets'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'textareafield',
                        label: 'Description',
                        name: 'taDescription',
                        readOnly: true,
                        value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
                            'sed do eiusmod tempor incididunt ut labore'
                    },
                    {
                        xtype: 'textfield',
                        name: 'txtTitle',
                        value: 'Order Title',
                        readOnly: true
                    },
                    {
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
                    },
                    {
                        xtype: 'datepickerfield',
                        name: 'date',
                        label: 'Start Date',
                        value: new Date(),
                        picker: {
                            yearFrom: 2010
                        }
                    },
                    {
                        xtype: 'timepickerfield',
                        label: 'Start Time',
                        value: new Date(),
                        name: 'time'
                    },
                    {
                        xtype: 'timepickerfield',
                        label: 'Duration',
                        value: new Date(0, 0, 0, 0, 0, 0, 0),
                        name: 'time'
                    },
                    {
                        xtype: 'datepickerfield',
                        name: 'date',
                        label: 'End Date',
                        value: new Date(),
                        picker: {
                            yearFrom: 2010
                        }
                    },
                    {
                        xtype: 'timepickerfield',
                        label: 'End Time',
                        value: new Date(),
                        name: 'time'
                    }
                ]
            },
            {
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
                        icon: 'resources/icons/Stop.png'
                    },
                    {
                        xtype: 'button',
                        icon: 'resources/icons/Pause.png'
                    },
                    {
                        xtype: 'button',
                        icon: 'resources/icons/Complete.png'
                    }
                ]
            }
        ]
    }
});