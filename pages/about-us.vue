<template>
  <div>
    <NavbarHome />
    <div
      class="container text-center d-flex bio-card p-3"
      v-for="bio in pageContent.fields.bioSection"
      :key="bio.fields.name"
    >
      <img
        class="p-3 img-card"
        :src="bio.fields.picture.fields.file.url"
        :alt="bio.fields.name"
      />
      <div class="px-2 content-card">
        <h2 class="justify-content-center py-2">{{ bio.fields.name }}</h2>
        <p>{{ bio.fields.bio }}</p>
        <a
          :href="`tel:${bio.fields.contactNumber1}`"
          class="justify-content-center d-block"
          ><FontAwesomeIcon class="icon-phone" icon="fa-phone" />+91-{{
            bio.fields.contactNumber1
          }}</a
        >
        <a
          v-if="bio.fields.contactNumber2"
          :href="`tel:${bio.fields.contactNumber2}`"
          class="justify-content-center d-block"
          ><FontAwesomeIcon class="icon-phone" icon="fa-phone" />+91-{{
            bio.fields.contactNumber2
          }}</a
        >
        <a :href="`mailto:${bio.fields.emailId}`"
          ><FontAwesomeIcon class="icon-phone" icon="fa-envelope" />{{
            bio.fields.emailId
          }}</a
        >
      </div>
    </div>
    <div class="container text-center justify-content-center py-4">
      <h2 class="justify-content-center">
        Checkout Our&nbsp;<img
          class="yt-button"
          src="https://images.ctfassets.net/8053dpll6ke8/2RgDegNfoxGy6qIuya0qrE/c50ac3a380a49cbb7a4585fb31f77bbd/youtube-img.png?h=250"
          alt="Youtube Button"
        />&nbsp;Content
      </h2>
      <a href="https://www.youtube.com/@holidaydevice" target="blank"
        ><img
          class="yt-subscribe"
          src="https://images.ctfassets.net/8053dpll6ke8/3GidmELv5PSKnsUQVG9dI/81549fd1cef6964da68762890d81846b/subscribe_holiday_device.png?h=250"
          alt="subscribe to holiday device"
      /></a>
      <div
        v-for="src in pageContent.fields.youtubeSection"
        :key="src.fields.title"
        class="py-2"
      >
        <iframe
          class="yt-shorts"
          title="youtube-frame"
          width="320"
          height="560"
          :src="src.fields.youtubeLink"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
    <div>
      <a href="https://wa.me/+919910903878" target="_blank">
        <img
          id="quickchat"
          src="//images.ctfassets.net/8053dpll6ke8/6NRlk4c2TkubvMuDrom6UH/10b115063cad404a095a26221f78f9f7/contactus.gif"
          alt="quickchat"
        />
      </a>
    </div>
    <Footerbase />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavbarHome from "~/components/NavbarHome.vue";
import FooterbaseVue from "~/components/Footerbase.vue";
import ContentfulRequests from "~/plugins/contentfulRequest";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
const contentfulRequest = new ContentfulRequests();

@Component({
  components: {
    NavbarHome,
    FooterbaseVue,
    FontAwesomeIcon,
  },
  data() {
    return {};
  },
  async asyncData({ params }) {
    const pageContent =
      (await contentfulRequest.getPageDataBySlug("about-us")) || {};
    return { pageContent }
  },
})
export default class AboutUs extends Vue {}
</script>
<style>
.yt-button {
  height: 27px;
}
.yt-shorts {
  border: 5px solid #6200ff7d;
}
.yt-subscribe {
  width: 310px;
}
.yt-subscribe:hover {
  border-right: 4px solid rgb(224, 62, 62);
  border-left: 4px solid rgb(224, 62, 62);
  border-radius: 25px;
}
.bio-card {
  background: #4096e012;
}
.img-card,
.content-card {
  background: #fff;
}
.icon-phone {
  width: 25px;
  height: 15px;
}
#quickchat {
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
@media (min-width: 768px) {
  .yt-subscribe {
    width: 380px;
  }
  .yt-button {
    height: 34px;
  }
}
</style>