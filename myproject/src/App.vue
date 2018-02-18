<template>
  <div id="app">
    <div class="card-header header container-fluid">
      <div class="row">
        <div class="col-sm-10">
          <a href="/"><img src="./images/logo.png" height="50" width="50"/></a>
          <a href="#">TAIPEI ACM SIGGRAPH</a>
          <h6>社團法人台灣電腦圖學與互動技術學會</h6>
        </div>
        <div class="col-sm-2">
          <a href="/signin" v-if="this.$store.state.status === 'signout'">Sign In</a>
          <p>{{this.$store.state.user.email}}</p>
          <a href="/" @click="signOut" v-if="this.$store.state.status === 'signin'">Sign Out&nbsp;</a>
        </div>
      </div>
    </div>
    <router-nav class='nav'/>
    <router-view></router-view>
    <p class="card-footer footer">Copyright (c) 2012 Taipei ACM SIGGRAPH All rights reserved.</p>
  </div>
</template>

<script>
import { firebaseApp } from './firebaseApp'
export default {
  methods: {
    signOut () {
      firebaseApp.auth().signOut().then(res => {
        this.$store.dispatch('signOut')
      })
    }
  }
}
</script>

<style>
  .header {
    margin: 0px auto;
  }

  .nav {
    padding: 5px;
  }

  .footer {
    font-size: 70%;
    text-align: center;
  }

  img {
    padding: 5px 5px;
  }

  h6 {
    padding: 5px 0px 0px 5px;
  }
</style>
