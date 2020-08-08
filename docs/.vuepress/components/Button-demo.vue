<template>
    <div>
        <g-button :loading="loading1" @click="loading1 = !loading1">默认按钮</g-button>
        <g-button icon="setting" :loading="!loading2" @click="loading2 = !loading2">默认按钮</g-button>
        <g-button icon-position="right" icon="setting" :loading="loading3" @click="loading3 = ! loading3">可以切换按钮</g-button>
        <g-button-group>
            <g-button icon="left">上一页</g-button>
            <g-button>更多</g-button>
            <g-button icon="right" icon-position="right">下一页</g-button>
        </g-button-group>
    </div>
</template>

<script lang="ts">
  import Button from "../../../src/components/Button.vue";
  import ButtonGroup from "../../../src/components/Button-Group";
  import {Component, Vue} from "vue-property-decorator";

  @Component({
    components: {
      "g-button": Button,
      "g-button-group": ButtonGroup
    }
  })
  export default class ButtonDemo extends Vue {
    loading1: false;
    loading2: false;
    loading3: false;

  };
</script>

<style lang="scss" scoped>

</style>