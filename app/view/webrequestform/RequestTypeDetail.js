Ext.define('PrototypesMobile.view.webrequestform.RequestTypeDetail', {
   extend: 'Ext.Container',
       xtype: 'requesttypedetail',
        config: {
            scrollable: true,
            items: [
            {
                xtype : 'toolbar',
                itemId: 'tbRequestTypeDetail',
                docked: 'top',
                title: 'New Request',
                items: [
                    {
                      xtype: 'button',
                      text: '<< Back',
                      itemId: 'btnRequestDetailBack'
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
                            name: 'sfLocation',
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
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnSchedule',
                            margin: '10 0 10 0',
                            text: 'View Schedule'
                        },
                        {
                            xtype: 'textfield',
                            name: 'txtTitle',
                            label: 'Title',
                            value: 'Order Title'
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
                            itemId: 'btnSubmit',
                            margin: '10 0 10 0',
                            text: 'Submit'
                        }
                    ]
                }
        ]
    }
});