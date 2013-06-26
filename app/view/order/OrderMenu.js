Ext.define('PrototypesMobile.view.order.OrderMenu', {
    extend: 'Ext.Container',
    xtype: 'ordermenu',
    fullscreen: true,
    config: {
        scrollable: true,
        cls: 'main-container',
        items: [
            {
                xtype : 'toolbar',
                docked: 'top',
                title: 'Order'
            },
            {
                xtype: 'button',
                text: 'History'
            },
            {
                xtype: 'button',
                text: 'Document'
            },
            {
                xtype: 'button',
                text: 'Print'
            }
        ]
    }
});