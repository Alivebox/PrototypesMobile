Ext.define('TestMobile.view.order.summary.OrderDetail', {
    extend: 'Ext.Container',
    xtype: 'orderdetail',
    config: {
        scrollable: true
    },

    initialize: function(){
        this.header = this.createHeader();
        this.container = this.createContainer();
        this.managerMenu = this.createManagerMenu();
        this.add([
            {
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    pack: 'center'
                },
                items: [
                    {
                        xtype: 'label',
                        html: '100565 - Order Name'
                    }
                ]
            },
            {
                xtype: 'container',
                items: [
                    this.header,
                    this.container,
                    this.managerMenu
                ]
            }

        ]);
        this.callParent(arguments);
    },

    createHeader: function() {
        var tmpHeader = {
            xtype : 'container',
            layout: {
                type: 'hbox',
                pack: 'center'
            },
            defaults: {
                flex: 1,
                border: 3,
                style: 'border-color: black; border-style: solid;'
            },
            height: 40,
            items: [
                {
                    xtype: 'image',
                    src: '/resources/icons/showmgr-logo-h252.png',
                    width: 40,
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('showMrgMenu')
                        }
                    }
                },
                {
                    xtype: 'image',
                    src: '/resources/icons/Book Open.png',
                    width: 40
                },
                {
                    xtype: 'image',
                    src: '/resources/icons/Format Number.png',
                    width: 40
                },
                {
                    xtype: 'image',
                    src: '/resources/icons/Comment Feed.png',
                    width: 40
                },
                {
                    xtype: 'image',
                    src: '/resources/icons/Clock.png',
                    width: 40
                },
                {
                    xtype: 'image',
                    src: '/resources/icons/File New.png',
                    width: 40
                }
            ]
        };
        return tmpHeader;
    },

    createContainer: function(){
        var tmpContainer = {
            xtype: 'container',
            itemId: 'cOrderSummaryView',
            height: '100%',
            items: [
                {
                    xtype: 'orderform'
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
                                    this.fireEvent('hideMgrPanel')
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
                            bottom: 100,
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
                            bottom: 100
                        },
                        {
                            xtype: 'image',
                            src: '/resources/icons/Gears.png',
                            width: 50,
                            height: 50,
                            right: 65,
                            bottom: 100
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