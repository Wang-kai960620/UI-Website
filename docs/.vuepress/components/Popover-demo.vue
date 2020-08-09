<template>
    <div>
        <g-popover>
            <g-button>上方弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="bottom">
            <g-button>下方弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="left">
            <g-button>左边弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="right">
            <g-button>右边弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <div>

        <pre>
            <code>{{text}}</code>l
            </pre>
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
  export default class PopoverDemo extends Vue {
    selected = [];
    text = `
       <g-popover>
            <g-button>上方弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="bottom">
            <g-button>下方弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="left">
            <g-button>左边弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        <g-popover position="right">
            <g-button>右边弹出</g-button>
            <template slot="content">
                弹出内容
            </template>
        </g-popover>
        `;
    name: "Popover-demo";
  };
</script>

<style lang="scss" scoped>
    .wrapper {
        margin: 10px 0;
        border: none;
    }

</style>