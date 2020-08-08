<template>
    <svg class="icon">
        <use :xlink:href="`#i-${name}`"/>
    </svg>
</template>

<script lang="ts">
  // const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  // try {
  //   importAll((require.context("../assets/icon", true, /\.svg$/)));
  // } catch (error) {
  //   console.log(error);
  // }

  import {Component, Prop, Vue} from "vue-property-decorator";
  import "./Svg.js";

  @Component
  export default class Icon extends Vue {
    @Prop(String) name!: string;
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