<template>
    <div class="header">
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";


  @Component
  export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
    .header {
        height: 50px;
        background: blue;
    }
</style>