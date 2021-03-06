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
                    text: 'Home',
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
            ]
        };
        return tmpContainer;
    },

    createAddButton: function(){
        var tmpAddButton = {
            xtype: 'container',
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
                },
                {
                    xtype: 'label',
                    itemId: 'lblAddImage',
                    html: '<img src="/resources/icons/add32.png" alt="">',
                    top: 6,
                    style: 'left: 50%; margin-left: 20px;',
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('showRequestTypePicker');
                        }
                    }
                },
                {
                    xtype: 'button',
                    text: 'Add',
                    itemId: 'btnAdd',
                    margin: '-20 10 0 10',
                    height: 46
                },
                {
                    xtype: 'button',
                    top: 0,
                    width: '100%',
                    height: 46,
                    margin: '0 10 0 0',
                    cls: 'transparent-button',
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('showRequestTypePicker');
                        }
                    }
                },
                {
                    xtype: 'container',
                    hidden: false,
                    itemId: 'cInfoLabel',
                    layout: {
                        type: 'hbox',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'label',
                            padding: '20 0 0 0',
                            html: '"Add orders to your request by pressing the Add button above"'
                        }
                    ]
                }
            ]
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
            width: '95%',
            height: 35,
            minHeight: 35,
            style : {
                marginLeft : '0%',
                borderRadius: '5px',
                height:35
            },
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
            readOnly: true,
            width: '95%',
            height: 35,
            minHeight: 35,
            style : {
                marginLeft : '0%',
                borderRadius: '5px',
                height:35
            }
        };
        return tmpProjectTitle;
    },

    createTypeSelectField: function(){
        var tmpTypeSelectField = {
            xtype: 'textfield',
            name: 'sfType',
            label: 'Type',
            value: 'Pre Tape',
            readOnly: true,
            width: '95%',
            height: 35,
            minHeight: 35,
            style : {
                marginLeft : '0%',
                borderRadius: '5px',
                height:35
            }
        };
        return tmpTypeSelectField;
    },

    createRequestStartDate: function(){
        var tmpRequestStartDate =  {
            xtype: 'textfield',
            name: 'txtTitle',
            label: 'Start Date',
            value: '08 Jul 2013 14:16 GTM',
            readOnly: true,
            width: '95%',
            height: 35,
            minHeight: 35,
            style : {
                marginLeft : '0%',
                borderRadius: '5px',
                height:35
            }
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