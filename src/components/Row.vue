<template>
    <div class="wrapper" :style="rowStyle" :class="alignStyle">
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";




  @Component
  export default class Row extends Vue {
    @Prop(String) gutter?: string | number;
    @Prop(String) stay?: string | number;

    mounted() {
      this.$children.forEach(vm => {
        vm.gutter = this.gutter;
      });
    }

    alignStyle() {
      const {stay} = this;
      return [
        stay && `align-${stay}`
      ];
    }

    rowStyle() {
      const {gutter} = this;
      if (gutter) {
        return {
          marginLeft: -gutter / 2 + "px", marginRight: -gutter / 2 + "px"
        };
      }
    }
  }
</script>

<style lang="scss" scoped>
    .wrapper {
        height: 32px;
        display: flex;
        flex-wrap: wrap;

        &.stay {
            justify-content: flex-start;
        }

        &.stay-right {
            justify-content: flex-end;
        }

        &.stay-center {
            justify-content: center;
        }
    }
</style>