<template>
    <button @click="$emit('click')" class="g-button" :class="{[`icon-${iconPosition}`]:true}">
        <g-icon v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon v-if="loading" class="loading" name="loading"></g-icon>
        <slot></slot>
    </button>
</template>

<script lang="ts">
  import {Component, Prop,Vue} from "vue-property-decorator";

  @Component
  export default class Button extends Vue {
    @Prop(String) icon?: string ;
    @Prop(Boolean) loading?: boolean ;
    @Prop({
      type: String,
      default: "left",
      validator(value: "right" | "left"): boolean {return value === "left" || value === "right";}
    }) iconPosition?: string ;
  }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $height: 32px;
    $bg: #1890ff;
    $active-bg: #096dd9;
    $color: #fff;
    $border-color: #d9d9d9;
    $hover-bg: #40a9ff;
    @keyframes skin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }

    }

    .g-button {
        height: $height;
        font-size: $font-size;
        padding: 0 1em;
        border: 1px solid $border-color;
        border-radius: 5px;
        color: $color;
        background: $bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle; //inline-flex弹性盒bug，需要修改vertical-align的值，不能是默认值,不然无法对齐
        > .icon {
            fill: white;
        }

        &:active {
            background: $active-bg;
        }

        &:hover {
            border-color: $hover-bg;
        }

        &:focus {
            outline: none;
        }

        &.icon-right {
            > .icon {
                order: 2;
                margin-left: .1em;
                margin-right: 0;
            }
        }

        .loading {
            animation: skin 1s linear infinite;
        }
    }

</style>