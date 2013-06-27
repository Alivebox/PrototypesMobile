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
            }
        ]
    }
});