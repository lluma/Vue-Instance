<template>
  <div id="app">
    <router-nav/>
    <router-view></router-view>
    <p class="card-footer footer">Copyright (c) 2012 Taipei ACM SIGGRAPH All rights reserved.</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .footer {
    font-size: 70%;
    text-align: center;
  }
</style>
