<template>
    <div>
        <g-popover>
            <template slot="content">
                这里是popover组件内容
            </template>
            <button>点我</button>
        </g-popover>
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import Popover from "../../../src/components/Popover.vue";

  @Component({
    components: {
      "g-popover": Popover
    }
  })
  export default class PopoverDemo extends Vue {
    name: "Popover-demo";
  };
</script>

<style lang="scss" scoped>

</style>