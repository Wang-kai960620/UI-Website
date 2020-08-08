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
        background: grey;
    }
</style>