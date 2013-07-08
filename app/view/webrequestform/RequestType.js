Ext.define('TestMobile.view.webrequestform.RequestType', {
    extend: 'Ext.Container',
    xtype: 'requesttype',
    config: {
        height: 85
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
            style: 'margin-right: 30px; margin-left: -2px; margin-top: 10px',
            items: [
                {
                    xtype: 'button',
                    itemId: 'btnCheck',
                    right: 0,
                    height: 46,
                    width: '100%',
                    text: ' ',
                    cls: 'transparent-button',
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('showRequestTypeDetail', this)
                        }
                    }
                },
                {
                    xtype: 'img',
                    itemId: 'imgCheck',
                    height: 25,
                    width: 25,
                    top: 10,
                    right: -30
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
                    html: 'Choose',
                    right: 10,
                    top: 13
                },
                {
                    xtype: 'label',
                    html: 'Confirmed',
                    height: 23,
                    padding: '0 0 0 8',
                    style: 'font-weight:bold; color: green;'
                }
            ]
        };
        return tmpRequestType;
    }
});