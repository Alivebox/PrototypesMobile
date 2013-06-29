Ext.define('TestMobile.view.login.Login', {

    extend: 'Ext.Container',
    xtype: 'login',

    config: {
        scrollable: true,
        cls: 'main-container'
    },

    initialize: function(){
        this.header = this.createHeader();
        this.loginForm = this.createLoginForm();
        this.add([
            this.header,
            this.loginForm
        ]);
        this.callParent(arguments);
    },

    createHeader: function(){
        var tmpHeader = {
            xtype: 'container',
            items: [
                {
                    xtype: 'container',
                    cls: 'login-header'
                },
                {
                    xtype: 'container',
                    cls: 'login-header-logo'
                }
            ]
        };
        return tmpHeader;
    },

    createLoginForm: function(){
        var tmpLoginPasswordFieldset = this.createLoginPasswordFieldSet();
        var tmpCompanyFieldSet = this.createCompanyFieldSet();
        var tmpRememberMeFieldSet = this.createRememberMeFieldSet();
        var tmpLogInButton = this.createLogInButton();
        var tmpNeedHelpButton = this.createNeedHelpButton();
        var tmpLoginForm = {
            xtype: 'container',
            cls: 'login-form-container',
            items: [
                tmpLoginPasswordFieldset,
                tmpCompanyFieldSet,
                tmpRememberMeFieldSet,
                tmpLogInButton,
                tmpNeedHelpButton
            ]
        };
        return tmpLoginForm;
    },

    createLoginPasswordFieldSet: function(){
        var tmpLoginPasswordFieldSet = {
            xtype: 'fieldset',
            items: [
                {
                    xtype: 'textfield',
                    placeHolder: 'example@mail.com'
                },
                {
                    xtype: 'passwordfield',
                    placeHolder: 'password'
                }
            ]
        };
        return tmpLoginPasswordFieldSet;
    },

    createCompanyFieldSet: function(){
        var tmpCompanyFieldSet = {
            xtype: 'fieldset',
            layout: 'float',
            items: [
                {
                    xtype: 'textfield',
                    placeHolder: 'Company',
                    readOnly: true
                },
                {
                    xtype: 'container',
                    html: 'ShowMgr',
                    cls: 'login-company-label',
                    right: 30,
                    top: 12
                },
                {
                    xtype: 'button',
                    itemId: 'btnCompany',
                    iconAlign: 'right',
                    text: ' ',
                    cls: 'login-company-button transparent-button',
                    right: 0,
                    icon: 'resources/images/forward.png',
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('showCompanies');
                        }
                    }
                }
            ]
        };
        return tmpCompanyFieldSet;
    },

    createRememberMeFieldSet: function(){
        var tmpRememberMeFieldSet = {
            xtype: 'fieldset',
            height: '100%',
            items: [
                {
                    xtype: 'textfield',
                    name: 'txtMail',
                    placeHolder: 'remember me',
                    height: '100%',
                    readOnly: true
                },
                {
                    xtype: 'togglefield',
                    itemId: 'tfRememberMe',
                    value: ' asdfasdfa',
                    padding: '3 10 0 0',
                    top: 0,
                    height: 48,
                    cls: 'login-remember-me-toggle'
                }
            ]
        };
        return tmpRememberMeFieldSet;
    },

    createLogInButton: function(){
        var tmpLogInButton = {
            xtype: 'button',
            text: 'Log In',
            itemId: 'btnLogIn',
            cls: 'show-mgr-button',
            listeners: {
                scope: this,
                tap: function(){
                    this.fireEvent('showMainMenu');
                }
            }
        };
        return tmpLogInButton;
    },

    createNeedHelpButton: function(){
        var tmpNeedHelpButton = {
            xtype: 'button',
            text: 'Need Help?',
            cls: 'login-need-help-button',
            itemId: 'btnLoginHelp',
            listeners: {
                scope: this,
                tap: function(){
                    this.fireEvent('showNeedHelp');
                }
            }
        }
        return tmpNeedHelpButton;
    }

});
