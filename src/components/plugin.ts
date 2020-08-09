import Toast from "./Toast.vue";
import {Vue} from "vue/types/vue";

// @ts-ignore
function creatToast({Vue, message, propsData, onClose}) {
  const constructor = Vue.extend(Toast);
  const toast = new constructor({propsData});
  toast.$slots.default = [message];
  toast.$mount();
  toast.$on("close", onClose);
  document.body.appendChild(toast);
  return toast;
}

let currentToast: { close: () => void; } | null;
export default {
  install: (
    // @ts-ignore
    Vue: typeof Vue, options?: any) => {
    Vue.prototype.$toast = function (message: string, props?: any) {
      if (currentToast) {
        currentToast.close();
      }
      currentToast = creatToast({
        Vue,
        message,
        propsData: props,
        onClose: () => {
          currentToast = null;
        }
      });

    };
  }
};