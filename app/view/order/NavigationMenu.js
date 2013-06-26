Ext.define('PrototypesMobile.view.order.NavigationMenu', {
    extend: 'Ext.Container',
    xtype: 'navigationmenu',
    fullscreen: true,
    config: {
        scrollable: true,
        cls: 'main-container',
        items: [
            {
                xtype : 'toolbar',
                docked: 'top',
                title: 'Navigation'
            },
            {
                xtype: 'button',
                text: 'Home'
            },
            {
                xtype: 'button',
                text: 'Active Orders'
            },
            {
                xtype: 'button',
                text: 'Queue'
            },
            {
                xtype: 'button',
                text: 'Shifts'
            },
            {
                xtype: 'button',
                text: 'Time Away'
            },
            {
                xtype: 'button',
                text: 'Settings'
            }
        ]
    }
});