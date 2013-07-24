Ext.define('TestMobile.view.order.MyWorkHistory', {
    extend: 'Ext.Container',
    xtype: 'myworkhistory',
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
            title: 'My Work History'
        };
        return tmpHeader;
    },

    createMenuContainer: function(){
        var tmpOrderList = {
            xtype: 'listorderhistory'
        };
        return tmpOrderList;
    }

});