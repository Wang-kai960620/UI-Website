<template>
    <div class="tab-item" @click="onClick" :class="classes">
        <div class="line" ref="line"></div>
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import {Component, Inject, Prop, Vue} from "vue-property-decorator";

  @Component
  export default class TabItem extends Vue {
    @Prop({type: Boolean, default: false}) disable?: boolean;
    @Prop({type: String, required: true}) name?: string;
    @Inject() eventbus!: Vue;
    active = false;


    get classes() {
      return {
        active: this.active,
        disable: this.disable
      };
    }

    mounted() {
      this.eventbus.$on("update:selected", (name: string) => {
        this.active = name === this.name;
      });
    }

    onClick() {
      if (this.disable) {return; }
      this.eventbus.$emit("update:selected", this.name);
    }

  }
</script>

<style lang="scss" scoped>
    .tab-item {
        flex-shrink: 0;
        margin: 5px .1em;
        display: flex;
        border-radius: 4px ;
        justify-content: center;
        align-items: center;
        border: .5px solid #ccc;
        padding: 0 10px;
        cursor: pointer;

        &.active {
            background: #40a9ff;
            color: white;
            transition: all .5s;
        }

        &.disable {
            color: #bfbfbf;
            cursor: not-allowed;
        }
    }
</style>