<template>
    <div>

        <g-popover trigger="hover">
            <g-button>上方弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="bottom" trigger="hover">
            <g-button>下方弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="left" trigger="hover">
            <g-button>左边弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="right" trigger="hover">
            <g-button>右边弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <div class="wrapper" @click="show = !show">
            <div class="text">点击展开代码</div>
            <transition name="fade">
            <pre v-if="show">
                <code>{{content}}</code>
            </pre>
            </transition>
        </div>
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import Button from "../../../src/components/Button.vue";
  import Popover from "../../../src/components/Popover.vue";


  @Component({
    components: {
      "g-popover": Popover,
      "g-button": Button,
    }
  })
  export default class PopoverDemo1 extends Vue {
    show = false;
    content = `
     <g-popover trigger="hover">
            <g-button>上方弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="bottom" trigger="hover">
            <g-button>下方弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="left" trigger="hover">
            <g-button>左边弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="right" trigger="hover">
            <g-button>右边弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>`;
    name: "Popover-demo1";
  };
</script>

<style lang="scss" scoped>
    .wrapper {
        margin: 10px;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
        border-radius: 5px;

        > .text {
            margin: 2px 5px;
            padding: 5px 10px;
        }

        > .fade-enter-active, .fade-leave-active {
            transition: all 1s;
        }

        > .fade-enter, .fade-leave-to {
            opacity: 0;
            transform: translateY(-100%);
        }
    }
</style>