<template>
    <div>
        <g-input value="不可选中修改的" disable></g-input>
        <g-input value="只读的" readonly></g-input>
        <g-input value="差一个" error="输入的字符长度有错"></g-input>
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
  import Input from "../../../src/components/Input.vue";

  @Component({
    components: {
      "g-input": Input
    }
  })
  export default class InputDemo1 extends Vue {
    show = false;
    content = `
        <g-input value="不可选中修改的" disabled ></g-input>
        <g-input value="只读的" readonly></g-input>
        <g-input value="差一个" error="输入的字符长度有错"></g-input>
    `;
    name: "Input-demo1";
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