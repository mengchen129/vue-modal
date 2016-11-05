<template>
    <div id="v-modal-shadow" v-show="show" transition="shadow"></div>
    <div id="v-modal-wrap" v-show="show" transition="modal">
        <div id="v-modal-dialog">
            <div id="v-modal-title" v-show="title">{{title}}</div>
            <div id="v-modal-body">
                <slot name="slotA" v-if="slot == 'slotA'"></slot>
                <slot name="slotB" v-if="slot == 'slotB'"></slot>
                <slot name="slotC" v-if="slot == 'slotC'"></slot>
                <template v-if="!slot">{{message}}</template>
            </div>
            <div id="v-modal-footer">
                <button class="v-modal-btn slave" @click="cancel()" v-show="type == 'confirm'">取消</button>
                <button class="v-modal-btn primary" @click="ok()" v-show="type">确定</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        tagName: 'v-modal',
        data: function() {
            return {
                show: false,
                type: '',
                message: '',
                slot: null,
                title: '',
                callback: null
            }
        },
        methods: {
            modal: function(message, title) {
                if (typeof message === 'string') {
                    this.message = message;
                    this.slot = null;
                } else if (typeof message === 'object' && message.slot) {
                    this.slot = message.slot;
                }
                this.title = title;
                this.callback = null;
                this.show = true;
            },
            modalAlert: function(message, title, callback) {
                this.type = 'alert';
                if (typeof title === 'undefined') {
                    title = '提示';
                }
                this.modal(message, title);
                this.callback = callback;
            },
            modalConfirm: function(message, title, callback) {
                this.type = 'confirm';
                if (typeof title === 'undefined') {
                    title = '确认';
                }
                this.modal(message, title);
                this.callback = callback;
            },
            ok: function() {
                var self = this;
                this.show = false;
                setTimeout(function() {
                    if (self.callback) {
                        self.callback(true);
                    }
                }, 0);
            },
            cancel: function() {
                var self = this;
                this.show = false;
                setTimeout(function() {
                    if (self.callback) {
                        self.callback(false);
                    }
                }, 0);
            }
        }
    }
</script>

<style lang="sass">
    @import "./Modal.scss";
</style>