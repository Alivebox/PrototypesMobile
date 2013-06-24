Ext.define('PrototypesMobile.view.Help', {
    extend: 'Ext.Container',
    xtype: 'help',
    id: 'help',
    fullscreen: true,
    config: {
        scrollable: true,
        cls: 'main-container',
        items: [
            {
                xtype : 'toolbar',
                docked: 'top',
                title: 'Help',
                cls: 'show-mrg-toolbar',
                items: [
                    {
                        xtype: 'button',
                        text: 'Back',
                        cls: 'show-mgr-toolbar-button toolbar-btn',
                        itemId: 'btnHelpBack'
                    }
                ]
            },
            {
                xtype: 'label',
                html: 'Forgot Password?',
                cls: 'show-mgr-label show-mgr-help-label bold-thick'
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
                        html: 'None'
                    },
                    {
                        xtype: 'button',
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
                layout: 'float',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'txtMail',
                        placeHolder: 'username'
                    }
                ]
            },
            {
                xtype: 'label',
                html: 'or',
                cls: 'show-mgr-label or-center'
            },
            {
                xtype: 'fieldset',
                layout: 'float',
                items: [
                    {
                        xtype: 'passwordfield',
                        name: 'txtPassword',
                        placeHolder: 'password'
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Submit',
                cls: 'show-mgr-button'
            },
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
    },

    onBackSelected: function(){
        debugger;
        this.fireEvent('backSelected', this);
    }
});
