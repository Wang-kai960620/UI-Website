<template>
    <div>
        <g-input v-model="message"></g-input>
        <g-input value="第一个输入框"></g-input>
        <g-input value="不可选中修改的" disable></g-input>
        <g-input value="只读的" readonly></g-input>
        <g-input value="差一个" error="输入的字符长度有错"></g-input>
        <p>{{`${message}+ 是双向的`}}</p>
        <button @click="message+=1">加一</button>
    </div>
</template>

<script lang="ts">
  import Input from "../../../src/components/Input";
  import {Component, Vue} from "vue-property-decorator";

  @Component({
    components: {
      "g-input": Input
    }
  })
  export default class ButtonDemo extends Vue {
    message = "显示内容";
  };
</script>

<style lang="scss" scoped>

</style>