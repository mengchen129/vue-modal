<template>
    <label class="checkbox-label">
        <slot></slot>
        <span class="checkbox-img"></span>
    </label>
</template>

<script>
    export default {
        tagName: 'v-checkbox'
    }
</script>

<style lang="sass">
    .checkbox-label {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: flex-end;
    }

    .checkbox-img {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url('http://img.ishequ360.com/images/zg/crm/checkbox-nocheck-lg.png') no-repeat center;
        background-size: 20px 20px;
        margin-right: 10px;
    }

    .checkbox-label input[type=checkbox] {
        -webkit-appearance:none;
        width: 0;
        visibility: hidden;
        display: none;
    }

    .checkbox-label input[type=checkbox]:checked + span {
        background-image: url('http://img.ishequ360.com/images/zg/crm/checkbox-check-lg.png');
    }
</style>