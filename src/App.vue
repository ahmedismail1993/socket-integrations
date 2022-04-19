<template>
  <div id="app">
    <input
      type="text"
      v-model="baseUrl"
      placeholder="baseUrl ws://localhost:5000"
    />
    <input
      type="text"
      v-model="channel"
      placeholder="channel example /turath/chat"
    />
    <button @click="handleConnection">connect</button>
    <ul></ul>
  </div>
</template>

<script>
import { io } from "socket.io-client";
// import SockJS from "sockjs-client";
// import Stomp from "webstomp-client";
export default {
  name: "App",
  data() {
    return {
      baseUrl: "ws://localhost:5000",
      channel: "/turath/chat",
      connectUrl: "",
      socket: null,
      received_messages: [],
      send_message: null,
      connected: false,
      form: {
        from: "ahmed",
        text: "",
        to: "omar",
      },
    };
  },
  created() {
    // this.connect();
  },
  methods: {
    handleConnection() {
      this.socket = io(this.baseUrl, { path: this.channel });
      if (this.socket.connected) {
        console.log(this.socket);
      }
      alert("connection Connected");
      this.socket.on("/topic/ahmed", (data) => {
        // const el = document.createElement("li");
        // el.innerHTML = JSON.stringify(data);
        // document.querySelector("ul").appendChild(el);
      });
    },
    // connect() {
    //   this.socket = new Stomp.client("ws://localhost:808/turath/chat");
    //   this.stompClient = Stomp.over(this.socket);
    //   this.stompClient.connect(
    //     {},
    //     (frame) => {
    //       this.connected = true;
    //       console.log(frame);
    //       this.stompClient.subscribe("/topic/ahmed", (tick) => {
    //         console.log(tick);
    //         // this.received_messages.push(JSON.parse(tick.body).content);
    //       });
    //     },
    //     (error) => {
    //       console.log(error);
    //       this.connected = false;
    //     }
    //   );
    // },
    // disconnect() {
    //   if (this.stompClient) {
    //     this.stompClient.disconnect();
    //   }
    //   this.connected = false;
    // },
    // tickleConnection() {
    //   this.connected ? this.disconnect() : this.connect();
    // },
    handleClick() {
      this.socket.emit("/app/chat", this.form);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
