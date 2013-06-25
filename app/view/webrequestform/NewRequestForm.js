Ext.define('PrototypesMobile.view.webrequestform.NewRequestForm', {
   extend: 'Ext.Container',
       xtype: 'newrequestform',
        config: {
            scrollable: true,
            items: [
            {
                xtype : 'toolbar',
                docked: 'top',
                title: 'New Request',
                items: [
                    {
                      xtype: 'button',
                      text: '<< Back',
                      itemId: 'btnRequestBack'
                    },
                    {
                        xtype:'spacer'
                    },
                    {
                        xtype: 'button',
                        text: 'Next >>',
                        itemId: 'btnRequestNext'
                    }
                ]
            },
                {
                    xtype: 'container',
                    padding: '10 10 10 10',
                    items: [
                        {
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
                        },
                        {
                            xtype: 'textfield',
                            name: 'txtTitle',
                            label: 'Title',
                            value: 'Project Title'
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
                        },
                        {
                            xtype: 'button',
                            margin: '10 10 10 10',
                            text: 'Submit'
                        }
                    ]
                }
        ]
    }
});