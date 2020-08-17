<template>
    <div id="app">
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
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component
  export default class App extends Vue {
    selected = "2";
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
