Ext.define('TestMobile.view.order.MyWorkHistory', {
    extend: 'Ext.List',
    xtype: 'myworkhistory',
    config: {
        fullscreen: true,
        scrollable: true,
        cls: 'main-container',
        itemTpl: '<div style="font:15px">{title}</div>' +
            '<div>{time}<strong style="float: right">{hour}</strong></div>',
        grouped: true,
        store: Ext.create('Ext.data.Store', {
            sorters: 'date',
            grouper: {
                groupFn: function(record) {
                    return record.get('date');
                }
            },
            fields: ['title', 'time', 'hour', 'date'],

            data: [
                { title: '100565 - Order Name',   time: '10:00AM - 2:00PM', hour: '4 hr', date: 'Tuesday 18 June - 8 hr'},
                { title: '100565 - Order Name',   time: '10:00AM - 2:00PM', hour: '3.5 hr', date: 'Tuesday 18 June - 8 hr'},
                { title: '100565 - Order Name',   time: '10:00AM - 2:00PM', hour: '0.5 hr', date: 'Tuesday 18 June - 8 hr'},
                { title: '100565 - Order Name',   time: '10:00AM - 2:00PM', hour: '3.25 hr', date: 'Monday 17 June - 7.75 hr'},
                { title: '100565 - Order Name',   time: '10:00AM - 2:00PM', hour: '4.5 hr', date: 'Monday 17 June - 7.75 hr'}
            ]
        })
    },

    initialize: function(){
        this.header = this.createHeader();
        this.managerMenu = this.createManagerMenu();
        this.add([
            this.header,
            this.managerMenu
        ]);
        this.callParent(arguments);
    },

    createHeader: function(){
        var tmpHeader = {
            xtype : 'toolbar',
            docked: 'top',
            title: 'My Work History',
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