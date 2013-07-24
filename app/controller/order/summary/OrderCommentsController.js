Ext.define('TestMobile.controller.order.summary.OrderCommentsController', {

    extend: 'Ext.app.Controller',

    config: {

        refs: {
            orderDetail: 'orderdetail',
            orderComments: 'ordercomments'
        },

        control: {
            orderdetail: {
                bottomAddTapped: 'onBottomTapped'
            },
            orderComments: {
                cancelComment: 'onCancelComment',
                submitComment: 'onSubmitComment'
            }
        }
    },

    onBottomTapped: function(){
        if(this.getOrderDetailsController().bottomHandlingView == 'comments'){
            var tmpCommentsPanel = this.getOrderComments().down('#pCommentsForm');
            tmpCommentsPanel.setHidden(false);
        }
    },

    closeCommentPanel: function(){
        var tmpCommentsPanel = this.getOrderComments().down('#pCommentsForm');
        tmpCommentsPanel.setHidden(true);
    },

    getOrderDetailsController: function(){
        return this.getApplication().getController('order.summary.OrderDetailsController');
    },

    onSubmitComment: function(){
        var tmpTaComment = this.getOrderComments().down('#taComment');
        this.getOrderComments().getStore().add( { user: 'Nathan Ayers: ',   date: '12 Feb 3:58PM', comment: tmpTaComment.getValue(), image: '/resources/icons/Users.png'});
        tmpTaComment.setValue('');
        this.closeCommentPanel();
    },

    onCancelComment: function(){
        var tmpTaComment = this.getOrderComments().down('#taComment');
        tmpTaComment.setValue('');
        this.closeCommentPanel();
    }
});