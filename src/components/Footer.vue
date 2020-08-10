<template>
    <div class="footer">
        <slot></slot>
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";

  @Component
  export default class Footer extends Vue {}
</script>

<style lang="scss" scoped>
    .footer {
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        height: 64px;
        background: #7dbcea;
    }
</style>