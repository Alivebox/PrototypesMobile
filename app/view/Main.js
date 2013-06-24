Ext.define('PrototypesMobile.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    id: 'main',
    requires: [
        'Ext.data.Store',
        'Ext.dataview.List',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Password',
        'Ext.field.Toggle',
        'Ext.List',
        'Ext.Label',
        'Ext.Img'
    ],
    config: {
        layout: 'card',
        fullscreen:true,
        items: [
            /*{
                xtype: 'login'
            },
            {
                xtype: 'help'
            },
            {
                xtype: 'menu'
            },
            {
                xtype: 'myorders'
            },
            {
               xtype: 'itemorder'
            },
            {
                xtype: 'company'
            }*/
            {
                xtype: 'listrequest'
            }
        ]
    }
});