Ext.define('TestMobile.view.order.summary.OrderDetail', {
    extend: 'Ext.Container',
    xtype: 'orderdetail',
    config: {
        cls: 'main-container'
    },

    initialize: function(){
        this.navigationButton = this.createNavigationButtons();
        this.orderHeaderDetail = this.createOrderHeaderDetail();
        this.orderSummaryContainer = this.createOrderSummaryContainer();
        this.managerMenu = this.createManagerMenu();
        this.bottomToolBar = this.createBottomToolBar();
        this.add([
            this.orderHeaderDetail,
            this.navigationButton,
            this.orderSummaryContainer,
            this.managerMenu,
            this.bottomToolBar
        ]);
        this.callParent(arguments);
    },

    createOrderHeaderDetail: function(){
        var tmpOrderHeaderDetail = {
            xtype: 'container',
            layout: {
                type: 'hbox',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'label',
                    itemId: 'lblOrderHeaderDetail',
                    html: '100565 - Order Name'
                }
            ]
        };
        return tmpOrderHeaderDetail;
    },

    createNavigationButtons: function() {
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
                    width: 40,
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('showSummaryDetail')
                        }
                    }
                },
                {
                    xtype: 'image',
                    src: '/resources/icons/Format Number.png',
                    width: 40,
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('showTask')
                        }
                    }
                },
                {
                    xtype: 'image',
                    src: '/resources/icons/Comment Feed.png',
                    width: 40,
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('showComments')
                        }
                    }
                },
                {
                    xtype: 'image',
                    src: '/resources/icons/Clock.png',
                    width: 40,
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('showActuals')
                        }
                    }
                },
                {
                    xtype: 'image',
                    src: '/resources/icons/File New.png',
                    width: 40,
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('showDocuments')
                        }
                    }
                }
            ]
        };
        return tmpHeader;
    },

    createOrderSummaryContainer: function(){
        var tmpOrderSummaryView = {
            xtype: 'container',
            itemId: 'cOrderSummaryView',
            cls: 'main-container',
            scrollable: true,
            layout: {
                type: 'card'
            },
            width: '100%',
            height: '100%',
            items: [
                {
                    xtype: 'orderform'
                },
                {
                    xtype: 'ordercomments'
                },
                {
                    xtype: 'orderdocuments'
                },
                {
                    xtype: 'ordertasks'
                },
                {
                    xtype: 'orderactuals'
                }
            ]
        };
        return tmpOrderSummaryView;
    },

    createManagerMenu: function(){
        var tmpManagerMenu = {
            xtype: 'panel',
            itemId: 'pMgrMenu',
            left: 0,
            width: 200,
            height: '100%',
            top: 60,
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
                            bottom: 143,
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
                            bottom: 143
                        },
                        {
                            xtype: 'image',
                            src: '/resources/icons/Gears.png',
                            width: 50,
                            height: 50,
                            right: 65,
                            bottom: 143
                        },
                        {
                            xtype: 'image',
                            itemId: 'imgClientLogo',
                            src: '/resources/icons/cnn.png',
                            width: 190,
                            height: 100,
                            bottom: 53,
                            border: 3,
                            style: 'border-color: black; border-style: solid;'
                        }
                    ]
                }
            ]
        }
        return tmpManagerMenu
    },

    createBottomToolBar: function(){
        var tmpBottomToolBar = {
            xtype: 'toolbar',
            itemId: 'tbBottom',
            docked: 'bottom',
            height: 80,
            layout:{
                type: 'hbox'
            },
            hidden: true,
            items: [
                {
                    xtype: 'image',
                    src: '/resources/icons/Button Add.png',
                    height: 50,
                    width: 50,
                    top: 0,
                    style: 'margin-left: 50%; left: -10px',
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('bottomAddTapped')
                        }
                    }
                },
                {
                    xtype: 'image',
                    itemId: 'imgRightArrowHead',
                    src: '/resources/icons/Right-Arrow-Head.png',
                    height: 40,
                    width: 40,
                    top: 0,
                    right: 10
                }
            ]
        };
        return tmpBottomToolBar;
    }

});