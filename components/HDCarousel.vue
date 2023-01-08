<template>
  <div>
    <carousel
      :items="1"
      :stagePadding="30"
      :margin="10"
      :nav="false"
      :center="true"
      :startPosition="2"
      :autoWidth="true"
    >
      <div v-for="slide in ReviewerContent.testimonialsContent" :key="slide.fields.reviewerName">
        <CarouselItem
          :src="slide.fields.reviewerImage.fields.file.url"
          :alt="slide.fields.imageAlt"
          :reviewComment="slide.fields.reviewcomment"
          :reviewerName="slide.fields.reviewerName"
        />
      </div>
    </carousel>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import ContentfulRequests from "~/plugins/contentfulRequest";
import CarouselItem from "../components/CarouseItem.vue";
const contentfulRequest = new ContentfulRequests()
@Component({
  components: {
    CarouselItem,
  },
  data() {
    return {ReviewerContent: []};
  },
  async fetch() {
    let testimonialsContent =
      (await contentfulRequest.getHolidayDeviceHomeTestimonialsContent()) || {};
    this.$data.ReviewerContent = testimonialsContent;
  },
})
export default class HDCarousel extends Vue {
[x: string]: any;
}
</script>