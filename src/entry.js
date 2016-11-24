import Vue from 'vue';
import Modal from './components/Modal.vue';
import ModalApi from './components/ModalApi';
import List from './components/List.vue';
import Checkbox from './components/Checkbox.vue';

Vue.component(Modal.tagName, Modal);
Vue.component(List.tagName, List);
Vue.component(Checkbox.tagName, Checkbox);

new Vue({
    el: 'body',
    modalRef: 'modal',
    mixins: [ModalApi],
    data: {
        followType: 1,
        abandonReasons: [],
        modalParams: {}
    },
    methods: {
        myAlert: function() {
            this.alert('您已经升级为VIP会员');
        },
        myAlertLongText: function() {
            this.alert('热烈欢迎产品经理张小明加入芝麻一家亲！张小明毕业于南昌大学，软件工程专业出身，曾经在搜狐等一线互联网公司任职，工作经验非常丰富，是即做过产品的攻城师，又是做过技术的产品！希望大家多多交流，共同学习进步！', '欢迎新同学', function() {
                console.log('晚上去吃大餐庆祝下~');
            });
        },
        myAlertNoTitle: function() {
            this.alert('今天天气真好,适合出去跑步玩耍', '', function() {
                console.log('去奥森跑步吧~');
            });
        },
        myConfirm: function() {
            this.confirm('确定清空购物车么?', function(ok) {
                alert(ok);
            });
        },
        myFormModal1: function() {
            this.confirm({slot: 'slotA'}, undefined, (ok) => {
                if (ok) {
                    console.log(this.followType);
                }
            });
        },
        myFormModal2: function() {
            this.confirm({slot: 'slotB'}, '请选择丢弃原因', function(ok) {
            });
        }
    },
});

