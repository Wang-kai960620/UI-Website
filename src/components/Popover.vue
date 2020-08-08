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
  import {Component, Prop,Vue} from "vue-property-decorator";

  @Component
  export default class Popover extends Vue {
    @Prop({
      type: String,
      default: "top",
      validator(value: string): boolean { return ["click", "hover"].indexOf(value) >= 0; }
    }) position?: string;
    @Prop({
      type: String,
      default: "click",
      validator(value: string): boolean {return ["click", "hover"].indexOf(value) >= 0;}
    }) trigger?: string;
    visible = false;

    mounted() {
      if (this.trigger === "click") {
        (this.$refs.popover as HTMLDivElement).addEventListener("click", this.onClick);
      } else {
        (this.$refs.popover as HTMLDivElement).addEventListener("mouseenter", this.open);
        (this.$refs.popover as HTMLDivElement).addEventListener("mouseleave", this.close);
      }
    }

    destroyed() {
      if (this.trigger === "click") {
        (this.$refs.popover as HTMLDivElement).removeEventListener("click", this.onClick);
      } else {
        (this.$refs.popover as HTMLDivElement).removeEventListener("mouseenter", this.open);
        (this.$refs.popover as HTMLDivElement).removeEventListener("mouseleave", this.close);
      }
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


    positionContent() {
      const {contentWrapper, triggerWrapper} = this.$refs;
      document.body.appendChild(contentWrapper as HTMLDivElement);
      const {width, height, top, left} = (triggerWrapper as HTMLDivElement).getBoundingClientRect();
      const {height: height2} = (contentWrapper as HTMLDivElement).getBoundingClientRect();
      const positions = {
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
      if(this.position){
        (contentWrapper as HTMLDivElement).style.left = positions[this.position].left + "px";
        (contentWrapper as HTMLDivElement).style.top = positions[this.position].top + "px";
      }
    }

    onClickDocument(e: MouseEvent) {
      if (this.$refs.popover &&
        (this.$refs.popover === e.target || (this.$refs.popover as HTMLDivElement).contains(e.target as HTMLDivElement))
      ) { return; }
      if (this.$refs.contentWrapper &&
        (this.$refs.contentWrapper === e.target || (this.$refs.contentWrapper as HTMLDivElement).contains(e.target as HTMLDivElement))
      ) { return; }
      this.close();
    }

    open() {
      this.visible = true;
      this.$nextTick(() => {
        this.positionContent();
        document.addEventListener("click", this.onClickDocument);
      });
    }

    close() {
      this.visible = false;
      document.removeEventListener("click", this.onClickDocument);
    }

    onClick(event: MouseEvent) {
      if ((this.$refs.triggerWrapper as HTMLDivElement).contains(event.target as HTMLDivElement)) {
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