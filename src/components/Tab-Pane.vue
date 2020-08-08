<template>
    <div class="tab-pane" v-if="active" :class="classes">
        <div class="wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
  import {Component, Inject, Prop,Vue} from "vue-property-decorator";

  @Component
  export default class TabPane extends Vue {
    @Prop(String) name?: string;
    @Inject() eventbus!: Vue;
    active = false;

    get classes() {
      return {active: this.active};
    }

    created() {
      this.eventbus.$on("update:selected", (name: string) => {
        this.active = name === this.name;
      });
    }

  }
</script>

<style lang="scss" scoped>

    @keyframes pane-up {
        0% {
            opacity: 0;
            transform: translateX(100%);
        }
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .tab-pane {
        padding: 1em 0;
        opacity: 1;


        &.active {
            animation: pane-up 500ms;
        }
    }
</style>