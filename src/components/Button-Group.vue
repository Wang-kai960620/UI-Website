<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component
  export default class ButtonGroup extends Vue {
  }
</script>

<style lang="scss" scoped>
    .g-button-group {
        display: inline-flex;
        vertical-align: middle;

        > .g-button {
            &:not(:first-child) {
                margin-left: -1px;
                border-radius: 0;
            }

            &:first-child {
                border-radius: 5px 0 0 5px;
            }

            &:last-child {
                border-radius: 0 5px 5px 0;
            }

            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>