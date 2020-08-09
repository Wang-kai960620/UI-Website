<template>
    <div class="wrapper" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible"
             :class="{[`position-${position}`]:true}">
            <slot name="content" :close="close"></slot>
        </div>
        <span ref="triggerWrapper" style="display: inline-block; ">
      <slot></slot>
    </span>
    </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";

  interface Positions {
    top: {
      top: string | number
      left: string | number
    }
    bottom: {
      top: string | number
      left: string | number
    }
    left: {
      top: string | number
      left: string | number
    },
    right: {
      top: string | number
      left: string | number
    },
  }

  @Component
  export default class Popover extends Vue {
    @Prop({
      type: String,
      default: "top",
      validator(value: string): boolean { return ["top", "bottom", "left", "right"].indexOf(value) >= 0; }
    }) position?: "top" | "bottom" | "left" | "right";
    @Prop({
      type: String,
      default: "click",
      validator(value: string): boolean {return ["click", "hover"].indexOf(value) >= 0;}
    }) trigger?: string;

    @Prop(Element) container?: HTMLDivElement;
    visible = false;

    mounted() {
      this.addPopoverListeners();
    }

    destroyed() {
      this.putBackContent();
      this.removePopoverListeners();
    }

    get openEvent() {
      if (this.trigger === "click") {
        return "click";
      } else {
        return "mouseenter";
      }
    }

    get closeEvent() {
      if (this.trigger === "click") {
        return "click";
      } else {
        return "mouseleave";
      }
    }


    addPopoverListeners() {
      const popover = this.$refs.popover as HTMLDivElement;

      if (this.trigger === "click") {
        popover.addEventListener("click", this.onClick);
      } else {
        popover.addEventListener("mouseenter", this.open);
        popover.addEventListener("mouseleave", this.close);
      }
    }

    removePopoverListeners() {
      const popover = this.$refs.popover as HTMLDivElement;

      if (this.trigger === "click") {
        popover.removeEventListener("click", this.onClick);
      } else {
        popover.removeEventListener("mouseenter", this.open);
        popover.removeEventListener("mouseleave", this.close);
      }
    }

    putBackContent() {
      const {contentWrapper, popover} = this.$refs;
      if (!contentWrapper) {return;}
      (popover as HTMLDivElement).appendChild(contentWrapper as HTMLDivElement);
    }

    positionContent() {
      const contentWrapper = this.$refs.contentWrapper as HTMLDivElement;
      const triggerWrapper = this.$refs.triggerWrapper as HTMLDivElement;
      (this.container || document.body).appendChild(contentWrapper);
      const {width, height, top, left} = triggerWrapper.getBoundingClientRect();
      const {height: height2} = contentWrapper.getBoundingClientRect();
      let positions: Positions = {
        top: {top: top + window.scrollY, left: left + window.scrollX,},
        bottom: {top: top + height + window.scrollY, left: left + window.scrollX},
        left: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX
        },
        right: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX + width
        },
      };
      if (this.position === "right") {
        contentWrapper.style.left = positions[this.position].left + "px";
        contentWrapper.style.top = positions[this.position].top + "px";
      } else if (this.position === "left") {
        contentWrapper.style.left = positions[this.position].left + "px";
        contentWrapper.style.top = positions[this.position].top + "px";

      } else if (this.position === "top") {
        contentWrapper.style.left = positions[this.position].left + "px";
        contentWrapper.style.top = positions[this.position].top + "px";
      } else if (this.position === "bottom") {
        contentWrapper.style.left = positions[this.position].left + "px";
        contentWrapper.style.top = positions[this.position].top + "px";
      }
    }


    onClickDocument(e: any) {
      const popover = this.$refs.popover as HTMLDivElement;
      const contentWrapper = this.$refs.contentWrapper as HTMLDivElement;
      if (this.$refs.popover &&
        (this.$refs.popover === e.target || popover.contains(e.target))
      ) { return; }
      if (this.$refs.contentWrapper &&
        (this.$refs.contentWrapper === e.target || contentWrapper.contains(e.target))
      ) { return; }
      this.close();
    }

    open() {
      this.visible = true;
      this.$emit("open");
      this.$nextTick(() => {
        this.positionContent();
        document.addEventListener("click", this.onClickDocument);
      });
    }

    close() {
      this.visible = false;
      this.$emit("close");
      document.removeEventListener("click", this.onClickDocument);
    }

    onClick(event: any) {
      if ((this.$refs.triggerWrapper as HTMLDivElement).contains(event.target)) {
        if (this.visible) {
          this.close();
        } else {
          this.open();
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
    $border-color: #d9d9d9;
    .wrapper {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }

    .content-wrapper {
        position: absolute;
        border: 1px solid $border-color;
        border-radius: 4px;
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
        background: white;
        padding: .5em 1em;
        max-width: 20em;
        word-break: break-all;

        &::before, &::after {
            content: '';
            display: block;
            border: 10px solid transparent;
            width: 0;
            height: 0;
            position: absolute;
        }

        &.position-top {
            transform: translateY(-100%);
            margin-top: -10px;

            &::before, &::after {
                left: 10px;
            }

            &::before {
                border-top-color: black;
                border-bottom: none;
                top: 100%;
            }

            &::after {
                border-top-color: white;
                border-bottom: none;
                top: calc(100% - 1px);
            }
        }

        &.position-bottom {
            margin-top: 10px;

            &::before, &::after {
                left: 10px;
            }

            &::before {
                border-top: none;
                border-bottom-color: black;
                bottom: 100%;
            }

            &::after {
                border-top: none;
                border-bottom-color: white;
                bottom: calc(100% - 1px);
            }
        }

        &.position-left {
            transform: translateX(-100%);
            margin-left: -10px;

            &::before, &::after {
                transform: translateY(-50%);
                top: 50%;
            }

            &::before {
                border-left-color: black;
                border-right: none;
                left: 100%;
            }

            &::after {
                border-left-color: white;
                border-right: none;
                left: calc(100% - 1px);
            }
        }

        &.position-right {
            margin-left: 10px;

            &::before, &::after {
                transform: translateY(-50%);
                top: 50%;
            }

            &::before {
                border-right-color: black;
                border-left: none;
                right: 100%;
            }

            &::after {
                border-right-color: white;
                border-left: none;
                right: calc(100% - 1px);
            }
        }
    }
</style>