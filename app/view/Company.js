Ext.define('PrototypesMobile.view.Company', {
    extend: 'Ext.List',
    xtype: 'company',
    config: {
        cls: 'main-container',
        style: 'color: white',
        items: [
            {
                xtype : 'toolbar',
                itemId: 'tbMyOrders',
                docked: 'top',
                title: 'Company',
                cls: 'show-mrg-toolbar',
                items: [
                    {
                        xtype: 'button',
                        text: 'Back',
                        cls: 'show-mgr-toolbar-button toolbar-btn',
                        itemId: 'btnCompanyMenuBack'
                    }
                ]
            }
        ],
        scrollable: true,
        store: {
            fields: ['name'],
            data: [
                {name: 'ShowMgr'},
                {name: 'Alivebox'},
                {name: 'Wayne company'}
            ]
        },
        itemTpl: '{name}'
    }
});