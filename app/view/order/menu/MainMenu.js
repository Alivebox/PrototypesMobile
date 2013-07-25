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
                tmpQueueOrders
            ]
        };
        return tmpOrdersContainer;
    },

    createActiveOrdersButton: function(){
        var tmpActiveOrdersButton = {
            xtype: 'container',
            width: '50%',
            items: [
                {
                    xtype: 'button',
                    itemId: 'btnActive',
                    text: '4',
                    height: '96px',
                    cls: 'show-mgr-button-height-font',
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('showActiveOrders')
                        }
                    }
                },
                {
                    xtype: 'label',
                    top: 70,
                    cls: 'active-orders-info',
                    html: 'Active'
                }
            ]
        };
        return tmpActiveOrdersButton;
    },

    createQueueOrdersButton: function(){
        var tmpQueueOrders = {
            xtype: 'container',
            width: '50%',
            items: [
                {
                    xtype: 'button',
                    itemId: 'btnQueue',
                    text: '8',
                    height: '96px',
                    cls: 'show-mgr-button-height-font',
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('showQueueOrders')
                        }
                    }
                },
                {
                    xtype: 'label',
                    top: 70,
                    cls: 'queue-orders-info',
                    html: 'Queue'
                }
            ]
        };
        return tmpQueueOrders;
    },

    createViewHistoryButton: function(){
        var tmpViewHistoryButton = {
            xtype: 'button',
            text: 'View Work History',
            style: '',
            cls: 'show-mgr-button view-history-button',
            listeners: {
                scope: this,
                tap: function(){
                    this.fireEvent('showViewOrderHistory');
                }
            }
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