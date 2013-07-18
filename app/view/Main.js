Ext.define('TestMobile.view.Main', {

    extend: 'Ext.Container',
    xtype: 'main',
    initialize: function(){
        this.add([
            {
                xtype: 'toolbar',
                height: 25,
                minHeight: 25,
                style : {
                    marginLeft : '0%',
                    height:25
                },
                layout:{
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'label',
                        html: '<img src="/resources/icons/showmgr-logo-h252.png" alt="">',
                        left: 0
                    },
                    {
                        xtype: 'label',
                        html: '<img src="/resources/icons/showmgr-logo-h25-text.png" alt="">'
                    },
                    {
                        xtype: 'label',
                        html: '<img src="/resources/icons/cnn-logo-h25.png" alt="">',
                        right: 0
                    }
                ]
            },
            /*{
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
             },*/
            {
                xtype: 'container',
                cls: 'main-container',
                itemId: 'mainContainer',
                layout: {
                    type: 'card',
                    animation: {
                        type: 'slide',
                        direction: 'right'
                    }
                },
                cardSwitchAnimation:'slide',
                items: [
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
                ]
            }
        ]);
        this.callParent(arguments);
    }

});