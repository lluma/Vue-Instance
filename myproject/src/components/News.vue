<template>
  <div class="">
    <h3>&nbsp;&nbsp;&nbsp;&nbsp;News</h3>
    <h6 class="edit">Edit News&nbsp;<input type="checkbox" v-model="editable"></h6>
    <PostNews/>
    <div class="card-group news-group" v-for='(i, index) in this.$store.state.news' :key='index'>
        <NewsItem
          :news='i'
          :editable='editable'
          :index='index'
          :key="index"
        />
    </div>
  </div>
</template>
<script>
import NewsItem from './NewsItem.vue'
import PostNews from './PostNews.vue'
import { newsRef } from '../firebaseApp'

export default {
  data () {
    return {
      editable: false
    }
  },
  components: {
    NewsItem,
    PostNews
  },
  mounted () {
    newsRef.on('value', snap => {
      let news = []
      snap.forEach(n => {
        news.push(n.val())
      })
      this.$store.dispatch('setNews', news)
    })
  }
}
</script>

<style>
.edit {
  padding-left: 1.2rem;
}

.news-group {
  padding: 3px 20px 5px 20px
}
</style>
