Ext.define('TestMobile.view.webrequestform.RequestType', {
    extend: 'Ext.Container',
    xtype: 'requesttype',
    config: {
        height: 45
    },

    initialize: function(){
        this.requestType = this.createRequestType();
        this.add([
            this.requestType
        ]);
        this.callParent(arguments);
    },

    createRequestType: function(){
        var tmpRequestType = {
            xtype: 'fieldset',
                style: 'margin-right: 30px; margin-left: -2px;',
            items: [
            {
                xtype: 'button',
                itemId: 'btnCheck',
                right: -40,
                width: '100%',
                text: ' ',
                iconAlign: 'right',
                cls: 'transparent-button',
                listeners: {
                    scope: this,
                    tap: function(){
                        this.fireEvent('showRequestTypeDetail', this)
                    }
                }
            },
            {
                xtype: 'textfield',
                itemId: 'txtRequestType',
                name: 'txtRequestType',
                placeHolder: '',
                readOnly: 'true'
            },
            {
                xtype: 'label',
                itemId: 'lblLocation',
                right: 10,
                top: 10
            }
        ]
        };
        return tmpRequestType;
    }
});