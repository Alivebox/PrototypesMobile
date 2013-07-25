Ext.define('TestMobile.view.order.MyWorkHistory', {
    extend: 'Ext.List',
    xtype: 'myworkhistory',
    config: {
        fullscreen: true,
        scrollable: true,
        cls: 'main-container',
        itemTpl: '<div style="font:15px">{title}</div>' +
            '<div>{time}<strong style="float: right">{hour}</strong></div>',
        grouped: true,
        store: Ext.create('Ext.data.Store', {
            sorters: 'date',
            grouper: {
                groupFn: function(record) {
                    return record.get('date');
                }
            },
            fields: ['title', 'time', 'hour', 'date'],

            data: [
                { title: '100565 - Order Name',   time: '10:00AM - 2:00PM', hour: '4 hr', date: 'Tuesday 18 June - 8 hr'},
                { title: '100565 - Order Name',   time: '10:00AM - 2:00PM', hour: '3.5 hr', date: 'Tuesday 18 June - 8 hr'},
                { title: '100565 - Order Name',   time: '10:00AM - 2:00PM', hour: '0.5 hr', date: 'Tuesday 18 June - 8 hr'},
                { title: '100565 - Order Name',   time: '10:00AM - 2:00PM', hour: '3.25 hr', date: 'Monday 17 June - 7.75 hr'},
                { title: '100565 - Order Name',   time: '10:00AM - 2:00PM', hour: '4.5 hr', date: 'Monday 17 June - 7.75 hr'}
            ]
        })
    },

    initialize: function(){
        this.header = this.createHeader();
        this.add([
            this.header
        ]);
        this.callParent(arguments);
    },

    createHeader: function(){
        var tmpHeader = {
            xtype : 'toolbar',
            docked: 'top',
            title: 'My Work History'
        };
        return tmpHeader;
    }

});