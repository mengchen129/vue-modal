<template>
    <span :style="{color: color}">{{text}}</span>
</template>

<script>
    import ModalApi from './ModalApi';
    export default {
        tagName: 'v-list-item',
        mixins: [ModalApi],
        props: ['color', 'text'],
        methods: {
            changeColor: function() {
                this.confirm('确定改变颜色?', undefined, (ok) => {
                    ok && (this.color = 'green');
                });
            }
        }
    }
</script>