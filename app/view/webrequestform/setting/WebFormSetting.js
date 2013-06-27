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
        var tmpEmailFieldSet = this.createEmailFieldSet();
        var tmpAccessCodeField = this.createAccessCodeField();
        var tmpPassowordFieldSet = this.createPasswordFieldSet();
        var tmpMenuContainer = {
            xtype: 'container',
            items: [
                tmpEmailFieldSet,
                tmpAccessCodeField,
                tmpPassowordFieldSet
            ]
        };
        return tmpMenuContainer;
    },

    createEmailFieldSet: function(){
        var tmpEmailFieldSet =  {
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
        };
        return tmpEmailFieldSet;
    },

    createAccessCodeField: function(){
        var tmpAccessCodeField = {
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
        };
        return tmpAccessCodeField;
    },

    createPasswordFieldSet: function(){
        var tmpPassowordFieldSet = {
            xtype: 'fieldset',
            items: [
                {
                    xtype: 'passwordfield',
                    name: 'txtPassword',
                    placeHolder: 'password'
                }
            ]
        };
        return tmpPassowordFieldSet;
    }
});