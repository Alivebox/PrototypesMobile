// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src'
});
//</debug>

Ext.application({

    requires: [
        'Ext.MessageBox',
        'TestMobile.ux.UxDependencies',
        'Ext.data.Store',
        'Ext.dataview.List',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Password',
        'Ext.field.Select',
        'Ext.field.Radio',
        'Ext.field.Toggle',
        'Ext.List',
        'Ext.Label',
        'Ext.Img',
    ],

    name: 'TestMobile',

    controllers: [
        'company.CompanyController',
        'help.HelpController',
        'login.LoginController',
        'MainController',
        'order.menu.OrderMenuController',
        'order.OrderController',
        'theme.ThemeController',
        'webrequestform.ListRequestController',
        'webrequestform.CheckListController',
        'webrequestform.NewRequestFomController',
        'webrequestform.RequestTypeController',
        'webrequestform.RequestTypeDetailController',
        'webrequestform.setting.SettingRequestController'

    ],

    models: [
        'Request'
    ],

    stores: [
        'Requests'
    ],

    views: [
        'company.Company',
        'help.Help',
        'login.Login',
        'Main',
        'order.ItemOrder',
        'order.ListOrders',
        'order.OrderDetail',
        'order.menu.MainMenu',
        'order.menu.NavigationMenu',
        'order.menu.OrderMenu',
        'theme.Theme',
        'webrequestform.ListRequest',
        'webrequestform.NewRequestForm',
        'webrequestform.CheckList',
        'webrequestform.picker.RequestTypePicker',
        'webrequestform.RequestType',
        'webrequestform.RequestTypeDetail',
        'webrequestform.setting.WebFormSetting'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        Ext.fly('appLoadingIndicator').destroy();
        Ext.Viewport.add(Ext.create('TestMobile.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
