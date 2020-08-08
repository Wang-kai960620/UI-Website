<template>
    <div class="tab-body">
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Inject} from "vue-property-decorator";

  @Component
  export default class TabBody extends Vue {
    @Inject() eventbus!: Vue;
  }
</script>

<style lang="scss" scoped>
    .tab-body {
        border: 1px solid blue;
        margin: 1em 0;
        padding: 5px 1em;
    }
</style>