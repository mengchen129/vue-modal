<template>
    <div id="app">
        <h3>Vue Modal 实例</h3>
        <hr>
        <p>
            <button @click="simpleAlert">Alert</button>
            <button @click="alertNormalWithCallback">Alert + 回调事件</button>
            <button @click="alertNormalWithTitle">Alert + 自定义标题</button>
            <button @click="alertWithoutTitle">Alert 无标题</button>
            <button @click="alertWithLongText">Alert 带长文字</button>
            <button @click="alertWithSlot1">Alert Slot 内容1</button>
            <button @click="alertWithSlot2">Alert Slot 内容2</button>
        </p>
        <p>
            <button @click="simpleConfirm">Confirm</button>
        </p>
        <p>
            <button @click="simplePrompt">Prompt</button>
        </p>

        <v-modal ref="modal">
            <div slot="slotA">
                <h3 style="color: green;">前路坎坷不言弃，Fighting!</h3>
            </div>
            <div slot="slotB">
                <div style="display: flex; align-items: center;">
                    <img src="//mengchen129.github.io/vue-modal/cake.jpg"
                         style="width: 100px; height: 100px; flex-shrink: 0; margin-right:10px;" alt="">
                    <div>
                        <p style="text-align: left;">要相信，梦里能到达的地方，总有一天，脚步也能到达。</p>
                    </div>
                </div>
            </div>
        </v-modal>
    </div>
</template>

<script>
    import Modal from './components/Modal.vue';
    import ModalApi from './components/ModalApi';
    import modalEventBind from './components/ModalEventBind';

    export default {
        name: 'app',
        mixins: [ModalApi],
        components: {
            [Modal.name]: Modal
        },
        data() {
            return {}
        },
        mounted() {
            modalEventBind(this.$refs.modal);
        },
        methods: {
            simpleAlert() {
                this.alert('您已经升级为VIP会员');
            },
            alertNormalWithCallback() {
                this.alert('您已经升级为VIP会员', () => {
                    alert('你点击了确定');
                });
            },
            alertNormalWithTitle() {
                this.alert('您已经升级为VIP会员', '恭喜');
            },
            alertWithoutTitle: function () {
                this.alert('今天天气真好，适合出去跑步玩耍', '', function () {
                    console.log('去奥森跑步吧~');
                });
            },
            alertWithLongText() {
                this.alert('热烈欢迎产品经理张小明加入芝麻一家亲！张小明毕业于南昌大学，软件工程专业出身，曾经在搜狐等一线互联网' +
                    '公司任职，工作经验非常丰富，是即做过产品的攻城师，又是做过技术的产品！希望大家多多交流，共同学习进步！', '欢迎新同学');
            },
            alertWithSlot1() {
                this.alert({slot: 'slotA'});
            },
            alertWithSlot2() {
                this.confirm({slot: 'slotB'});
            },
            simpleConfirm() {
                this.confirm('确定删除这项任务么？', (ok) => {
                    if (ok) {
                        alert('删除成功');
                    }
                });
            },
            simplePrompt() {
                this.prompt('输入你的税前工资', '薪资计算器', (salary) => {
                    alert('你输入的数据为：' + salary);
                }, {inputType: 'number'});
            }
        }
    }
</script>

<style>

</style>
