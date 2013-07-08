Ext.define('TestMobile.view.webrequestform.setting.WebFormSetting', {
    extend: 'Ext.Container',
    xtype: 'webformsetting',
    config: {
        scrollable: true
    },

    initialize: function(){
        this.header = this.createHeader();
        this.menuContainer = this.createMenuContainer();
        this.add([
            this.header,
            this.menuContainer
        ]);
        this.callParent(arguments);
    },

    createHeader: function(){
        var tmpHeader = {
            xtype : 'toolbar',
            docked: 'top',
            title: 'Settings',
            items: [
                {
                    xtype: 'button',
                    text: 'Back',
                    itemId: 'btnBack',
                    listeners: {
                        scope: this,
                        tap: function() {
                            this.fireEvent('showListRequest')
                        }
                    }
                },
                {
                    xtype:'spacer'
                },
                {
                    xtype: 'button',
                    text: 'Save',
                    itemId: 'btnSave',
                    listeners: {
                        scope: this,
                        tap: function() {
                            this.fireEvent('save')
                        }
                    }
                }
            ]
        };
        return tmpHeader;
    },

    createMenuContainer: function(){
        var tmpLoginFieldSet = this.createLoginFieldSet();
        var tmpAccessCodeField = this.createAccessCodeField();
        var tmpMenuContainer = {
            xtype: 'container',
            items: [
                tmpLoginFieldSet,
                tmpAccessCodeField
            ]
        };
        return tmpMenuContainer;
    },

    createLoginFieldSet: function(){
        var tmpLoginFieldSet =  {
            xtype: 'fieldset',
            margin: '10 10 10 10',
            items: [
                {
                    xtype: 'textfield',
                    name: 'txtLogin',
                    label: 'Login',
                    value: 'producer@cnn.com'
                },
                {
                    xtype: 'textfield',
                    name: 'txtCode',
                    label: 'Code',
                    value: '0123456'
                },
                {
                    xtype: 'passwordfield',
                    label: 'Password',
                    name: 'txtPassword',
                    value: '12345',
                    placeHolder: 'password'
                },
                {
                    xtype: 'togglefield',
                    itemId: 'tfRememberMe',
                    value: ' asdfasdfa',
                    label: 'Remember me',
                    labelWidth: 130,
                    padding: '5 5 5 0',
                    cls: 'login-remember-me-toggle'
                }
            ]
        };
        return tmpLoginFieldSet;
    },

    createAccessCodeField: function(){
        var tmpAccessCodeField = {
            xtype: 'container',
            padding: '0 10 0 10 0',
            items: [
                {
                    xtype: 'label',
                    padding: '0 0 10 0',
                    html: "Don't have a code?"
                },
                {
                    xtype: 'button',
                    itemId: 'btnRequestAccess',
                    cls: 'show-mgr-button',
                    text: 'Request Access',
                    margin: '0 0 0 0'
                },
                {
                    xtype: 'button',
                    itemId: 'btnForgotPassword',
                    text: 'Forgot Password',
                    cls: 'show-mgr-button',
                    margin: '10 0 0 0'
                }
            ]
        };
        return tmpAccessCodeField;
    }
});