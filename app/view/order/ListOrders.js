Ext.define('TestMobile.view.order.ListOrders', {
    extend: 'Ext.Container',
    xtype: 'listorders',
    fullscreen: true,
    config: {
        scrollable: true,
        cls: 'main-container'
    },

    initialize: function(){
        this.header = this.createHeader();
        this.container = this.createContainer();
        this.add([
            this.header,
            this.container
        ]);
        this.callParent(arguments);
    },

    createHeader: function(){
        var tmpHeader = {
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
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('showNavigationMenu')
                        }
                    }
                }
            ]
        };
        return tmpHeader;
    },

    createContainer: function(){
        var tmpContainer =  {
            xtype: 'container',
            items: [
                {
                    xtype: 'itemorder'
                },
                {
                    xtype: 'itemorder'
                },
                {
                    xtype: 'itemorder'
                },
                {
                    xtype: 'itemorder'
                },
                {
                    xtype: 'itemorder'
                },
                {
                    xtype: 'itemorder'
                }
            ]
       };
        return tmpContainer;

    }
});