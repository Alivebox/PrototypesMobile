Ext.define('PrototypesMobile.store.Requests', {
    extend: 'Ext.data.Store',
    config: {
        model: 'PrototypesMobile.model.Request',
        sorters: 'status',
        groupField: 'status',
        data: [
            { name: 'Project Name', date: 'Jun 21', status: 'My Incomplete Requests'},
            { name: 'Project Name', date: 'Aug 27', status: 'My Request History'  },
            { name: 'Project Name', date: 'Jan 07', status: 'My Active Requests'  },
            { name: 'Project Name', date: 'Nov 30', status: 'My Active Requests'  },
            { name: 'Project Name', date: 'Feb 05', status: 'My Incomplete Requests' },
            { name: 'Project Name', date: 'Mar 30', status: 'My Request History'  },
            { name: 'Project Name', date: 'Sep 01', status: 'My Active Requests'  },
            { name: 'Project Name', date: 'Dec 25', status: 'My Active Requests'  }
        ]
    }
});