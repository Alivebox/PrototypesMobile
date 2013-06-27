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
        var tmpStatusButton = this.createStatusButton();
        var tmpContextInfo = this.createContextInfo();
        var tmpMainContainer = {
            xtype: 'container',
            layout: 'hbox',
            style: 'border-color: gray; border-style: solid;',
            border: 1,
            items: [
                tmpStatusButton,
                tmpContextInfo
            ]
        };
        return tmpMainContainer;
    },

    createStatusButton: function(){
        var tmpStatusButton =  {
            xtype: 'button',
            itemId: 'btnStatus',
            style: 'background: '+ this.status +'; padding-top: 50px',
            width: '5%'
        };
        return tmpStatusButton;
    },


    createContextInfo: function(){
        var tmpNumOrderLabel = this.createNumOrderLabel();
        var tmpOrderNameButton = this.createOrderNameButton();
        var tmpOrderSummaryInfo = this.createOrderSummaryInfo();
        var tmpOrderContentInfo = this.createOrderContentInfo();
        var tmpContextInfo = {
            xtype: 'container',
            items: [
                tmpNumOrderLabel,
                tmpOrderNameButton,
                tmpOrderSummaryInfo,
                tmpOrderContentInfo
            ]
        };
        return tmpContextInfo;
    },

    createNumOrderLabel: function(){
        var tmpNumOrderLabel =  {
            xtype: 'label',
            itemId: 'lblNumOrder',
            html: '100565',
            cls: 'show-mgr-label'
        };
        return tmpNumOrderLabel;
    },

    createOrderNameButton: function(){
        var tmpOrderNameButton = {
            xtype: 'button',
            itemId: 'btnOrderName',
            left: 70,
            top: 10,
            cls: 'transparent-button',
            text: 'Order Name',
            listeners: {
                scope: this,
                tap: function() {
                    this.fireEvent('showOrderDetail')
                }
            }
        };
        return tmpOrderNameButton;
    },

    createOrderSummaryInfo: function(){
        var tmpOrderSummaryInfo = {
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