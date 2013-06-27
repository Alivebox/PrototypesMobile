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
        var tmpAndroidButton = this.createAndroidButton();
        var tmpAppleButton = this.createAppleButton();
        var tmpBlackBerryButton = this.createBlackBerryButton();
        var tmpSenchaTouchButton = this.createSenchaTouchButton();
        var tmpHelpForm = {
            xtype: 'container',
            items: [
                tmpAndroidButton,
                tmpAppleButton,
                tmpBlackBerryButton,
                tmpSenchaTouchButton
            ]
        }
        return tmpHelpForm;
    },
    
    createAndroidButton: function(){
        var tmpAndroidButton = {
            xtype: 'button',
            text: 'Android',
            margin: '5 10 5 10',
            listeners: {
                scope: this,
                tap: function(){
                    this.fireEvent('showAndroidTheme');
                } 
            }
        };
        return tmpAndroidButton;
    },
    createAppleButton: function(){
        var tmpAppleButton = {
            xtype: 'button',
            text: 'Apple',
            margin: '5 10 5 10',
            listeners: {
                scope: this,
                tap: function(){
                    this.fireEvent('showAppleTheme');
                }
            }
        };
        return tmpAppleButton;
    },
    createSenchaTouchButton: function(){
        var tmpSenchaTouchButton = {
            xtype: 'button',
            text: 'Sencha Touch',
            margin: '5 10 5 10',
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
