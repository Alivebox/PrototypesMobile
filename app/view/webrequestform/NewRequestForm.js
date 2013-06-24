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
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    name: 'txtTitle',
                    label: 'Title',
                    text: 'Project Title'
                }
        ]
    }
});