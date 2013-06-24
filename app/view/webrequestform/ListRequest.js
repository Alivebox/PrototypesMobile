Ext.define('PrototypesMobile.view.webrequestform.ListRequest', {
    extend: 'Ext.dataview.List',
    xtype: 'listrequest',
    requires: ['PrototypesMobile.store.Requests'],
    config: {
        ui: 'round',
        itemTpl: '<div class="request"><span >{name}</span><span style="float:right">{date}</span></div>',
        store: 'Requests',
        grouped: true,
        emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Request</div>',
        items: [
            {
                xtype : 'toolbar',
                docked: 'top',
                title: 'Home',
                items: [
                    {
                        xtype:'spacer'
                    },
                    {
                        xtype: 'button',
                        icon: 'resources/icons/configuration.png',
                        itemId: 'btnConfiguration'
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'btnNewRequest',
                margin: '10 10 10 10',
                docked: 'top',
                text: 'New Request'
            }
        ]
    }
});