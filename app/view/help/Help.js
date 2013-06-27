Ext.define('TestMobile.view.help.Help', {

    extend: 'Ext.Container',
    xtype: 'help',
    fullscreen: true,

    config: {
        scrollable: true,
        cls: 'main-container'
    },

    initialize: function(){
        this.header = this.createHeader();
        this.helpForm = this.createHelpForm();
        this.add([
            this.header,
            this.helpForm
        ]);
        this.callParent(arguments);
    },

    createHeader: function(){
        var tmpHeader = {
            xtype : 'toolbar',
            docked: 'top',
            title: 'Help',
            cls: 'show-mrg-toolbar',
            items: [
                {
                    xtype: 'button',
                    text: 'Back',
                    cls: 'show-mgr-toolbar-button toolbar-btn',
                    itemId: 'btnHelpBack',
                    listeners: {
                        scope: this,
                        tap: function() {
                            this.fireEvent('showLogin')
                        }
                    }
                },
                {
                    xtype: 'spacer'
                },
                {
                    xtype: 'button',
                    text: 'Theme',
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('showThemeOption')
                        }
                    }
                }
            ]
        }
        return tmpHeader;
    },

    createHelpForm: function(){
        var tmpCompanyFieldSet = this.createCompanyFieldSet();
        var tmpForgotPasswordLabel = this.createForgotPasswordLabel();
        var tmpUserNameField = this.createUserNameFieldSet();
        var tmpOrLabel = this.createOrLabel();
        var tmpPasswordField = this.createPasswordFieldSet();
        var tmpSubmitButton = this.createSubmitButton();
        var tmpBottomInfoLabel = this.createBottomInfoLabel();
        var tmpHelpForm = {
            xtype: 'container',
            items: [
                tmpForgotPasswordLabel,
                tmpCompanyFieldSet,
                tmpUserNameField,
                tmpOrLabel,
                tmpPasswordField,
                tmpSubmitButton,
                tmpBottomInfoLabel

            ]
        }
        return tmpHelpForm;
    },

    createCompanyFieldSet: function() {
        var tmpCompanyFieldSet = {
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
                    html: 'None'
                },
                {
                    xtype: 'button',
                    iconAlign: 'right',
                    right: 0,
                    text: ' ',
                    cls: 'login-company-button',
                    icon: 'resources/images/forward.png'
                }
            ]
        };
        return tmpCompanyFieldSet;
    },

    createForgotPasswordLabel: function(){
        var tmpForgotPasswordLabel = {
            xtype: 'label',
            html: 'Forgot Password?',
            cls: 'show-mgr-label show-mgr-help-label bold-thick'
        };
        return tmpForgotPasswordLabel;
    },

    createUserNameFieldSet: function(){
        var tmpUserNameFieldSet = {
            xtype: 'fieldset',
            layout: 'float',
            items: [
                {
                    xtype: 'textfield',
                    name: 'txtMail',
                    placeHolder: 'username'
                }
            ]
        }
        return tmpUserNameFieldSet;
    },

    createOrLabel: function(){
        var tmpOrLabel = {
            xtype: 'label',
            html: 'or',
            cls: 'show-mgr-label or-center'
        };
        return tmpOrLabel;
    },

    createPasswordFieldSet: function() {
        var tmpPasswordFieldSet = {
            xtype: 'fieldset',
            layout: 'float',
            items: [
                {
                    xtype: 'passwordfield',
                    name: 'txtPassword',
                    placeHolder: 'password'
                }
            ]
        };
        return tmpPasswordFieldSet;
    },

    createSubmitButton: function(){
        var tmpSubmitButton = {
            xtype: 'button',
            text: 'Submit',
            cls: 'show-mgr-button'
        };
        return tmpSubmitButton;
    },

    createBottomInfoLabel: function(){
        var tmpBottomInfoLabel = {
            xtype: 'container',
            items: [
                {
                    xtype: 'label',
                    html: 'New User?',
                    cls: 'show-mgr-label show-mgr-help-label bold-thick'
                },
                {
                    xtype: 'label',
                    html: 'To access ShowMgr Mobile, you must have an' +
                        'active and elegible ShowMrg user account.',
                    cls: 'show-mgr-label show-mgr-help-label'
                },
                {
                    xtype: 'label',
                    html: 'Please contact your System Administrator to' +
                        'request credentials',
                    cls: 'show-mgr-label show-mgr-help-label'
                }
            ]
        };
        return tmpBottomInfoLabel;
    }
});
