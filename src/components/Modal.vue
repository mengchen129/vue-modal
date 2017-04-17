<template>
    <transition name="modal">
        <div id="v-modal-wrap" v-show="show">
            <div id="v-modal-dialog">
                <div id="v-modal-title" v-show="title">{{title}}</div>
                <div id="v-modal-body">
                    <slot name="slotA" v-if="slot == 'slotA'"></slot>
                    <slot name="slotB" v-if="slot == 'slotB'"></slot>
                    <slot name="slotC" v-if="slot == 'slotC'"></slot>
                    <template v-if="!slot">{{message}}</template>
                    <template v-if="type == 'prompt'">
                        <form @submit="onSubmitForm" class="v-modal-prompt-form">
                            <input v-if="inputType == 'text'" type="text" ref="input" v-model="input" class="v-modal-input">
                            <input v-if="inputType == 'number'" type="number" step="0.01" ref="input" v-model="input" class="v-modal-input">
                        </form>
                    </template>
                </div>
                <div id="v-modal-footer">
                    <button class="v-modal-btn slave" @click="cancel()" v-show="type == 'confirm' || type == 'prompt'">取消</button>
                    <button class="v-modal-btn primary" @click="ok()" v-show="type">确定</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'v-modal',
        data: function() {
            return {
                show: false,
                type: '',
                message: '',
                slot: null,
                title: '',
                callback: null,
                input: '',
                inputType: 'text'
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
                this.input = '';
                this.show = true;
            },
            modalAlert: function(params = {}) {
                this.type = 'alert';
                this.modal(params.message, params.title == null ? '提示' : params.title);
                this.callback = params.callback;
            },
            modalConfirm: function(params = {}) {
                this.type = 'confirm';
                this.modal(params.message, params.title || '确认');
                this.callback = params.callback;
            },
            modalPrompt: function(params = {}) {
                this.type = 'prompt';
                this.modal(params.message, params.title || '输入');
                this.callback = params.callback;
                this.inputType = params.options.inputType || 'text';
                this.$nextTick(() => {
                    this.$refs.input.focus();
                });
            },
            ok: function() {
                var self = this;
                this.show = false;
                setTimeout(function() {
                    if (self.callback) {
                        self.callback(self.type == 'prompt' ? self.input : true);
                    }
                }, 0);
            },
            cancel: function() {
                var self = this;
                this.show = false;
                setTimeout(function() {
                    if (self.callback) {
                        self.callback(self.type == 'prompt' ? undefined : false);
                    }
                }, 0);
            },
            onSubmitForm: function(e) {
                e.preventDefault();
                this.ok();
                return false;
            }
        }
    }
</script>

<style>
    @import "Modal.css";
</style>