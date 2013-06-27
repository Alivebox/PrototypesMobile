Ext.define('TestMobile.view.Main', {

    extend: 'Ext.Container',
    xtype: 'main',

    config: {
        cls: 'main-container',
        layout: 'card'
    },

    initialize: function(){
        this.add([
            {
                xtype: 'login'
            },
            {
                xtype: 'company'
            },
            {
                xtype: 'help'
            },
            {
                xtype: 'navigationmenu'
            },
            {
                xtype: 'mainmenu'
            },
            {
                xtype: 'ordermenu'
            },
            {
                xtype: 'listorders'
            },
            {
                xtype: 'orderdetail'
            },
            {
                xtype: 'checklist'
            },
            {
                xtype: 'listrequest'
            },
            {
                xtype: 'newrequestform'
            },
            {
                xtype: 'requesttypedetail'
            },
            {
                xtype: 'webformsetting'
            },
            {
                xtype: 'theme'
            }
        ]);
        this.callParent(arguments);
    }

});