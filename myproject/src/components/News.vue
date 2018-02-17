<template>
  <div class="">
    <vue-good-table
        title="News"
        :columns="headers"
        :rows="news"
        :paginate="true"
    />
  </div>
</template>
<script>
export default {
  data () {
    return {
      headers: [
        {
          label: 'Date',
          field: 'createAt',
          type: 'date',
          inputFormat: 'YYYY-MM-DD',
          outputFormat: 'YYYY-MM-DD',
          width: '150px'
        },
        {
          label: 'Name',
          field: 'name'
        },
        {
          label: 'Content',
          field: 'content'
        }
      ],
      news: [
        {
          createAt: '2018-01-08',
          name: 'test1',
          content: 'Hello world!'
        },
        {
          createAt: '2018-01-08',
          name: 'test1',
          content: 'Hello world!'
        },
        {
          createAt: '2018-01-08',
          name: 'test1',
          content: 'Hello world!'
        }
      ]
    }
  }
}
</script>
<style>
</style>
