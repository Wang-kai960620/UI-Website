<template>
    <div class="content">
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component
  export default class Content extends Vue {}
</script>

<style lang="scss" scoped>
    .content {
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        flex-grow: 1;
        background:#108ee9;
    }
</style>