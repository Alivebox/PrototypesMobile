Ext.define('TestMobile.view.order.MyWorkHistory', {
    extend: 'Ext.Container',
    xtype: 'myworkhistory',
    fullscreen: true,
    config: {
        scrollable: true,
        cls: 'main-container'
    },

    initialize: function(){
        this.header = this.createHeader();
        this.add([
            this.header,
            {
                xtype: 'list',
                itemTpl: '<div style="font:15px">{title}</div>' +
                    '<div>{time}<strong>{hour}</strong></div>',
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
                        { title: 'CAM - Nathan Ayers',   time: '10:00AM - 2:00PM', hour: '4 HR', date: 'Tuesday 18 June'},
                        { title: 'Panasonic 2400 HD',   time: '10:00AM - 2:00PM', hour: '4 HR', date: 'Tuesday 18 June'},
                        { title: 'HD Tape Stock',   time: '10:00AM - 2:00PM', hour: '2 EA', date: 'Tuesday 18 June'},
                        { title: 'CAM - Nathan Ayers',   time: '10:00AM - 2:00PM', hour: '4 HR', date: 'Monday 17 June'},
                        { title: 'Panasonic 2400 HD',   time: '10:00AM - 2:00PM', hour: '4 HR', date: 'Monday 17 June'},
                        { title: 'HD Tape Stock',   time: '10:00AM - 2:00PM', hour: '1 EA', date: 'Monday 17 June'}
                    ]
                })
            }
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