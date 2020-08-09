<template>
    <div>
<!--        <h2>{{this.$toast}}</h2>-->
<!--        <g-button @click="this.$toast('点击弹出提示')">上方弹出</g-button>-->
<!--        <g-button @click="this.$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>-->
<!--        <g-button @click="this.$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>-->
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import plugin from "../../../src/components/plugin";
  import GButton from "../../../src/components/Button.vue";

  // Vue.use(plugin);
  @Component({
    components: {
      "g-button": GButton,
    }
  })
  export default class ToastDemo extends Vue {
  };
</script>

<style lang="scss" scoped>

</style>