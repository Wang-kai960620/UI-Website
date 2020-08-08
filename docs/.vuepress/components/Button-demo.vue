<template>
    <g-button>默认按钮</g-button>
</template>

<script lang="ts">
    import Button from '../../../src/components/Button.vue'
  import {Component, Vue} from "vue-property-decorator";

  @Component({
    components:{
      'g-button':Button
    }
  })
  export default class ButtonDemo extends Vue{
    name: "Button-demo"
  };
</script>

<style lang="scss" scoped>

</style>