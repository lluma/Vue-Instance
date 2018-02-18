<template>
  <div class="">
    <h3>&nbsp;&nbsp;&nbsp;&nbsp;Resources</h3>
    <h6>&nbsp;&nbsp;Graduate Application</h6>
    <div class="">
      <ul class="list-group" v-for="(r, index) in resources">
        <ResourcesItem
          :name="r.name"
          :description="r.description"
          :refSite="r.refSite"
          :key="index"
        />
      </ul>
    </div>
    <br>
    <h6>&nbsp;&nbsp;Student Internship</h6>
  </div>
</template>
<script>
import ResourcesItem from './ResourcesItem.vue'
export default {
  data () {
    return {
      resources: [
        {
          name: 'IGS',
          description: '象電子股份有限公司',
          refSite: 'https://www.104.com.tw/jobbank/custjob/index.php?r=cust&j=5a70422634363f5631323a635264361b8624a4225405c3e212121211e382b2625381j97&jobsource=freshman2009'
        },
        {
          name: 'HTC',
          description: '宏達電',
          refSite: 'http://www.htc.com/tw/working/'
        }
      ]
    }
  },
  components: {
    ResourcesItem
  }
}
</script>
<style>
.list-group {
  padding: 5px 10px 5px 10px
}
</style>
