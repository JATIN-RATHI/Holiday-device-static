<template>
  <div>
    <b-carousel
      id="carousel-fade"
      v-model="slideNo"
      :interval="4000"
      fade
      controls
      indicators
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart()"
      @sliding-end="onSlideEnd()"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        class="slideshow-slide"
        v-for="slide in slides"
        :key="slide + 1"
        :img-src="slide.fields.file.url"
      >
      <h1>{{ title }}</h1>
      <h2>{{ slide.fields.title }}</h2>
      <p>{{ slide.fields.description }}</p>
      <button @click="openModal">Book Now!</button>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { BCarousel, BCarouselSlide } from 'bootstrap-vue'
import { emitter } from '@/utils/emitter'
@Component({
    components:{
        BCarousel,
        BCarouselSlide,
    },
    data() {
      return {
        slideNo: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slideNo) {
        this.$data.sliding = true
      },
      onSlideEnd(slideNo) {
        this.$data.sliding = false
      },
      openModal() {
          emitter.emit('enquiryFormModal')
      }
    }
})
export default class HomeSlideshowTop extends Vue{
    @Prop({ type: Array, required: true })
    slides?: any[]

    @Prop({ type:String, required: true})
    title?: String
}
</script>

<style>
.slideshow-slide h1, h2, p, button{
    display: flex;
}
.slideshow-slide button{
    background: transparent;
    color: yellow;
    border: 2px solid yellow;
    border-radius: 12px;
}
.slideshow-slide button:hover{
    color: rgb(218, 218, 26);
}
@media (max-width: 768px){
    .slideshow-slide h1{
        font-size: 1rem;
    }
    .slideshow-slide h2{
        font-size: .89rem;
    }
    .slideshow-slide p{
        font-size: .59rem;
        margin-bottom: -10px;
    }
    .slideshow-slide button{
        margin-top: 1rem;
        margin-bottom: -1.5rem;
        font-size: 0.59rem;
    }
}
</style>