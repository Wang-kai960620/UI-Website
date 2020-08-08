<template>
    <div class="wrapper">
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import {Component, Prop, Provide,Vue} from "vue-property-decorator";

  @Component
  export default class Collapse extends Vue {
    @Prop(Array) selected!: [] ;
    @Prop({type: Boolean, default: false}) collapse?: boolean ;
    @Provide() eventbus = new Vue();

    mounted() {
      this.eventbus.$emit("update:selected", this.selected);
      this.eventbus.$on("removeSelected", (value: string) => {
        const selectedCopy = JSON.parse(JSON.stringify(this.selected));
        const index = selectedCopy.indexOf(value);
        selectedCopy.splice(index, 1);
        this.eventbus.$emit("update:selected", selectedCopy);
        this.$emit("update:selected", selectedCopy);
      });
      this.eventbus.$on("addSelected", (value: string) => {
        let selectedCopy = JSON.parse(JSON.stringify(this.selected));
        if (this.collapse) {
          selectedCopy = [value];
        } else {
          selectedCopy.push(value);
        }
        this.eventbus.$emit("update:selected", selectedCopy);
        this.$emit("update:selected", selectedCopy);
      });
    }
  }
</script>

<style lang="scss" scoped>
    $border-color: #d9d9d9;

    .wrapper {
        border: 1px solid $border-color;
        border-radius: 4px;
    }
</style>