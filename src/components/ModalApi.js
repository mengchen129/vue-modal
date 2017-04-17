import EventBus from './EventBus';

export default {
    methods: {
        alert: function(message, title, callback) {
            if (typeof title === 'function') {
                callback = title;
                title = undefined;
            }
            EventBus.$emit('alert', {message: message, title: title, callback: callback});
        },
        confirm: function(message, title, callback) {
            if (typeof title === 'function') {
                callback = title;
                title = undefined;
            }
            EventBus.$emit('confirm', {message: message, title: title, callback: callback});
        },
        prompt: function(message, title, callback, options) {
            if (typeof title === 'function') {
                options = callback;
                callback = title;
                title = undefined;
            }
            EventBus.$emit('prompt', {message: message, title: title, callback: callback, options: options || {}});
        }
    }
};