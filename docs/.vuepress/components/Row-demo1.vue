<template>
    <div>
        <g-row class="demoRow" gutter="10">
            <g-col span="8">
                <div class="demoCol" style="background: #49b9ed;color: white">33.3%</div>
            </g-col>
            <g-col span="8">
                <div class="demoCol" style="background: #f5f5f5;color: black">33.3%</div>
            </g-col>
            <g-col span="8">
                <div class="demoCol" style="background: #49b9ed;color: white">33.3%</div>
            </g-col>
        </g-row>
        <g-row class="demoRow" gutter="10">
            <g-col span="6">
                <div class="demoCol" style="background: #f5f5f5;color: black">24%</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol" style="background: #49b9ed;color: white">24%</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol" style="background: #f5f5f5;color: black">24%</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol" style="background: #49b9ed;color: white">24%</div>
            </g-col>
        </g-row>
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
  import Row from "../../../src/components/Row.vue";
  import Column from "../../../src/components/Column.vue";

  @Component({
    components: {
      "g-row": Row,
      "g-col": Column,
    }
  })
  export default class RowDemo1 extends Vue {
    show = false;
    content = `
       <g-row class="demoRow" gutter="10">
            <g-col span="8">
                <div class="demoCol">33.3%</div>
            </g-col>
            <g-col span="8">
                <div class="demoCol">33.3%</div>
            </g-col>
            <g-col span="8">
                <div class="demoCol">33.3%</div>
            </g-col>
        </g-row>
        <g-row class="demoRow" gutter="10">
            <g-col span="6">
                <div class="demoCol">24%</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">24%</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">24%</div>
            </g-col>
            <g-col span="6">
                <div class="demoCol">24%</div>
            </g-col>
        </g-row>
    `;
    name: "Row-demo1";
  };
</script>

<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }

    .demoRow {
        margin: 10px 0;
    }

    .demoCol {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
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