Ext.define('TestMobile.view.order.summary.OrderTasks', {

    extend: 'Ext.Container',
    xtype: 'ordertasks',

    initialize: function(){
        this.taskcontainer = this.createTaskContainer();
        this.add([
            this.taskcontainer
        ]);
        this.callParent(arguments);
    },

    createTaskContainer: function(){
        var tmpTaskContainer = {
            xtype: 'container',
            items: [
                {
                    xtype: 'label',
                    html: 'Task Will Be Here...'
                }
            ]
        }
        return tmpTaskContainer;
    }
});
