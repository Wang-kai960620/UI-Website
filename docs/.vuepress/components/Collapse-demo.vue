<template>
    <div>
        <g-collapse :selected.sync="selected" collapse>
            <g-collapse-item title="标题1" name="1" disable>内容1</g-collapse-item>
            <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
            <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
        </g-collapse>
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
  export default class ButtonDemo extends Vue {
    selected = [];
  };
</script>

<style lang="scss" scoped>

</style>