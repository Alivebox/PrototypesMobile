Ext.define('TestMobile.view.order.menu.OrderMenu', {
    extend: 'Ext.Container',
    xtype: 'ordermenu',
    fullscreen: true,
    config: {
        scrollable: true,
        cls: 'main-container'
    },

    initialize: function(){
        this.header = this.createHeader();
        this.menuContainer = this.createMenuContainer();
        this.add([
            this.header,
            this.menuContainer
        ]);
        this.callParent(arguments);
    },

    createHeader: function(){
        var tmpHeader = {
            xtype : 'toolbar',
            docked: 'top',
            title: 'Order 100565'
        };
        return tmpHeader;
    },

    createMenuContainer: function(){
        var tmpHistoryButton = this.createHistoryButton();
        var tmpDocumentsButton = this.createDocumentsButton();
        var tmpPrintButton = this.createPrintButton();
        var tmpContainer = {
            xtype: 'container',
            defaults: {
                margin: '10 10 0 10'
            },
            items: [
                tmpHistoryButton,
                tmpDocumentsButton,
                tmpPrintButton
            ]
        };
        return tmpContainer;
    },

    createHistoryButton: function(){
        var tmpHistoryButton = {
            xtype: 'button',
            text: 'History',
            listeners: {
                scope: this,
                tap: function(){
                    this.fireEvent('showHistory')
                }
            }
        };
        return tmpHistoryButton;
    },

    createDocumentsButton: function(){
        var tmpDocumentsButton = {
            xtype: 'button',
            text: 'Documents',
            listeners: {
                scope: this,
                tap: function(){
                    this.fireEvent('showDocuments')
                }
            }
        };
        return tmpDocumentsButton;
    },

    createPrintButton: function(){
        var tmpPrintButton = {
            xtype: 'button',
            text: 'Print',
            listeners: {
                scope: this,
                tap: function(){
                    this.fireEvent('showPrint')
                }
            }
        };
        return tmpPrintButton;
    }

});