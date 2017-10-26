<template>
  <div id="app">
    <img src="./assets/logo.png">
    <mt-button @click.native="handleClick">按钮</mt-button>

    <router-link :to="{name: 'helloWorld'}">HelloWorld</router-link>
    <router-link :to="{name: 'hello'}">Hello</router-link>

    <router-view/>

  </div>
</template>

<script>

import Vue from 'vue'
import Vuex from 'vuex'
import {Button, Toast} from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Vuex)
Vue.component(Button.name, Button)

export default {
  name: 'app',
  components: {},
  methods: {
    handleClick: function () {
      Toast('提示信息')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>