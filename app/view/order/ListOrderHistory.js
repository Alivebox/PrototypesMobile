Ext.define('TestMobile.view.order.ListOrderHistory', {

    extend: 'Ext.List',
    xtype: 'listorderhistory',
    config: {
        fullscreen: true,
        itemTpl: '<div style="font:15px">{title}</div>' +
            '<div>{time}<strong>{hour}</strong></div>',
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
                { title: 'CAM - Nathan Ayers',   time: '10:00AM - 2:00PM', hour: '4 HR', date: 'Tuesday 18 June'},
                { title: 'Panasonic 2400 HD',   time: '10:00AM - 2:00PM', hour: '4 HR', date: 'Tuesday 18 June'},
                { title: 'HD Tape Stock',   time: '10:00AM - 2:00PM', hour: '2 EA', date: 'Tuesday 18 June'},
                { title: 'CAM - Nathan Ayers',   time: '10:00AM - 2:00PM', hour: '4 HR', date: 'Monday 17 June'},
                { title: 'Panasonic 2400 HD',   time: '10:00AM - 2:00PM', hour: '4 HR', date: 'Monday 17 June'},
                { title: 'HD Tape Stock',   time: '10:00AM - 2:00PM', hour: '1 EA', date: 'Monday 17 June'}
            ]
        })
    },

    initialize: function(){
        this.commentsForm = this.createCommentsForm();
        this.add([
            this.commentsForm
        ]);
        this.callParent(arguments);
    },

    createCommentsForm: function(){
        var tmpCommentsForm = {
            xtype: 'panel',
            itemId: 'pCommentsForm',
            width: '100%',
            height: 300,
            top: 100,
            hidden: true,
            modal: true,
            items: [
                {
                    xtype: 'toolbar',
                    docked: 'top',
                    title: 'Add comment to order 100565',
                    cls: 'white-tool-bar',
                    layout: {
                        type: 'hbox',
                        pack: 'center'
                    }
                },
                {
                    xype: 'fieldset',
                    items: [
                        {
                            xtype: 'textareafield',
                            itemId: 'taComment',
                            label: 'Comment',
                            height: 200
                        }
                    ]
                },
                {
                    xtype: 'toolbar',
                    docked: 'bottom',
                    cls: 'white-tool-bar',
                    layout: {
                        type: 'hbox',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'button',
                            text: 'Cancel',
                            listeners: {
                                scope: this,
                                tap: function(){
                                    this.fireEvent('cancelComment')
                                }
                            }
                        },
                        {
                            xtype: 'button',
                            text: 'Submit',
                            listeners: {
                                scope: this,
                                tap: function(){
                                    this.fireEvent('submitComment')
                                }
                            }
                        }
                    ]
                }
            ]
        }
        return tmpCommentsForm;
    }

});
