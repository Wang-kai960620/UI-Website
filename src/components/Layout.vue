<template>
    <div class="layout" :class="isHasSider">
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component
  export default class Layout extends Vue {
    isHasSider = false;

    mounted() {
      this.$children.map(vm => {
        if (vm.$options.name === "Sider") {
          this.$el.className = "hasSider layout";
          return this.isHasSider = true;
        }
      });
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