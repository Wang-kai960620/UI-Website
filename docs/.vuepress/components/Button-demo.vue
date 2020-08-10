<template>
    <div>
        <g-button>默认按钮</g-button>
        <g-button style="background: #666666">默认按钮</g-button>
        <g-button style="background: white;color:black; border:1px dashed black">默认按钮</g-button>
        <g-button style="background: red;">Dangerous</g-button>
        <g-button icon="setting">默认按钮</g-button>
        <g-button icon-position="right" icon="setting">默认按钮</g-button>
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
  import Button from "../../../src/components/Button.vue";
  import {Component, Vue} from "vue-property-decorator";

  @Component({
    components: {
      "g-button": Button,
    }
  })
  export default class ButtonDemo extends Vue {
    show = false;
    content = `
        <g-button>默认按钮</g-button>
        <g-button style="background: #666666">默认按钮</g-button>
        <g-button style="background: white;color:black; border:1px dashed black">默认按钮</g-button>
        <g-button style="background: red;">Dangerous</g-button>
        <g-button icon="setting">默认按钮</g-button>
        <g-button icon-position="right" icon="setting">默认按钮</g-button>
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