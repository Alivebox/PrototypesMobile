Ext.define('PrototypesMobile.view.order.ItemOrder', {
    extend: 'Ext.Container',
    xtype: 'itemorder',
    config: {
        items: [
            {
                xtype: 'container',
                layout: 'hbox',
                style: 'border-color: gray; border-style: solid;',
                border: 1,
                items: [
                    {
                        xtype: 'button',
                        itemId: 'btnStatus',
                        style: 'background: yellow; padding-top: 50px',
                        width: '5%'
                    },
                    {
                        xtype: 'container',
                        items: [
                            {
                                xtype: 'label',
                                itemId: 'lblNumOrder',
                                html: '100565',
                                cls: 'show-mgr-label'
                            },
                            {
                                xtype: 'button',
                                itemId: 'btnOrderName',
                                left: 70,
                                top: 10,
                                cls: 'transparent-button',
                                text: 'Order Name'
                            },
                            {
                                xtype: 'container',
                                layout: 'hbox',
                                items: [
                                    {
                                        xtype: 'label',
                                        itemId: 'lblAssign',
                                        html: 'Assign to Me',
                                        cls: 'show-mgr-label'
                                    },
                                    {
                                        xtype: 'label',
                                        itemId: 'lblDate',
                                        html: '2 Feb - 3:45pm',
                                        cls: 'show-mgr-label'
                                    }
                                ]
                            },
                            {
                                xtype: 'label',
                                itemId: 'lblContent',
                                html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
                                    'sed do eiusmod tempor incididunt ut labore',
                                cls: 'show-mgr-label'
                            }
                        ]
                    }
                ]
            }
        ]
    },

    getBtnStatus: function(){
        return this.down('button[itemId=btnStatus]');
    }
});