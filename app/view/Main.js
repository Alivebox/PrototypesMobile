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
                    height:25
                },
                layout:{
                    type: 'fit'
                },
                items: [
                    {
                        xtype: 'image',
                        src: '/resources/icons/showmgr-logo-h252.png',
                        height: 25,
                        margin: '0 0 0 -5',
                        style: 'float: left; width: 25px'
                    },
                    {
                        xtype: 'image',
                        src: '/resources/icons/showmgr-logo-h25-text.png',
                        height: 25,
                        margin: '-30 0 0 0'
                    }/*,
                     {
                     xtype: 'label',
                     html: '<img src="/resources/icons/cnn-logo-h25.png" alt="">',
                     right: 0
                     }*/
                ]
            },
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
                ]
            }
        ]);
        this.callParent(arguments);
    }

});