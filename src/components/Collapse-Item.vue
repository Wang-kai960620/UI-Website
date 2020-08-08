<template>
    <div class="collapseItem">
        <div class="title" @click="onClick" :class="iconClass">
            <Icon name="right"></Icon>
            {{title}}
        </div>
        <div class="content" v-if="show" :class="iconClass">
            <div class="line">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
  import {Component, Inject, Prop,Vue} from "vue-property-decorator";
  import Icon from "./Icon.vue";

  @Component({
    components: {Icon}
  })
  export default class CollapseItem extends Vue {
    @Prop({type: String, required: true}) title: string | undefined;
    @Prop({type: String}) name: string | undefined;
    @Prop({type: Boolean, default: false}) disable: boolean | undefined;
    @Inject() eventbus!: Vue;

    show = false;

    get iconClass() {
      return {
        show: this.show,
        disable: this.disable
      };
    }

    mounted() {
      (this.eventbus as Vue).$on("update:selected", (value: (string | undefined)[]) => {
        this.show = value.indexOf(this.name) >= 0;
      });
    }

    onClick() {
      if (this.show) {
        this.eventbus.$emit("removeSelected", this.name);
      } else if (!this.disable) {
        this.eventbus.$emit("addSelected", this.name);
      }
    }

  }
  
</script>

<style lang="scss" scoped>
    $height: 32px;
    $bg: #1890ff;
    $border-color: #d9d9d9;

    .collapseItem {

        > * {
            min-height: $height;
        }

        > .title {
            margin-top: -1px;
            margin-left: -1px;
            margin-right: -1px;
            display: flex;
            align-items: center;
            padding: 0 8px;
            border: 1px solid $border-color;
            cursor: pointer;
            position: relative;

            &.disable {
                background: #fafafa;
                cursor: not-allowed;
                color: #cbc9c3;

                &:hover {
                    border-color: $border-color;

                    z-index: 0;
                }
            }

            > .icon {
                transition: all 500ms;
            }

            &:hover {
                position: relative;
                border-color: $bg;
                z-index: 1;
            }

            &.show {
                > .icon {
                    transform: rotate(90deg);
                    transition: all 500ms;
                }
            }
        }

        &:first-child {
            > .title {
                border-radius: 4px 4px 0 0;

            }
        }

        &:not(:first-child) {
            margin: -1px 0;
        }

        &:last-child {
            > .title {
                border-radius: 0 0 4px 4px;
            }
        }

        > .content {
            display: flex;
            align-items: center;
            padding: 0 8px;

            &.show {
                transition: all 2s;
            }
        }
    }
</style>