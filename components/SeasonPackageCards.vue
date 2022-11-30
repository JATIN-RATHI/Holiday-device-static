<template>
  <!-- Gallery -->
  <div class="row container mx-auto">
    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
      <a href="/destinations/place/uttrakhand-tour" class="tour-img-home">
        <!-- href will be package slug of package card details -->
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />   
        <h3 class="image-text">Uttrakhand Tour</h3>     
      </a>

      <a href="/destinations/place/himachal-tour" class="tour-img-home">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Wintry Mountain Landscape"
        />
        <h3 class="image-text">Himachal Tour</h3>
      </a>
    </div>

    <div class="col-lg-4 mb-4 mb-lg-0">
      <a href="/destinations/place/leh-ladakh-tour" class="tour-img-home">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Mountains in the Clouds"
        />
        <h3 class="image-text">Ladakh Tour</h3>
      </a>

      <a href="/destinations/place/kerela-tour" class="tour-img-home">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Boat on Calm Water"
        />
        <h3 class="image-text">Kerela Tour</h3>
      </a>
    </div>

    <div class="col-lg-4 mb-4 mb-lg-0">
      <a href="/destinations/place/goa-tour" class="tour-img-home">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Waves at Sea"
        />
        <h3 class="image-text">Goa Tour</h3>
      </a>

      <a href="/destinations/place/kashmir-tour" class="tour-img-home">        
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
          class="w-100 shadow-1-strong rounded mb-4"
          alt="Yosemite National Park"
        />
        <h3 class="image-text">Kashmir Tour</h3>
      </a>
    </div>
  </div>
  <!-- Gallery -->
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ContentfulRequest from "~/plugins/contentfulRequest";
const contentfulRequest = new ContentfulRequest();
@Component({
  components: {},
  data() {
    return {
      packageContent: [],
    };
  },
  async fetch() {
    const packageContent =
      (await contentfulRequest.getHolidayDeviceHomeSeasonPackageContent()) ||
      {};
    this.$data.packageContent = packageContent;
  },
})
export default class SeasonPackageCards extends Vue {}
</script>
<style>
/* .tour-img-home img:hover {
  filter: blur(5px);
} */
/* .tour-img-home img:hover h3 {
  visibility: visible;
} */
/* .image-text {
  position: absolute;
  transform: translate(140px, 115px);
  visibility: hidden;
} */

.tour-img-home {
  position: relative;
  height: 200px;
  width: 257px;
}
.image-text {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  visibility: hidden;
  opacity: 0;

  /* transition effect. not necessary */
  transition: opacity .2s, visibility .2s;
}
.tour-img-home:hover img{
  filter: blur(5px);
}
.tour-img-home:hover .image-text {
  visibility: visible;
  opacity: 1;
}

.tour-img-home h3 {
    text-align: center;
    margin-left: 80px;
    width: inherit;
}
</style>