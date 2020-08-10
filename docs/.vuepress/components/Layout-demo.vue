<template>
    <div>
        <div style="margin:20px 0">
            <g-layout>
                <g-layout>
                    <g-header>header</g-header>
                    <g-content>content</g-content>
                    <g-footer>footer</g-footer>
                </g-layout>
            </g-layout>
        </div>
        <div style="margin:20px 0">
            <g-layout>
                <g-header>header</g-header>
                <g-layout>
                    <g-sider>sider</g-sider>
                    <g-content>content</g-content>
                </g-layout>
                <g-footer>footer</g-footer>
            </g-layout>
        </div>
        <div style="margin:100px 0">
            <g-layout>
                <g-header style="height: 64px">header</g-header>
                <g-layout>
                    <g-content>content</g-content>
                    <g-sider>sider</g-sider>
                </g-layout>
                <g-footer>footer</g-footer>
            </g-layout>
        </div>
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
  import Layout from "../../../src/components/Layout.vue";
  import Sider from "../../../src/components/Sider.vue";
  import Header from "../../../src/components/Header.vue";
  import Footer from "../../../src/components/Footer.vue";
  import Content from "../../../src/components/Content.vue";

  @Component({
    components: {
      "g-layout": Layout,
      "g-sider": Sider,
      "g-header": Header,
      "g-footer": Footer,
      "g-content": Content,
    }
  })
  export default class LayoutDemo extends Vue {
    show = false;
    content = `
            <g-layout>
                <g-layout>
                    <g-header>header</g-header>
                    <g-content>content</g-content>
                    <g-footer>footer</g-footer>
                </g-layout>
            </g-layout>

            <g-layout>
                <g-header>header</g-header>
                <g-layout>
                    <g-sider>sider</g-sider>
                    <g-content>content</g-content>
                </g-layout>
                <g-footer>footer</g-footer>
            </g-layout>

            <g-layout>
                <g-header >header</g-header>
                <g-layout>
                    <g-content>content</g-content>
                    <g-sider>sider</g-sider>
                </g-layout>
                <g-footer>footer</g-footer>
            </g-layout>
    `;
    name: "Layout-demo";
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