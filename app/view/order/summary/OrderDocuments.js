Ext.define('TestMobile.view.order.summary.OrderDocuments', {

    extend: 'Ext.List',
    xtype: 'orderdocuments',
    config: {
        fullscreen: true,
        itemTpl: '<div style="font:15px">{title}</div>' +
            '<div>{date}</div>',
        store: Ext.create('Ext.data.Store', {

            fields: ['title', 'date'],

            data: [
                { title: 'Document 1',   date: 'Uploaded 19 Jul 2013' },
                { title: 'Document 2',   date: 'Uploaded 19 Jul 2013' },
                { title: 'Document 3',   date: 'Uploaded 19 Jul 2013' },
                { title: 'Document 4',   date: 'Uploaded 19 Jul 2013' }

            ]
        })
    }

});
