Ext.define('TestMobile.controller.company.CompanyController', {

    extend: 'Ext.app.Controller',

    config: {
        control: {
            company: {
                goBack: 'onGoBack'
            }
        }
    },

    onGoBack: function(){
        var tmpMainController = this.getApplication().getController('MainController');
        tmpMainController.setRightAnimation();
        tmpMainController.showLoginView();
    }

});