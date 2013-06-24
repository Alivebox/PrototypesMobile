Ext.define('PrototypesMobile.view.Menu', {
    extend: 'Ext.Container',
    xtype: 'menu',
    id: 'menu',
    fullscreen: true,
    config: {
        scrollable: true,
        cls: 'main-container',
        items: [
            {
                xtype : 'toolbar',
                docked: 'top',
                title: 'Welcome, Nathan',
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
                xtype: 'container',
                defaults: {
                    style: 'margin-top: 10px'
                },
                items: [
                    {
                        xtype: 'button',
                        text: 'Clock Out',
                        cls: 'show-mgr-button'

                    },
                    {
                        xtype: 'container',
                        layout: 'hbox',
                        width: '100%',
                        height: '20%',
                        items: [
                            {
                                xtype: 'container',
                                flex: 1,
                                items: [
                                    {
                                        xtype: 'button',
                                        itemId: 'btnActive',
                                        text: '4',
                                        top: 0,
                                        width: '96%',
                                        style: 'right: 12px',
                                        height: '96px',
                                        cls: 'transparent-button'
                                    },
                                    {
                                        xtype: 'button',
                                        text: 'Active',
                                        height: '96px',
                                        padding: '50 0 0 0',
                                        cls: 'show-mgr-button'
                                    }
                                ]
                            },
                            {
                                xtype: 'container',
                                flex: 1,
                                items: [
                                    {
                                        xtype: 'button',
                                        itemId: 'btnQueue',
                                        text: '8',
                                        top: 0,
                                        width: '100%',
                                        style: 'right: -12px',
                                        height: '96px',
                                        cls: 'transparent-button'
                                    },
                                    {
                                        xtype: 'button',
                                        text: 'Queue',
                                        height: '96px',
                                        padding: '50 0 0 0',
                                        style: 'margin-right: -15px',
                                        cls: 'show-mgr-button'
                                    }
                                ]
                            },
                            {
                                xtype: 'button',
                                height: '96px',
                                style: 'visibility:hidden;'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        text: 'View Order History',
                        cls: 'show-mgr-button'
                    },
                    {
                        xtype: 'button',
                        text: 'View Upcoming Shifts',
                        cls: 'show-mgr-button'
                    },
                    {
                        xtype: 'button',
                        text: 'Request Time Away',
                        cls: 'show-mgr-button'
                    },
                    {
                        xtype: 'button',
                        text: 'Settings',
                        cls: 'show-mgr-button'
                    }

                ]
            }
        ]
    }
});