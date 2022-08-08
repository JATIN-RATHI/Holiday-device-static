<template>
  <div>
    <NavbarHomeVue></NavbarHomeVue>
    <div v-for="(item, index) in slideshowContent" :key="index">
      <HomeSlideshowTop 
        :slides="item.fields.backgroundSideshowImage"
        :title="item.fields.slideshowTitle"
      ></HomeSlideshowTop>
    </div>
    <DestinationCardsVue></DestinationCardsVue>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ContentfulRequest from '~/plugins/contentfulRequest'
import HomeSlideshowTop from '../components/HomeSlideshowTop.vue'
import NavbarHomeVue from '~/components/NavbarHome.vue'
import DestinationCardsVue from '~/components/DestinationCards.vue'

const contentfulRequest = new ContentfulRequest()

@Component({
  components: {
    HomeSlideshowTop,
    NavbarHomeVue,
    DestinationCardsVue,
  },
  async asyncData() {
    const slideshowContent = (await contentfulRequest.getHolidayDeviceHomeSlideshowContent()) || {}
    return slideshowContent 
  }
})
export default class HolidayDevice extends Vue{
  data() {
      return {
      }
    }
}
</script>
