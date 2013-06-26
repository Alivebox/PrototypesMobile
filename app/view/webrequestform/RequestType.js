Ext.define('PrototypesMobile.view.webrequestform.RequestType', {
    extend: 'Ext.Container',
    xtype: 'requesttype',
    config: {
        height: 45,
        items: [
            {
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
                        style: '  border: none; background: none;'
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
            }
        ]
    }
});