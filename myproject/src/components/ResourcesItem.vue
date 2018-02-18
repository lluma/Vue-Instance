<template >
<div class="">
  <li class="list-group-item" @click="Toggle(name)">{{name}}</li>
  <div class="card card-body" v-if="show === name">
    <p>{{description}}</p>
    <p class="reference">Reference:&nbsp;<a href="">{{refSite}}</a></p>
  </div>
</div>
</template>

<script>
export default {
  props: [
    'name',
    'description',
    'refSite'
  ],
  data () {
    return {
      show: ''
    }
  },
  methods: {
    Toggle (item) {
      this.show = (this.show === '') ? item : ''
    }
  }
}
</script>

<style>
.reference {
  
}
</style>
