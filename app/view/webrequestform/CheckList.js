Ext.define('TestMobile.view.webrequestform.CheckList', {
    extend: 'Ext.Container',
    xtype: 'checklist',
    config: {
        scrollable: true
    },

    initialize: function(){
        this.header = this.createHeader();
        this.container = this.createContainer();
        this.backListButton = this.createBackListButton();
        this.add([
            this.header,
            this.container,
            this.backListButton
        ]);
        this.callParent(arguments);
    },

    createHeader: function() {
        var tmpHeader = {
            xtype : 'toolbar',
            docked: 'top',
            title: 'CheckList',
            items: [
                {
                    xtype: 'button',
                    text: 'Back',
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('showBack')
                        }
                    }
                }
            ]
        };
        return tmpHeader;
    },

    createContainer: function(){
        var tmpAddButton = this.createAddButton();
        var tmpContainer = {
            xtype: 'container',
            itemId: 'cCheckListBody',
            cls: 'padding-all-10',
            items: [
                tmpAddButton,
                {
                    xtype: 'requesttypepicker',
                    hidden: true,
                    listeners: {
                        scope: this,
                        change: function(){
                            this.fireEvent('requestTypePicked')
                        }
                    }
                }
            ]
        };
        return tmpContainer;
    },

    createAddButton: function(){
        var tmpAddButton = {
            xtype: 'button',
            margin: '10 0 10 0',
            text: 'Add',
            itemId: 'btnAdd',
            icon: 'resources/icons/add.png',
            cls: 'show-mgr-button',
            iconAlign: 'right',
            padding: '0 0 0 40',
            listeners: {
                scope: this,
                tap: function(){
                    this.fireEvent('showRequestTypePicker');
                }
            }
        };
        return tmpAddButton;
    },

    createBackListButton: function(){
        var tmpSubmitButton = {
            xtype: 'button',
            itemId: 'btnBackList',
            cls: 'margin-all-10 show-mgr-button',
            text: 'Back to List'
        };
        return tmpSubmitButton;
    }
});