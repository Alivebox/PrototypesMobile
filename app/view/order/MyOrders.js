Ext.define('PrototypesMobile.view.order.MyOrders', {
    extend: 'Ext.Container',
    xtype: 'myorders',
    id: 'myorders',
    fullscreen: true,
    config: {
        scrollable: true,
        cls: 'main-container',
        items: [
            {
                xtype : 'toolbar',
                itemId: 'tbMyOrders',
                docked: 'top',
                title: 'My Active Orders',
                cls: 'show-mrg-toolbar',
                items: [
                    {
                        xtype: 'button',
                        text: 'Menu',
                        cls: 'show-mgr-toolbar-button toolbar-btn',
                        itemId: 'btnMenuBack'
                    }
                ]
            },
            {
                xtype: 'itemorder',
                itemId: 'order1'
            },
            {
                xtype: 'itemorder',
                itemId: 'order2'
            },
            {
                xtype: 'itemorder',
                itemId: 'order3'
            }
        ]
    }
});