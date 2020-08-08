<template>
    <div class="tab-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Inject} from "vue-property-decorator";

  @Component
  export default class TabHead extends Vue {
    @Inject() eventbus!: object;


  }
</script>

<style lang="scss" scoped>
    $border-color: #d9d9d9;
    .tab-head {
        display: flex;
        height: 40px;
        justify-content: flex-start;
        position: relative;
        border-bottom: 1px solid $border-color;

        > .line {
            position: absolute;
            bottom: 0;
            border-bottom: 1px solid $border-color;
            transition: all 350ms;
        }

        > .wrapper {
            margin-left: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 .1em;

        }
    }
</style>