Ext.define('TestMobile.view.Main', {

    extend: 'Ext.Container',
    xtype: 'main',
    initialize: function(){
        this.add([
            {
                xtype: 'toolbar',
                height: 35,
                minHeight: 35,
                style : {
                    marginLeft : '0%',
                    height:35
                },
                layout:{
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'label',
                        html: '<img src="/resources/icons/showmgr-logo-h352.png" alt="">',
                        left: 0
                    },
                    {
                        xtype: 'label',
                        html: '<img src="/resources/icons/showmgr-logo-h35-text.png" alt="">'
                    },
                    {
                        xtype: 'label',
                        html: '<img src="/resources/icons/cnn-logo-h25.png" alt="">',
                        right: 0,
                        top: 4
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