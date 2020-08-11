<template>
    <div id="app">
        <g-layout>
            <g-header>header</g-header>
            <g-layout has-sider>
                <g-content>content</g-content>
                <g-sider>sider</g-sider>
            </g-layout>
            <g-footer>footer</g-footer>
        </g-layout>

    </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component
  export default class App extends Vue {
  }
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
