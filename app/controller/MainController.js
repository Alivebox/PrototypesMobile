Ext.define('TestMobile.controller.MainController', {

    extend: 'Ext.app.Controller',

    statics: {

        LOGIN_VIEW: 'login',
        COMPANIES_VIEW: 'company',
        HELP_VIEW: 'help',
        NAVIGATION_MENU_VIEW: 'navigationmenu',
        MAIN_MENU_VIEW: 'mainmenu',
        ORDER_MENU_VIEW: 'ordermenu',
        LIST_ORDERS_VIEW: 'listorders',
        ORDER_DETAIL_VIEW: 'orderdetail',
        WEB_FORM_SETTINGS_VIEW: 'webformsetting',
        CHECK_LIST_VIEW: 'checklist',
        LIST_REQUEST_VIEW: 'listrequest',
        NEW_REQUEST_FORM_VIEW: 'newrequestform',
        REQUEST_TYPE_DETAIL_VIEW: 'requesttypedetail',
        THEME_VIEW: 'theme'
    },

    config: {

        refs: {
            mainView : 'main'
        }

    },

    showWebFormSettingsView: function(){
        this.getMainView().setActiveItem(TestMobile.controller.MainController.WEB_FORM_SETTINGS_VIEW);
    },

    showCheckListView: function(){
        this.getMainView().setActiveItem(TestMobile.controller.MainController.CHECK_LIST_VIEW);
    },

    showListRequestView: function(){
        this.getMainView().setActiveItem(TestMobile.controller.MainController.LIST_REQUEST_VIEW);
    },

    showNewResquestFormView: function(){
        this.getMainView().setActiveItem(TestMobile.controller.MainController.NEW_REQUEST_FORM_VIEW);
    },

    showRequestTypeDetailView: function(){
        this.getMainView().setActiveItem(TestMobile.controller.MainController.REQUEST_TYPE_DETAIL_VIEW);
    },

    showLoginView: function(){
        this.getMainView().setActiveItem(TestMobile.controller.MainController.LOGIN_VIEW);
    },

    showCompaniesView: function(){
        this.getMainView().setActiveItem(TestMobile.controller.MainController.COMPANIES_VIEW);
    },

    showHelpView: function(){
        this.getMainView().setActiveItem(TestMobile.controller.MainController.HELP_VIEW);
    },

    showNavigationMenuView: function(){
        this.getMainView().setActiveItem(TestMobile.controller.MainController.NAVIGATION_MENU_VIEW);
    },

    showMainMenuView: function(){
        this.getMainView().setActiveItem(TestMobile.controller.MainController.MAIN_MENU_VIEW);
    },

    showOrderMenuView: function(){
        this.getMainView().setActiveItem(TestMobile.controller.MainController.ORDER_MENU_VIEW);
    },

    showListOrdersView: function(){
        this.getMainView().setActiveItem(TestMobile.controller.MainController.LIST_ORDERS_VIEW);
    },

    showOrderDetailView: function(){
        this.getMainView().setActiveItem(TestMobile.controller.MainController.ORDER_DETAIL_VIEW);
    },

    showThemeView: function(){
        this.getMainView().setActiveItem(TestMobile.controller.MainController.THEME_VIEW);
    }



});