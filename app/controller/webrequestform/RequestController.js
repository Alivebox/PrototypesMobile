Ext.define('PrototypesMobile.controller.webrequestform.RequestController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            mainView : 'main',
            listRequest : 'listrequest',
            btnNewRequest : 'listrequest [itemId=btnNewRequest]',
            btnConfiguration : 'listrequest [itemId=btnConfiguration]',
            btnRequestBack: 'newrequestform [itemId=btnRequestBack]'
        },

        control : {
            btnNewRequest: {
                tap : 'onShowNewRequestForm'
            },
            btnConfiguration: {
                tap : 'onShowConfigurationMenu'
            },
            listRequest: {
                itemtap : 'onItemTap'
            },
            btnRequestBack: {
                tap : 'onRequestBack'
            }
        }
    },

    launch: function() {
    },

    onShowConfigurationMenu: function(){
        this.getMainView().setActiveItem(1);
    },

    onItemTap: function(){
        this.getMainView().setActiveItem(2);
    },

    onShowNewRequestForm: function(){
        this.getMainView().setActiveItem(2);
    },

    onRequestBack: function(){
        this.getMainView().setActiveItem(0);
    }
});