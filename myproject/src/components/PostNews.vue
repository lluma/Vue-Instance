<template>
  <div class="">
    <button class="btn btn-primary btn-sm btn-postnews" @click="toggleForm">{{this.text}}</button>
    <div class="form" v-if="showForm">
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" v-model="news.name">
      </div>
      <div class="form-group">
          <label>Begin</label>
          <input type="date" class="form-control" v-model="news.begin">
      </div>
      <div class="form-group">
        <label>End</label>
        <input type="date" class="form-control" v-model="news.end">
      </div>
      <div class="form-group">
        <label>Loaction</label>
        <input type="text" class="form-control" v-model="news.location">
      </div>
      <div class="form-group">
        <label>Reference site</label>
        <input type="text" class="form-control" v-model="news.refSite">
      </div>
      <button class="btn btn-danger btn-sm" @click="PostNews">Submit</button>
    </div>
  </div>
</template>

<script>
import { newsRef } from '../firebaseApp'
import toastr from 'toastr'
export default {
  data () {
    return {
      news: {
        name: '',
        begin: '',
        end: '',
        location: '',
        refSite: '#'
      },
      showForm: false,
      text: 'Post news'
    }
  },
  methods: {
    toggleForm () {
      if (!this.showForm) {
        this.showForm = true
        this.text = 'Close'
      } else {
        this.showForm = false
        this.text = 'Post news'
      }
    },
    PostNews () {
      newsRef.push(this.news).then(res => {
        toastr.success('News posted successfully')
      }).catch(err => {
        toastr.error(err)
      })
      this.toggleForm()
    }
  }
}
</script>

<style>
.form {
  padding-top: 3%;
  padding-left: 10%;
  padding-right: 10%;
}

.btn-postnews {
  margin-left: 1.2rem
}

</style>
