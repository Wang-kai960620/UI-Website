<template>
    <svg class="icon">
        <use :xlink:href="`#i-${name}`"/>
    </svg>
</template>

<script lang="ts">
  import Vue from "vue";
  import "./Svg.js";

  import {Component, Prop} from "vue-property-decorator";

  @Component
  export default class Icon extends Vue {
    @Prop(String) name?: string;
  }
</script>

<style lang="scss" scoped>
    .icon {
        width: 1em;
        height: 1em;
        fill: black;
        margin-right: 0.1em;
        margin-left: 0;
    }
</style>