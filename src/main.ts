import Vue from "vue";
import App from "./App.vue";

import Button from "./components/Button.vue";
import Icon from "./components/Icon.vue";
import Collapse from "./components/Collapse.vue";
import CollapseItem from "./components/Collapse-Item.vue";

Vue.config.productionTip = false;


Vue.component("g-button", Button);
Vue.component("g-icon", Icon);
Vue.component("g-collapse", Collapse);
Vue.component("g-collapse-item", CollapseItem);
new Vue({
  render: h => h(App),
}).$mount("#app");
