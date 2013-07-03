Ext.define('TestMobile.view.order.menu.NavigationMenu', {
    extend: 'Ext.Container',
    xtype: 'navigationmenu',
    fullscreen: true,
    config: {
        scrollable: true,
        cls: 'main-container'
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
            title: 'Navigation'
        };
        return tmpHeader;
    },
    
    createMenuContainer: function(){
        var tmpHomeButton = this.createHomeButton();
        var tmpActiveOrdersButton = this.createActiveOrdersButton();
        var tmpQueueButton = this.createQueueButton();
        var tmpShiftsButton = this.createShiftsButton();
        var tmpTimeAwayButton = this.createTimeAwayButton();
        var tmpSettingsButton = this.createSettingsButton();
        var tmpContainer = {
            xtype: 'container',
            defaults: {
              margin: '10 10 0 10'
            },
            items: [
                tmpHomeButton,
                tmpActiveOrdersButton,
                tmpQueueButton,
                tmpShiftsButton,
                tmpTimeAwayButton,
                tmpSettingsButton
            ]
        };
        return tmpContainer;
    },

    createHomeButton: function(){
        var tmpHomeButton = {
            xtype: 'button',
            text: 'Home',
            cls: 'show-mgr-button',
            listeners: {
                scope: this,
                tap: function(){
                    this.fireEvent('showHome')
                }
            }
        };
        return tmpHomeButton;
    },

    createActiveOrdersButton: function(){
        var tmpActiveOrdersButton = {
            xtype: 'button',
            text: 'Active Orders',
            cls: 'show-mgr-button',
            listeners: {
                scope: this,
                tap: function(){
                    this.fireEvent('showActiveOrders')
                }
            }
        };
        return tmpActiveOrdersButton;
    },

    createQueueButton: function(){
        var tmpQueueButton = {
            xtype: 'button',
            text: 'Queue',
            cls: 'show-mgr-button',
            listeners: {
                scope: this,
                tap: function(){
                    this.fireEvent('showQueue')
                }
            }
        };
        return tmpQueueButton;
    },

    createShiftsButton: function(){
        var tmpShiftsButton = {
            xtype: 'button',
            text: 'Shifts',
            cls: 'show-mgr-button',
            listeners: {
                scope: this,
                tap: function(){
                    this.fireEvent('showShifts')
                }
            }
        };
        return tmpShiftsButton;
    },

    createTimeAwayButton: function(){
        var tmpTimeAwayButton = {
            xtype: 'button',
            text: 'Time Away',
            cls: 'show-mgr-button',
            listeners: {
                scope: this,
                tap: function(){
                    this.fireEvent('showTimeAway')
                }
            }
        };
        return tmpTimeAwayButton;
    },

    createSettingsButton: function(){
        var tmpSettingsButton = {
            xtype: 'button',
            text: 'Settings',
            cls: 'show-mgr-button',
            listeners: {
                scope: this,
                tap: function(){
                    this.fireEvent('showSettings')
                }
            }
        };
        return tmpSettingsButton;
    }

});