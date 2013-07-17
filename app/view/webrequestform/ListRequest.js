Ext.define('TestMobile.view.webrequestform.ListRequest', {
    extend: 'Ext.dataview.List',
    xtype: 'listrequest',
    requires: ['TestMobile.store.Requests'],
    config: {
        ui: 'round',
        itemTpl: '<div class="request"><span >{name}</span><span style="float:right">{date}</span></div>',
        store: 'Requests',
        grouped: true,
        emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Request</div>'
    },

    initialize: function(){
        this.header = this.createHeader();
        this.menuContainer = this.createMenuContainer();
        this.add([
            this.header,
            this.menuContainer
        ]);
        this.callParent(arguments);
    },

    createShowMgrHeader: function(){
        var tmpShowMgrHeader =  {
            xtype : 'toolbar',
            docked: 'top',
            height: 25,
            minHeight: 25,
            style : {
                marginLeft : '0%',
                height:25
            },
            items: [
                {
                    xtype: 'label',
                    html: '<img src="/resources/icons/showMGR_corp_logo_wide.png" alt="">',
                    height: 25
                },
                {
                    xtype: 'spacer'
                },
                {
                    xtype: 'label',
                    html: 'right'
                }
            ]
        };
        return tmpShowMgrHeader;
    },

    createHeader: function(){
        var tmpHeader =  {
            xtype : 'toolbar',
            docked: 'top',
            title: 'Home',
            items: [
                {
                    xtype:'spacer'
                },
                {
                    xtype: 'button',
                    icon: 'resources/icons/configuration.png',
                    itemId: 'btnConfiguration',
                    listeners: {
                        scope: this,
                        tap: function(){
                            this.fireEvent('showSettings')
                        }
                    }
                }
            ]
        };
        return tmpHeader;
    },

    createMenuContainer: function(){
        var tmpMenuContainer = {
            xtype: 'button',
            itemId: 'btnNewRequest',
            margin: '10 10 10 10',
            cls: 'show-mgr-button',
            docked: 'top',
            text: 'New Request',
            listeners: {
                scope: this,
                tap: function(){
                    this.fireEvent('showNewRequestForm')
                }
            }
        };
        return tmpMenuContainer;
    }
});