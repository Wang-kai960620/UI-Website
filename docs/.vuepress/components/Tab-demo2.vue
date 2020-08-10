<template>
    <div>
        <g-tab :selected="selected">
            <g-tab-head>
                <g-tab-item name="1">
                    <Icon name="setting"/>
                    Tab 1
                </g-tab-item>
                <g-tab-item name="2">
                    <Icon name="love"/>
                    Tab 2
                </g-tab-item>
                <g-tab-item name="3">
                    <Icon name="dislove"/>
                    Tab 3
                </g-tab-item>
                <g-tab-item name="4">
                    <Icon name="download"/>
                    Tab 4
                </g-tab-item>
            </g-tab-head>
            <g-tab-body class="textWrapper">
                <g-tab-pane name="1">Content of Tab Pane 1</g-tab-pane>
                <g-tab-pane name="2">Content of Tab Pane 2</g-tab-pane>
                <g-tab-pane name="3">Content of Tab Pane 3</g-tab-pane>
                <g-tab-pane name="4">Content of Tab Pane 4</g-tab-pane>
            </g-tab-body>
        </g-tab>
        <div class="codeWrapper" @click="show = !show">
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
  import Tab from "../../../src/components/Tab.vue";
  import TabHead from "../../../src/components/Tab-Head.vue";
  import TabBody from "../../../src/components/Tab-Body.vue";
  import TabPane from "../../../src/components/Tab-Pane.vue";
  import TabItem from "../../../src/components/Tab-Item.vue";
  import Icon from "../../../src/components/Icon.vue";

  @Component({
    components: {
      Icon,
      "g-tab": Tab,
      "g-tab-item": TabItem,
      "g-tab-head": TabHead,
      "g-tab-body": TabBody,
      "g-tab-pane": TabPane
    }
  })
  export default class TabDemo extends Vue {
    content=`
     <g-tab :selected="selected">
            <g-tab-head>
                <g-tab-item name="1">
                    <Icon name="setting"/>
                    Tab 1
                </g-tab-item>
                <g-tab-item name="2">
                    <Icon name="love"/>
                    Tab 2
                </g-tab-item>
                <g-tab-item name="3">
                    <Icon name="dislove"/>
                    Tab 3
                </g-tab-item>
                <g-tab-item name="4">
                    <Icon name="download"/>
                    Tab 4
                </g-tab-item>
            </g-tab-head>
            <g-tab-body class="textWrapper">
                <g-tab-pane name="1">Content of Tab Pane 1</g-tab-pane>
                <g-tab-pane name="2">Content of Tab Pane 2</g-tab-pane>
                <g-tab-pane name="3">Content of Tab Pane 3</g-tab-pane>
                <g-tab-pane name="4">Content of Tab Pane 4</g-tab-pane>
            </g-tab-body>
        </g-tab>
    `
    show = false;
    selected = "2";
    name: "Tab-demo";
  };
</script>

<style lang="scss" scoped>
    .textWrapper {
        border: none;
    }

    .codeWrapper {
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