import Vue from "vue";
import App from "./App.vue";

import Button from "./components/Button.vue";
import Icon from "./components/Icon.vue";
import Collapse from "./components/Collapse.vue";
import CollapseItem from "./components/Collapse-Item.vue";
import Popover from "@/components/Popover.vue";
import Layout from "@/components/Layout.vue";
import Header from "@/components/Header.vue";
import Sider from "@/components/Sider.vue";
import Content from "@/components/Content.vue";
import Footer from "@/components/Footer.vue";
import Tab from "@/components/Tab.vue";
import TabHead from "@/components/Tab-Head.vue";
import TabBody from "@/components/Tab-Body.vue";
import TabItem from "@/components/Tab-Item.vue";
import TabPane from "@/components/Tab-Pane.vue";

Vue.config.productionTip = false;


Vue.component("g-button", Button);
Vue.component("g-icon", Icon);
Vue.component("g-collapse", Collapse);
Vue.component("g-collapse-item", CollapseItem);
Vue.component("g-popover", Popover);
Vue.component("g-layout", Layout);
Vue.component("g-header", Header);
Vue.component("g-sider", Sider);
Vue.component("g-content", Content);
Vue.component("g-footer", Footer);
Vue.component("g-tab", Tab);
Vue.component("g-tab-head", TabHead);
Vue.component("g-tab-body", TabBody);
Vue.component("g-tab-item", TabItem);
Vue.component("g-tab-pane", TabPane);
Vue.component("Icon", Icon);

new Vue({
  render: h => h(App),
}).$mount("#app");
