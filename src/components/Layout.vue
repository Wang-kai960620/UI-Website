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
          console.log(this.$el);
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
        height: 100vh;
        flex-direction: column;
        border: 1px solid red;

        &.hasSider {
            flex-direction: row;
        }
    }
</style>