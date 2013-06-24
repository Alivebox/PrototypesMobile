Ext.define('PrototypesMobile.controller.MainController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            mainView : 'main',
            loginView : 'login',
            helpView : 'help',
            companyView: 'company',
            btnLoginHelp: 'login [itemId=btnLoginHelp]',
            btnHelpBack: 'help [itemId=btnHelpBack]',
            btnLogIn: 'login [itemId=btnLogIn]',
            btnCompany: 'login [itemId=btnCompany]',
            btnCompanyMenuBack : 'company [itemId=btnCompanyMenuBack]'
        },

        control: {
            login: {
                helpSelected: 'onHelpSelected'
            },
            help: {
                backSelected: 'onBackSelected'
            },
            btnLoginHelp: {
                tap: 'onHelpSelected'
            },
            btnHelpBack: {
                tap: 'onBackSelected'
            },
            btnLogIn: {
                tap: 'onLogIn'
            },
            btnCompany: {
                tap: 'onSelectCompany'
            },
            btnCompanyMenuBack: {
                tap: 'onBackSelected'
            }
        }
    },

    launch: function() {
    },

    onHelpSelected: function() {
        this.getMainView().setActiveItem(1);
    },

    onBackSelected: function() {
        this.getMainView().setActiveItem(0);
    },

    onLogIn: function() {
        this.getMainView().setActiveItem(2);
    },

    onSelectCompany: function(){
        this.getMainView().setActiveItem(5);
    }


});