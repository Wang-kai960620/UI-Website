<template>
    <div>
        <g-input value="请在这里输入内容"></g-input>
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
  import Input from "../../../src/components/Input";
  import {Component, Vue} from "vue-property-decorator";
  import Icon from "../../../src/components/Icon.vue";

  @Component({
    components: {
      "g-input": Input,
      "g-icon": Icon
    }
  })
  export default class InputDemo extends Vue {
    show = false;
    content = `
        <g-input valuse="请在这里输入内容"></g-input>
`;
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