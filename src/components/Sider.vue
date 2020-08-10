<template>
    <div class="sider">
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component
  export default class Sider extends Vue {}
</script>

<style lang="scss" scoped>
    .sider {
        color: white;
        width: 120px;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #3ba0e9;
    }
</style>