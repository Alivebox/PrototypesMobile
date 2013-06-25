Ext.define('PrototypesMobile.view.webrequestform.CheckList', {
    extend: 'Ext.Container',
    xtype: 'checklist',
    config: {
        scrollable: true,
        items: [
            {
                xtype : 'toolbar',
                docked: 'top',
                title: 'CheckList',
                items: [
                    {
                        xtype: 'button',
                        text: '<< Back',
                        itemId: 'btnCheckListBack'
                    },
                    {
                        xtype:'spacer'
                    },
                    {
                        xtype: 'button',
                        text: 'Next >>',
                        itemId: 'btnCheckListNext'
                    }
                ]
            },
            {
                xtype: 'container',
                itemId: 'cCheckListBody',
                padding: '10 10 10 10',
                items: [
                    {
                        xtype: 'button',
                        margin: '10 0 10 0',
                        text: 'Add',
                        itemId: 'btnAdd',
                        icon: 'resources/icons/add.png',
                        iconAlign: 'right'
                    },
                    {
                        xtype: 'requesttypepicker',
                        hidden: true
                    }
                ]
            }
        ]
    }
});