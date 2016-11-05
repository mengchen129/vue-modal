module.exports = {
    methods: {
        alert: function(message, title, callback) {
            this.$dispatch('alert', {message: message, title: title, callback: callback});
        },
        confirm: function(message, title, callback) {
            this.$dispatch('confirm', {message: message, title: title, callback: callback});
        }
    },
    events: {
        alert: function(param) {
            var modalRef = this.$refs[this.$options.modalRef];
            if (modalRef) {
                modalRef.modalAlert(param.message, param.title, param.callback);
            } else {
                return true;
            }
        },
        confirm: function(param) {
            var modalRef = this.$refs[this.$options.modalRef];
            if (modalRef) {
                modalRef.modalConfirm(param.message, param.title, param.callback);
            } else {
                return true;
            }
        }
    }
};