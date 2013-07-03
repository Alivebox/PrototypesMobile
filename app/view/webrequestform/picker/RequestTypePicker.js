Ext.define('TestMobile.view.webrequestform.picker.RequestTypePicker', {
    extend:'Ext.picker.Picker',
    xtype:'requesttypepicker',
    config:{
        slots: [
            {
                name : 'requesttype',
                title: 'Speed',
                data : [
                    {text: 'Control Room', value: 'Control Room'},
                    {text: 'Flash Studio', value: 'Flash Studio'},
                    {text: 'Studio', value: 'Studio'},
                    {text: 'Transmission', value: 'Transmission'},
                    {text: 'Ingest', value: 'Ingest'}
                ]
            },
            {
                name : 'quantity',
                title: 'Quantity',
                data : [
                    {text: '1', value: '1'},
                    {text: '2', value: '2'},
                    {text: '3', value: '3'},
                    {text: '4', value: '4'},
                    {text: '5', value: '5'},
                    {text: '6', value: '6'}

                ]
            }
        ]
    }
});