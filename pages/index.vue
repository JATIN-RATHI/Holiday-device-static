<template>
  <div>
    <NavbarHomeVue></NavbarHomeVue>
    <div v-for="(item, index) in slideshowContent" :key="index">
      <HomeSlideshowTop 
        :slides="item.fields.backgroundSideshowImage"
        :title="item.fields.slideshowTitle"
      />
    </div>
    <h4 class="container mt-4 mb-3" style="color: #6c757d;font-weight: 500;">Our Tour Includes...</h4>
    <TourIncludeSection />
    <h2 class="container card-heading justify-content-center my-5">Popular Destinations</h2>
    <DestinationCardsVue />
    <h2 class="container card-heading justify-content-center my-5">Season Tour Package</h2>
    <SeasonPackageCards />
    <h2 class="container card-heading justify-content-center my-5" id="testimonials">Our Customer Reviews</h2>
    <ReviewsCards />
    <Footerbase />
  </div>  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ContentfulRequest from '~/plugins/contentfulRequest'
import HomeSlideshowTop from '../components/HomeSlideshowTop.vue'
import NavbarHomeVue from '~/components/NavbarHome.vue'
import DestinationCardsVue from '~/components/DestinationCards.vue'
import TourIncludeSection from '~/components/TourIncludeSection.vue'
import SeasonPackageCards from '../components/SeasonPackageCards.vue'
import Footerbase from '../components/Footerbase.vue'
import ReviewsCards from '../components/ReviewsCards.vue'

const contentfulRequest = new ContentfulRequest()

@Component({
  components: {
    HomeSlideshowTop,
    NavbarHomeVue,
    DestinationCardsVue,
    TourIncludeSection,
    SeasonPackageCards,
    Footerbase,
    ReviewsCards,
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
<style>
.card-heading {
    position: relative;
    font-size: 1.5rem;
    z-index: 1;
    overflow: hidden;
    text-align: center;
}
.card-heading:before, .card-heading:after {
    position: absolute;
    top: 51%;
    overflow: hidden;
    width: 0%;
    height: 4px;
    content: '\a0';
    background-color: #ea7272f0;
}
.card-heading:before {
    margin-left: -68%;
    text-align: right;
}
h2:after {
    margin-right: -68%;
    text-align: right;
}
@media (min-width:768px){
  .card-heading:before, .card-heading:after {
    width: 13.5%;
  }
  .card-heading{
    font-size: 2rem;
  }
}
@media (min-width:992px){
  .card-heading:before, .card-heading:after {
    width: 20%;
  }
}
@media (min-width:1200px){
  .card-heading:before, .card-heading:after {
    width: 30%;
  }
}
</style>
