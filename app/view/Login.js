Ext.define('PrototypesMobile.view.Login', {
    extend: 'Ext.Container',
    xtype: 'login',
    id: 'login',
    config: {
        scrollable: true,
        cls: 'main-container',
        items: [
            {
                xtype: 'container',
                items: [
                    {
                        xtype: 'img',
                        src: 'resources/icons/header.png',
                        cls: 'login-show-mgr-logo'
                    },
                    {
                        xtype: 'label',
                        cls: 'login-show-mgr-logo-background'
                    }
                ]
            },
            {
                xtype: 'container',
                cls: 'body-container',
                items: [

                    {
                        xtype: 'fieldset',
                        items: [
                            {
                                xtype: 'textfield',
                                name: 'txtMail',
                                placeHolder: 'example@mail.com'
                            },
                            {
                                xtype: 'passwordfield',
                                name: 'txtPassword',
                                placeHolder: 'password'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        layout: 'float',
                        items: [
                            {
                                xtype: 'textfield',
                                name: 'txtCompany',
                                placeHolder: 'Company',
                                readOnly: true
                            },
                            {
                                xtype: 'label',
                                name: 'lblCompany',
                                item: 'lblCompany',
                                right: 30,
                                top: 12,
                                cls: 'login-company-label',
                                html: 'ShowMgr'
                            },
                            {
                                xtype: 'button',
                                itemId: 'btnCompany',
                                iconAlign: 'right',
                                right: 0,
                                text: ' ',
                                cls: 'login-company-button',
                                icon: 'resources/icons/foward.png'
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        items: [
                            {
                                xtype: 'textfield',
                                name: 'txtMail',
                                placeHolder: 'remember me',
                                readOnly: true
                            },
                            {
                                xtype: 'togglefield',
                                name: 'tfRememberMe',
                                padding: '0 10 0 0',
                                top: 3,
                                cls: 'login-remember-me-toggle'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        text: 'Log In',
                        itemId: 'btnLogIn',
                        cls: 'show-mgr-button'
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Need Help?',
                cls: 'login-need-help-button',
                itemId: 'btnLoginHelp'
            }
        ]
    }
});
