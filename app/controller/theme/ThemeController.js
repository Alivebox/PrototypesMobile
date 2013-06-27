Ext.define('TestMobile.controller.theme.ThemeController', {

    extend: 'Ext.app.Controller',

    config: {
        control: {
            theme: {
                showLogin: 'onShowLogin',
                showAndroidTheme: 'onShowAndroiTheme',
                showAppleTheme: 'onShowAppleTheme',
                showSenchaTouchTheme: 'onShowSenchaTouchTheme',
                showBlackBerryTheme: 'onShowBlackBerryTheme'
            }
        }
    },

    onShowLogin: function(){
        var tmpMainController = this.getMainController();
        tmpMainController.showLoginView();
    },

    getMainController: function(){
        return this.getApplication().getController('MainController');
    },

    onShowAndroiTheme: function() {
        CSS.swapStyleSheet('android');
    },

    onShowAppleTheme: function() {
        CSS.swapStyleSheet('apple');
    },

    onShowSenchaTouchTheme: function() {
        CSS.swapStyleSheet('sencha-touch');
    },

    onShowBlackBerryTheme: function() {
        CSS.swapStyleSheet('bb6');
    }

});