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
    @Prop({
      type: String, validator(value: string): boolean {
        return ["left", "right", "center"].indexOf(value) >= 0;
      }
    }) stay?: string | number;

    mounted() {
      this.$children.forEach(vm => {
        vm.gutter = this.gutter;
      });
    }

    get alignStyle() {
      const {stay} = this;
      return [
        stay && `align-${stay}`
      ];
    }

    get rowStyle() {
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