<template>
    <div class="layout" :class="has">
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";

  @Component
  export default class Layout extends Vue {
    @Prop({type: Boolean, default: false}) hasSider ?: boolean;
    get has(){
      return {
        hasSider:this.hasSider
      }
    }
  }
</script>

<style lang="scss" scoped>
    .layout {
        flex-grow: 1;
        display: flex;
        height: 50vh;
        flex-direction: column;

        &.hasSider {
            flex-direction: row;
        }
    }
</style>