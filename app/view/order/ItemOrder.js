Ext.define('TestMobile.view.order.ItemOrder', {
    extend: 'Ext.Container',
    xtype: 'itemorder',
    status: 'none',
    config: {
    },

    initialize: function(){
        this.container = this.createContainer();
        this.add([
            this.container
        ]);
        this.callParent(arguments);
    },

    createContainer: function(){
        var tmpContextInfo = this.createContextInfo();
        var tmpMainContainer = {
            xtype: 'container',
            layout: 'hbox',
            cls: 'item-order-border',
            border: 1,
            items: [
                tmpContextInfo
            ]
        };
        return tmpMainContainer;
    },

    createContextInfo: function(){
        var tmpNumOrderLabel = this.createNumOrderLabel();
        var tmpOrderNameButton = this.createOrderNameButton();
        var tmpOrderSummaryInfo = this.createOrderSummaryInfo();
        var tmpOrderContentInfo = this.createOrderContentInfo();
        var tmpContextInfo = {
            xtype: 'container',
            width: '100%',
            items: [
                tmpOrderNameButton,
                tmpNumOrderLabel,
                {
                    xtype: 'container',
                    itemId: 'cOrderDetail',
                    hidden: true,
                    items: [
                        tmpOrderSummaryInfo,
                        tmpOrderContentInfo
                    ]
                }
            ]
        };
        return tmpContextInfo;
    },

    createNumOrderLabel: function(){
        var tmpNumOrderLabel =
        {
            xtype: 'container',
            layout: 'hbox',
            items: [
                {
                    xtype: 'label',
                    itemId: 'lblNumOrder',
                    html: '100565',
                    cls: 'show-mgr-label',
                    margin: '10 0 0 0',
                    left: 0

                },
                {
                    xtype: 'label',
                    itemId: 'lblDate',
                    hidden: true,
                    html: '2 Feb - 3:45pm',
                    cls: 'show-mgr-label',
                    right: 0
                },
                {
                    xtype: 'button',
                    cls: 'transparent-button',
                    width: 0
                }
            ]
        }
        return tmpNumOrderLabel;
    },

    createOrderNameButton: function(){
        var tmpOrderNameButton = {
            xtype: 'container',
            layout: 'hbox',
            items: [
                {
                    xtype: 'button',
                    cls: 'transparent-button',
                    width: 0
                },
                {
                    xtype: 'button',
                    itemId: 'btnArrrow',
                    cls: 'transparent-button',
                    icon: 'resources/icons/arrowRight.png',
                    left: -10,
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('onArrowClicked', this)
                        }
                    }
                },
                {
                    xtype: 'button',
                    itemId: 'btnOrderName',
                    left: 15,
                    top: 2,
                    text: 'Order Name',
                    cls: 'transparent-button',
                    margin: '0 0 0 5',
                    listeners: {
                        scope: this,
                        tap: function() {
                            this.fireEvent('showOrderDetail')
                        }
                    }
                }
            ]
        };
        return tmpOrderNameButton;
    },

    createOrderSummaryInfo: function(){
        var tmpOrderSummaryInfo = {
            xtype: 'container',
            layout: 'hbox',
            items: [
                {
                    xtype: 'button',
                    cls: 'transparent-button',
                    width: 0
                },
                {
                    xtype: 'label',
                    itemdId: 'lblOrderClass',
                    html: 'Order Class',
                    margin: '0 0 0 20',
                    left: 0
                },
                {
                    xtype: 'label',
                    itemId: 'lblAssign',
                    html: 'Assign to Me',
                    margin: '0 10 0 0',
                    right: 0
                }
            ]
        };
        return tmpOrderSummaryInfo;
    },

    createOrderContentInfo: function(){
        var tmpOrderContentInfo =  {
            xtype: 'label',
            itemId: 'lblContent',
            html: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ' +
                'sed do eiusmod tempor incididunt ut labore',
            cls: 'show-mgr-label'
        }
        return tmpOrderContentInfo;
    }

});