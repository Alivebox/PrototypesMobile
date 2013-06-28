Ext.define('TestMobile.view.order.menu.MainMenu', {
    extend: 'Ext.Container',
    xtype: 'mainmenu',
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

    createHeader: function() {
        var tmpHeader =  {
            xtype : 'toolbar',
            docked: 'top',
            title: 'Welcome, Nathan',
            cls: 'show-mrg-toolbar',
            items: [
                {
                    xtype: 'button',
                    text: ' ',
                    cls: 'transparent-button',
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('showWebForm');
                        }
                    }
                }
            ]
        };
        return tmpHeader;
    },

    createMenuContainer: function(){
        var tmpClockOutButton = this.createClockOutButton();
        var tmpOrdersContainer = this.createOrdersContainer();
        var tmpViewHistoryButton = this.createViewHistoryButton();
        var tmpViewUpcomingShiftsButton = this.createViewUpcomingShiftsButton();
        var tmpRequestTimeAwayButton = this.createRequestTimeAwayButton();
        var tmpSettingsButton = this.createSettingsButton();
        var tmpMenuContainer = {
            xtype: 'container',
            defaults: {
                style: 'margin-top: 10px'
            },
            items: [
                tmpClockOutButton,
                tmpOrdersContainer,
                tmpViewHistoryButton,
                tmpViewUpcomingShiftsButton,
                tmpRequestTimeAwayButton,
                tmpSettingsButton
            ]
        };
        return tmpMenuContainer;
    },

    createClockOutButton: function(){
        var tmpClockOutButton = {
            xtype: 'button',
            text: 'Clock Out',
            cls: 'show-mgr-button'

        };
        return tmpClockOutButton;
    },

    createOrdersContainer: function(){
        var tmpActiveOrdersButton = this.createActiveOrdersButton();
        var tmpQueueOrders = this.createQueueOrdersButton();
        var tmpOrdersContainer =  {
            xtype: 'container',
            layout: 'hbox',
            width: '100%',
            height: '20%',
            items: [
                tmpActiveOrdersButton,
                tmpQueueOrders,
                {
                    xtype: 'button',
                    height: '96px',
                    style: 'visibility:hidden;'
                }
            ]
        };
        return tmpOrdersContainer;
    },

    createActiveOrdersButton: function(){
        var tmpActiveOrdersButton = {
            xtype: 'container',
            flex: 1,
            items: [
                {
                    xtype: 'button',
                    itemId: 'btnActive',
                    text: '4',
                    top: 0,
                    width: '96%',
                    style: 'right: 12px',
                    height: '96px',
                    cls: 'transparent-button',
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('showActiveOrders')
                        }
                    }
                },
                {
                    xtype: 'button',
                    text: 'Active',
                    height: '96px',
                    padding: '50 0 0 0',
                    cls: 'show-mgr-button'
                }
            ]
        };
        return tmpActiveOrdersButton;
    },

    createQueueOrdersButton: function(){
        var tmpQueueOrders = {
            xtype: 'container',
            flex: 1,
            items: [
                {
                    xtype: 'button',
                    itemId: 'btnQueue',
                    text: '8',
                    top: 0,
                    width: '100%',
                    style: 'right: -12px',
                    height: '96px',
                    cls: 'transparent-button',
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('showQueueOrders')
                        }
                    }
                },
                {
                    xtype: 'button',
                    text: 'Queue',
                    height: '96px',
                    padding: '50 0 0 0',
                    style: 'margin-right: -15px',
                    cls: 'show-mgr-button'
                }
            ]
        };
        return tmpQueueOrders;
    },

    createViewHistoryButton: function(){
        var tmpViewHistoryButton = {
            xtype: 'button',
            text: 'View Order History',
            cls: 'show-mgr-button'
        };
        return tmpViewHistoryButton;
    },

    createViewUpcomingShiftsButton: function(){
        var tmpViewUpcomingShiftsButton = {
            xtype: 'button',
            text: 'View Upcoming Shifts',
            cls: 'show-mgr-button'
        };
        return tmpViewUpcomingShiftsButton;
    },

    createRequestTimeAwayButton: function(){
        var tmpRequestTimeAwayButton = {
            xtype: 'button',
            text: 'Request Time Away',
            cls: 'show-mgr-button'
        };
        return tmpRequestTimeAwayButton;
    },

    createSettingsButton: function(){
        var tmpSettingsButton = {
            xtype: 'button',
            text: 'Settings',
            cls: 'show-mgr-button'
        };
        return tmpSettingsButton;
    }

});