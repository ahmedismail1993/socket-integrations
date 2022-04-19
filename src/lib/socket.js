import Vue from "vue";

import VueSocketIO from "vue-socket.io";

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: "ws://localhost:8000"

    // options: { path: "/my-app/" } //Optional options
  })
);
