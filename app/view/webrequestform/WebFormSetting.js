Ext.define('PrototypesMobile.view.webrequestform.WebFormSetting', {
    extend: 'Ext.Container',
    xtype: 'webformsetting',
    config: {
        scrollable: true,
        items: [
            {
                xtype : 'toolbar',
                docked: 'top',
                title: 'Settings',
                items: [
                    {
                        xtype: 'button',
                        text: 'Back',
                        itemId: 'btnSettingsBack'
                    },
                    {
                        xtype:'spacer'
                    },
                    {
                        xtype: 'button',
                        text: 'Save',
                        itemId: 'btnSave'
                    }
                ]
            },
            {
                xtype: 'container',
                items: [
                    {
                        xtype: 'fieldset',
                        margin: '10 10 10 10',
                        items: [
                            {
                                xtype: 'textfield',
                                name: 'txtEmail',
                                label: 'Email',
                                value: 'producer@cnn.com'
                            },
                            {
                                xtype: 'textfield',
                                name: 'txtEmail',
                                label: 'Code',
                                value: '0123456'
                            }
                        ]
                    },
                    {
                        xtype: 'container',
                        padding: '0 10 0 10 0',
                        items: [
                            {
                                xtype: 'label',
                                padding: '0 0 10 0',
                                html: 'Dont have a code?'
                            },
                            {
                                xtype: 'button',
                                itemId: 'btnRequestAccess',
                                text: 'Request Access'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        items: [
                            {
                                xtype: 'passwordfield',
                                name: 'txtPassword',
                                placeHolder: 'password'
                            }
                        ]
                    }
                ]
            }
        ]
    }
});