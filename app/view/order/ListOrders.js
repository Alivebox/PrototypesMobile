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
        this.managerMenu = this.createManagerMenu();
        this.add([
            this.header,
            this.container,
            this.managerMenu
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
            layout: 'fit',
            items: [
                {
                    xtype: 'image',
                    src: '/resources/icons/showmgr-logo-h252.png',
                    width: 40,
                    height: 40,
                    left: -5,
                    top: 5,
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('showMrgMenu')
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

    },

    createManagerMenu: function(){
        var tmpManagerMenu = {
            xtype: 'panel',
            itemId: 'pMgrMenu',
            left: 0,
            width: 200,
            height: '100%',
            hidden: true,
            modal: true,
            layout: {
                type: 'fit',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'container',
                    layout: {
                        type: 'hbox',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'image',
                            src: '/resources/icons/Arrow Right 2.png',
                            width: 50,
                            height: 50,
                            left: 0,
                            listeners: {
                                scope: this,
                                tap: function(){
                                    this.fireEvent('goBack')
                                }
                            }
                        },
                        {
                            xtype: 'image',
                            src: '/resources/icons/Home.png',
                            width: 50,
                            height: 50,
                            right: 0,
                            listeners: {
                                scope: this,
                                tap: function(){
                                    this.fireEvent('goHome')
                                }
                            }
                        },
                        {
                            xtype: 'image',
                            src: '/resources/icons/Power.png',
                            width: 50,
                            height: 50,
                            left: 0,
                            bottom: 90,
                            listeners: {
                                scope: this,
                                tap: function(){
                                    this.fireEvent('logOut')
                                }
                            }
                        },
                        {
                            xtype: 'image',
                            src: '/resources/icons/Question 2.png',
                            width: 50,
                            height: 50,
                            right: 0,
                            bottom: 90
                        },
                        {
                            xtype: 'image',
                            src: '/resources/icons/Gears.png',
                            width: 50,
                            height: 50,
                            right: 65,
                            bottom: 90
                        },
                        {
                            xtype: 'image',
                            itemId: 'imgClientLogo',
                            src: '/resources/icons/cnn.png',
                            width: 190,
                            height: 100,
                            bottom: 0,
                            border: 3,
                            style: 'border-color: black; border-style: solid;'
                        }
                    ]
                }
            ]
        }
        return tmpManagerMenu
    }
});