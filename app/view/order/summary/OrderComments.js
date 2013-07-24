Ext.define('TestMobile.view.order.summary.OrderComments', {

    extend: 'Ext.List',
    xtype: 'ordercomments',
    config: {
        fullscreen: true,
        itemTpl: '<div style="color: #d3d3d3">{user} <strong style="float: right">{date}</strong></div>' +
            '<div><img src={image} height="42" width="42" style="float: left"> <strong>{comment}</strong></div>',
        store: Ext.create('Ext.data.Store', {

            fields: ['user', 'date', 'comment', 'image'],

            data: [
                { user: 'Nathan Ayers: ',   date: '12 Feb 3:58PM', comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
                    'sed do eiusmod tempor incididunt ut labore', image: '/resources/icons/Users.png'},
                { user: 'Nathan Ayers: ',   date: '12 Feb 3:58PM', comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
                    'sed do eiusmod tempor incididunt ut labore', image: '/resources/icons/Users.png'},
                { user: 'Nathan Ayers: ',   date: '12 Feb 3:58PM', comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
                    'sed do eiusmod tempor incididunt ut labore', image: '/resources/icons/Users.png'},
                { user: 'Nathan Ayers: ',   date: '12 Feb 3:58PM', comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
                    'sed do eiusmod tempor incididunt ut labore', image: '/resources/icons/Users.png'}

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
