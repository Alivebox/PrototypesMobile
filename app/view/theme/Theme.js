Ext.define('TestMobile.view.theme.Theme', {

    extend: 'Ext.Container',
    xtype: 'theme',
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
            title: 'Please Select a Theme',
            cls: 'show-mrg-toolbar',
            items: [
                {
                    xtype: 'button',
                    text: 'Back',
                    itemId: 'btnBack',
                    listeners: {
                        scope: this,
                        tap: function() {
                            this.fireEvent('showLogin')
                        }
                    }
                }
            ]
        }
        return tmpHeader;
    },

    createHelpForm: function(){
        var tmpWindowsButton = this.createWindowsButton();
        var tmpBlackBerryButton = this.createBlackBerryButton();
        var tmpSenchaTouchButton = this.createSenchaTouchButton();
        var tmpHelpForm = {
            xtype: 'container',
            items: [
                tmpWindowsButton,
                tmpBlackBerryButton,
                tmpSenchaTouchButton
            ]
        }
        return tmpHelpForm;
    },
    
    createWindowsButton: function(){
        var tmpWindowsButton = {
            xtype: 'button',
            text: 'Windows',
            margin: '5 10 5 10',
            themeName: 'tmpWindowsButton',
            listeners: {
                scope: this,
                tap: function(){
                    this.fireEvent('showWindowsTheme');
                }
            }
        };
        return tmpWindowsButton;
    },
    createSenchaTouchButton: function(){
        var tmpSenchaTouchButton = {
            xtype: 'button',
            text: 'Sencha Touch',
            margin: '5 10 5 10',
            themeName: 'default',
            listeners: {
                scope: this,
                tap: function(){
                    this.fireEvent('showSenchaTouchTheme');
                }
            }
        };
        return tmpSenchaTouchButton;
    },

    createBlackBerryButton: function(){
        var tmpBlackBerryButton = {
            xtype: 'button',
            text: 'BlackBerry',
            margin: '5 10 5 10',
            themeName: 'blackberry',
            listeners: {
                scope: this,
                tap: function(){
                    this.fireEvent('showBlackBerryTheme');
                }
            }
        };
        return tmpBlackBerryButton;
    }
});
