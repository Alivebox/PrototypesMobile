Ext.define('TestMobile.view.company.Company', {

    extend: 'Ext.List',
    xtype: 'company',

    config: {
        scrollable: true,
        cls: 'main-container',
        store: {
            fields: ['name'],
            data: [
                {name: 'ShowMgr'},
                {name: 'Alivebox'},
                {name: 'Wayne company'}
            ]
        },
        itemTpl: '{name}'
    },

    initialize: function(){
        this.topToolbar = this.createTopToolbar();
        this.add([
            this.topToolbar
        ]);
        this.callParent(arguments);
    },

    createTopToolbar: function(){
        var tmpTopToolbar = {
            xtype : 'toolbar',
            itemId: 'tbMyOrders',
            docked: 'top',
            title: 'Company',
            cls: 'show-mrg-toolbar',
            items: [
                {
                    xtype: 'button',
                    text: 'Back',
                    cls: 'show-mgr-toolbar-button',
                    itemId: 'btnCompanyMenuBack',
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('goBack');
                        }
                    }
                }
            ]
        };
        return tmpTopToolbar;
    }

});