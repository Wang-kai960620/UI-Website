<template>
    <div class="wrapper" :class="seat">
        <div class="toast" ref="wrapper" :class="seat">
            <slot></slot>
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="onclickClose">{{closeButton[`test`]}}</span>
        </div>
    </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";

  @Component
  export default class Toast extends Vue {
    @Prop({type: Boolean, default: true}) autoClose?: boolean;
    @Prop({type: Number, default: 5}) autoCloseTime?: number;
    @Prop({
      type: Object, default: () => {
        return {
          test: "关闭",
          callback: undefined
        };
      }
    }) closeButton?: object;

    @Prop({
      type: String,
      default: "top",
      validator(value: string): boolean {return ["top", "bottom", "middle"].indexOf(value) >= 0;}
    }) position?: string;

    get seat() {
      return {[`position-${this.position}`]: true};
    }

    mounted() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseTime * 1000);
      }
      this.$nextTick(() => {
        const wrapper = this.$refs.wrapper as HTMLDivElement;
        const line = this.$refs.line as HTMLSpanElement;
        line.style.height = String(wrapper.getBoundingClientRect().height) + "px";
      });
    }

    close() {
      this.$el.remove();
      this.$emit("close");
      this.$destroy();
    }

    onclickClose() {
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.close();
        this.closeButton.callback();
      }
    }
  }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $bg: #1890ff;

    @keyframes slide-up {
        0% {
            opacity: 0;
            transform: translateY(100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0%);
        }
    }

    @keyframes slide-down {
        0% {
            opacity: 0;
            transform: translateY(-100%);
        }
        100% {
            opacity: 1;
            transform: translateY(0%);
        }
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .wrapper {
        position: fixed;
        left: 50%;
        transform: translateX(-50%);

        &.position-top {
            top: 0;

            > .toast {
                animation: slide-down 300ms;
            }
        }

        &.position-middle {
            top: 50%;
            transform: translate(-50%, -50%);

            > .toast {
                animation: fade-in 300ms
            }
        }

        &.position-bottom {
            bottom: 0;

            > .toast {
                animation: slide-up 300ms
            }
        }

        .toast {
            min-height: 40px;
            left: 50%;
            font-size: $font-size;
            display: flex;
            align-items: center;
            background: $bg;
            border-radius: 5px;
            box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
            padding: 0 16px;


            > .close {
                padding-left: 16px;
                flex-shrink: 0;
            }

            > .line {
                border-left: 1px solid #ccc;
                margin-left: 16px;
            }


        }
    }

</style>