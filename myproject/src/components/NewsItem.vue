<template>
  <div class="col-sd-6 cardCustom">
    <div class="card">
      <button class="close" v-if="editable" @click="deleteNews(news)"><span>&times;</span></button>
      <div class="card-body">
        <a v-bind:href="''+news.refSite+''">{{news.name}}</a>
        <div class="info">
          <div class="card-text">
            Date: {{news.begin}} ~ {{news.end}}
          </div>
          <p class="location">Location: {{news.location}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { newsRef } from '../firebaseApp'
import toastr from 'toastr'

export default {
  props: [
    'news',
    'editable',
    'index'
  ],
  methods: {
    deleteNews (news) {
      newsRef.once('value', snap => {
        snap.forEach(n => {
          if (n.val()['name'] === news['name']) {
            console.log(n.key)
            n.ref.remove().then(res => {
              toastr.success('News removed successfully')
            }).catch(err => {
              toastr.error(err)
            })
          }
        })
      })
    }
  }
}
</script>

<style>
  .info {
    font-size: 30%;
  }

  .location {
    margin-bottom: 0px;
  }

  .cardCustom {
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
  }
</style>
