<template>
    <div id="app">
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
        <g-collapse :selected.sync="selected" collapse>
            <g-collapse-item title="标题1" name="1" disable>内容1</g-collapse-item>
            <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
            <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
        </g-collapse>
        <g-button :loading="loading1" @click="loading1 = !loading1">按钮</g-button>
        <g-button icon="setting" :loading="!loading2" @click="loading2 = !loading2"> 按钮</g-button>
        <g-button icon-position="right" icon="setting" :loading="loading3" @click="loading3 = ! loading3">按钮</g-button>
        <g-button icon="left">上一页</g-button>
        <g-button>更多</g-button>
        <g-button icon="right" icon-position="right">下一页</g-button>
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component
  export default class App extends Vue {
    loading1 = false;
    loading2 = false;
    loading3 = false;
    selected = ["2"];
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
