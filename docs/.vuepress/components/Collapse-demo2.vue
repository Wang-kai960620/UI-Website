<template>
    <div>
        <g-collapse :selected.sync="selected">
            <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
            <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
            <g-collapse-item title="标题3" name="3" disable>内容3</g-collapse-item>
        </g-collapse>
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
  import Collapse from "../../../src/components/Collapse.vue";
  import CollapseItem from "../../../src/components/Collapse-Item.vue";

  @Component({
    components: {
      "g-collapse": Collapse,
      "g-collapse-item": CollapseItem
    }
  })
  export default class CollapseDemo2 extends Vue {
    show = false;
    selected = [];
    content = `
    <g-collapse :selected.sync="selected">
            <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
            <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
            <g-collapse-item title="标题3" name="3" disable>内容3</g-collapse-item>
        </g-collapse>
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