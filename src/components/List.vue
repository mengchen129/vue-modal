<template>
    <div>
        <ul>
            <li v-for="item in list" @click="remove(item)">
                <v-list-item :text="item.name" color="red"></v-list-item>
            </li>
        </ul>
    </div>
</template>

<script>
    import ModalApi from './ModalApi';
    import ListItem from './ListItem.vue';
    export default {
        tagName: 'v-list',
        props: ['modalParams'],
        mixins: [ModalApi],
        components: {
            [ListItem.tagName]: ListItem
        },
        data: function() {
            return {
                list: [
                    {name: 'A'},
                    {name: 'B'},
                    {name: 'C'},
                ]
            }
        },
        methods: {
            alertName: function(item) {
                this.alert(item.name);
            },
            remove: function(item) {
                this.confirm({slot: 'slotC'}, undefined, (ok) => {
                    if (ok) {
                        console.log(this.modalParams.name + '删除了记录, 原因: ' + this.modalParams.reason);
                        this.list.$remove(item);
                    }
                });
            }
        }
    }
</script>

<style>

</style>