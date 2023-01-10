<template>
  <div>
    <NavbarHomeVue />
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
    <h2 class="container card-heading justify-content-center my-5">Our Tour Package</h2>
    <SeasonPackageCards />
    <!-- <h2 class="container card-heading justify-content-center my-5" id="testimonials">Our Customer Reviews</h2>     -->
    <!-- <ReviewsCards /> -->
    <!-- <HDCarousel /> -->
    <div>
      <enquiryForm />
      <a href="https://wa.me/+919910903878" target="_blank">
        <img id="quickchat" src="//images.ctfassets.net/8053dpll6ke8/6NRlk4c2TkubvMuDrom6UH/10b115063cad404a095a26221f78f9f7/contactus.gif" alt="quickchat"></img>
      </a>
    </div>    
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
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'
import { emitter } from '@/utils/emitter'
import apiCall from '~/services/apiCall'
import enquiryForm from '~/components/modals/enquiryFormModal.vue'
import HDCarousel from '~/components/HDCarousel.vue'

library.add(fas)
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
    FontAwesomeIcon,
    apiCall,
    enquiryForm,
    HDCarousel
  },
  mounted(){
    this.$data.showModal = true;
    emitter.on('enquiryFormModal', this.$data.show)
  },
  async asyncData() {
    const slideshowContent = (await contentfulRequest.getHolidayDeviceHomeSlideshowContent()) || {}
    return slideshowContent 
  }  
})
export default class HolidayDevice extends Vue{
[x: string]: any
  data() {
      return {
        loading: false,
        showModal: false,
        name: '',
        mobile: '',
        email: '',
        description: ''
      }
    }
}
</script>
<style>
.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
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
.modal-vue .overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
}
#field {
    width: 90%;
    margin: 1rem;
    padding: 0.5rem;
}
#quickchat{
  width: 3rem;
  position: fixed;
  display: block;
  top: 100%;
  right: -3rem;
  left: inherit;
  z-index: 1;
  margin-top: -8.25rem;
  transform-origin: 100% 100% 0;
  animation: btn-slide .5s ease-out 1.4s forwards;
}
@keyframes btn-slide {
  100% {
    right: 0;
  }
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
