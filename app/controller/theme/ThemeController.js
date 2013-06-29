Ext.define('TestMobile.controller.theme.ThemeController', {

    extend: 'Ext.app.Controller',

    statics: {

        THEME_PLATFORMS: {
            default: 'chrome',
            blackberry: 'blackberry',
            windows: 'ie10'
        }

    },

    config: {
        control: {
            theme: {
                showLogin: 'onShowLogin',
                showWindowsTheme: 'changeTheme',
                showSenchaTouchTheme: 'changeTheme',
                showBlackBerryTheme: 'changeTheme'
            }
        }
    },

    onShowLogin: function(){
        var tmpMainController = this.getMainController();
        tmpMainController.showLoginView();
    },

    changeTheme: function(argButton,argNewValue){
        var tmpThemePlatform = TestMobile.controller.theme.ThemeController.THEME_PLATFORMS[argButton.themeName];
        window.location.assign(location.pathname + '?platform=' + tmpThemePlatform);
    }

});