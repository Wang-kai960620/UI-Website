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
        flex-grow: 1;
        background: #333;
    }
</style>