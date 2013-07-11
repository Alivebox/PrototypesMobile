Ext.define('TestMobile.view.webrequestform.CheckList', {
    extend: 'Ext.Container',
    xtype: 'checklist',
    config: {
        scrollable: true
    },

    initialize: function(){
        this.header = this.createHeader();
        this.addButton = this.createAddButton();
        this.editButton = this.createEditButton();
        this.container = this.createContainer();
        this.infoFieldSets = this.createFieldSets();
        this.add([
            this.header,
            this.editButton,
            this.infoFieldSets,
            this.addButton,
            this.container
        ]);
        this.callParent(arguments);
    },

    createHeader: function() {
        var tmpHeader = {
            xtype : 'toolbar',
            docked: 'top',
            title: 'CheckList',
            items: [
                {
                    xtype: 'button',
                    text: 'Back',
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('showBack')
                        }
                    }
                }
            ]
        };
        return tmpHeader;
    },

    createContainer: function(){
        var tmpContainer = {
            xtype: 'container',
            itemId: 'cCheckListBody',
            cls: 'padding-all-10',
            items: [
                {
                    xtype: 'requesttypepicker',
                    hidden: true,
                    listeners: {
                        scope: this,
                        change: function(){
                            this.fireEvent('requestTypePicked')
                        }
                    }
                }
            ]
        };
        return tmpContainer;
    },

    createAddButton: function(){
        var tmpAddButton = {
            xtype: 'button',
            text: 'Add',
            itemId: 'btnAdd',
            icon: 'resources/icons/add.png',
            iconAlign: 'right',
            margin: '-20 10 0 10',
            padding: '0 0 0 40',
            height: 46,
            listeners: {
                scope: this,
                tap: function(){
                    this.fireEvent('showRequestTypePicker');
                }
            }
        };
        return tmpAddButton;
    },

    createFieldSets: function(){
        var tmpShowTitleSelectField = this.createShowTitleSelectField();
        var tmpProjectTitle = this.createProjectTitleText();
        var tmpTypeSelectField = this.createTypeSelectField();
        var tmpRequestStartDateLabel = this.createRequestStartDate();
        var tmpFieldSets = {
            xtype: 'fieldset',
            items: [
                tmpShowTitleSelectField,
                tmpProjectTitle,
                tmpTypeSelectField,
                tmpRequestStartDateLabel
            ]
        };
        return tmpFieldSets;
    },


    createShowTitleSelectField: function(){
        var tmpShowTitleSelectField =  {
            xtype: 'textfield',
            name: 'showTitle',
            label: 'Show Title',
            value: 'Anderson Cooper 360',
            readOnly: true
        };
        return tmpShowTitleSelectField;
    },

    createProjectTitleText: function(){
        var tmpProjectTitle =  {
            xtype: 'textfield',
            name: 'txtTitle',
            label: 'Request',
            value: 'Project Name',
            readOnly: true
        };
        return tmpProjectTitle;
    },

    createTypeSelectField: function(){
        var tmpTypeSelectField = {
            xtype: 'textfield',
            name: 'sfType',
            label: 'Type',
            value: 'Pre Tape',
            readOnly: true
        };
        return tmpTypeSelectField;
    },

    createRequestStartDate: function(){
        var tmpRequestStartDate =  {
            xtype: 'textfield',
            name: 'txtTitle',
            label: 'Start Date',
            value: '08 Jul 2013 14:16 GTM',
            readOnly: true
        };
        return tmpRequestStartDate;
    },

    createEditButton: function(){
        var tmpEditButton = {
            xtype: 'button',
            text: 'Edit request details',
            cls: 'show-mgr-button',
            margin: '10 10 0 10',
            listeners: {
                scope: this,
                tap: function(){
                    this.fireEvent('backToForm');
                }
            }
            };
        return tmpEditButton;
    }

});