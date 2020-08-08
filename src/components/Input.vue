<template>
    <label class="wrapper" :class="{'error':error}">
        <input type="text" :disabled="disable" :value="value" :readonly="readonly" :error="error"
               @change="$emit('change',$event.target.value)"
               @input="$emit('input',$event.target.value)"
               @focus="$emit('focus',$event.target.value)"
               @blur="$emit('blur',$event.target.value)"
        >
        <template v-if="error">
            <Icon name="error" class="icon"></Icon>
            <span>{{error}}</span>
        </template>
    </label>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from "vue-property-decorator";
  import Icon from "./Icon.vue";

  @Component({
    components: {Icon}
  })
  export default class Input extends Vue {
    @Prop({type: Boolean, default: false}) disable?: boolean;
    @Prop({type: Boolean, default: false}) readonly?: boolean;
    @Prop({type: String}) error?: string;
    @Prop(String) value?: string;
  }
</script>

<style lang="scss" scoped>
    $border-color: #d9d9d9;

    .wrapper {
        display: inline-block;
        font-size: 14px;

        > :not(:last-child) {
            margin-right: 5px;
        }

        > input {
            height: 32px;
            border-radius: 4px;
            padding: 0 8px;
            border: 1px solid $border-color;
            outline: none;

            &:hover {
                border: 1px solid #40a9ff;
                box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.1);
            }

            &:focus {
                border: 1px solid #40a9ff;
            }

            &:active {
                border: 1px solid #40a9ff;
            }
        }

        > [disabled] {
            cursor: not-allowed;
            border-color: #d9d9d9;
        }

        > [readonly] {
            cursor: not-allowed;
            border-color: #d9d9d9;
        }

        &.error {
            > input {
                border: 1px solid red;
            }

            > .icon {
                fill: red;
            }
        }
    }
</style>