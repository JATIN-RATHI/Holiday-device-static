<template>
  <div>
    <NavbarHome />
    <div class="hero-package">
      <img
        src="//images.ctfassets.net/8053dpll6ke8/5jwlFUsYy9qUh52iMhklrH/6bae5731a211c80c834f3c19ceea890e/kashmir_slideshow.jpg"
        alt="bkg-img"
      />
      <h1>{{ dataWithSlug.fields.displayTitle }} Tour Packages</h1>
    </div>
    <div class="container">
      <div
        class="tour-card my-5 container"
        v-for="TourPackage in dataWithSlug.fields.packageSection"
        :key="TourPackage.fields.packageName"
      >
        <img
          class="image-box"
          :src="TourPackage.fields.cardImage.fields.file.url"
          :alt="TourPackage.fields.packageName"
        />
        <div class="m-3">
          <div class="card-badge">
            <span v-if="TourPackage.fields.isGroupTour" class="danger px-2"
              >Group Tour</span
            >
            <span v-if="TourPackage.fields.isFamilyTour" class="success px-2"
              >Family</span
            >
            <span v-if="TourPackage.fields.isCoupleTour" class="warning px-2"
              >Couples</span
            >
            <span
              v-if="TourPackage.fields.isSeniorsCitizenTour"
              class="info px-2"
              >Senior's Special</span
            >
          </div>
          <h2>{{ TourPackage.fields.packageName }}</h2>
          <p>{{ TourPackage.fields.duration }}</p>
          <div class="my-2">
            <FontAwesomeIcon class="icon-thread" icon="fa-plate-wheat" />
            <FontAwesomeIcon
              class="icon-thread"
              icon="fa-building-circle-check"
            />
            <FontAwesomeIcon class="icon-thread" icon="fa-truck-plane" />
          </div>
          <div class="path d-flex">
            <FontAwesomeIcon class="icon-tour" icon="fa-location-dot" />
            <h5>{{ TourPackage.fields.tripStarts }}</h5>
            <FontAwesomeIcon
              v-if="TourPackage.fields.tripVia"
              class="icon-dot"
              icon="fa-ellipsis"
            />
            <FontAwesomeIcon
              v-if="TourPackage.fields.tripVia"
              class="icon-tour"
              icon="fa-location-dot"
            />
            <h5 v-if="TourPackage.fields.tripVia">
              {{ TourPackage.fields.tripVia }}
            </h5>
            <FontAwesomeIcon class="icon-dot" icon="fa-ellipsis" />
            <FontAwesomeIcon class="icon-tour" icon="fa-location-dot" />
            <h5>{{ TourPackage.fields.tripEnds }}</h5>
          </div>
        </div>
        <div class="button-class">
          <a
            :href="`/destinations/package/${TourPackage.fields.packageSlug}`"
            ><button class="btn-details">View Details</button></a
          >
          <br />
          <a @click="show()"
            ><button class="btn-enquire">Enquire Now</button></a
          >
        </div>
      </div>
    </div>
    <div>
      <enquiryForm />
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
import { Vue, Component, Prop } from "vue-property-decorator";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import NavbarHome from "~/components/NavbarHome.vue";
import Footerbase from "~/components/Footerbase.vue";
import ContentfulRequests from "~/plugins/contentfulRequest";
import $ from "jquery";
import enquiryForm from "~/components/modals/enquiryFormModal.vue";
import { emitter } from "~/utils";
library.add(fas);
const contentfulRequest = new ContentfulRequests();
@Component({
  components: {
    FontAwesomeIcon,
    NavbarHome,
    Footerbase,
    enquiryForm,
  },
  data() {
    return {
      packageSlug: "",
    };
  },
  methods: {
    readMore() {
      this.$data.tableOpen = !this.$data.tableOpen;
      var dots = document.getElementById("dots");
      var moreText = document.getElementById("more");
      var btnText = document.getElementById("myBtn");
      var iconDown = document.getElementById("down");
      var iconUp = document.getElementById("up");

      if (dots && iconDown && btnText && moreText && iconUp) {
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          iconDown.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
          iconUp.style.display = "none";
        } else {
          dots.style.display = "none";
          iconDown.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
          iconUp.style.display = "inline";
        }
      }
    },
    show(){
      emitter.emit("enquiryFormModal")
    }
  },
  async asyncData({ params }) {
    const slug = params.place;
    const dataWithSlug =
      (await contentfulRequest.getPageDataBySlug(slug)) || {};
    return { dataWithSlug, slug };
  },
})
export default class place extends Vue {
  [x: string]: any;
}
</script>
<style scoped>
.hero-package {
  position: relative;
  text-align: center;
}
.hero-package img {
  width: 100%;
}
.hero-package h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.hero-special {
  display: block;
}

.table {
  background: #f5f5dcb5;
}

#myBtn {
  color: #0066ff;
}

.card-badge {
  font-weight: 500;
  color: white;
  border-radius: 50px;
}

.danger {
  background: #db08088c;
  border-radius: 50px;
}

.success {
  background: green;
  border-radius: 50px;
}

.warning {
  background: yellow;
  color: black;
  border-radius: 50px;
}

.info {
  background: blue;
  border-radius: 50px;
}

#more,
#up {
  display: none;
}

.speciality-blog {
  width: 100%;
}

.div-image {
  background-image: url("https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp");
  width: 100%;
  background-repeat: no-repeat;
  display: none;
}

.div-image-sm {
  background-image: url("https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp");
  width: 100%;
  background-repeat: round;
}

.tour-card {
  border: 2px solid gray;
  justify-content: space-between;
  border-radius: 50px;
  padding: 5px;
}

.tour-card p {
  color: #00000099;
}

.btn-details {
  background: #ea7272f0;
  border: 2px solid #ea7272f0;
  padding: 10px 50px 10px 50px;
  border-radius: 50px;
  font-weight: 500;
  color: white;
}

.btn-enquire {
  background: white;
  border: 2px solid #ea7272f0;
  padding: 10px 48px 10px 48px;
  border-radius: 50px;
  font-weight: 500;
}

.image-box {
  border-radius: 50px;
}

.icon-thread {
  margin-right: 80px;
  font-size: 30px;
  color: #0000006b;
}

.icon-dot {
  color: #0000006b;
  height: 1.25rem;
  margin: auto;
}

.icon-tour {
  height: 1.25rem;
  margin: 0 5px 0 5px;
}

.path {
  justify-content: space-between;
}

.path h5 {
  color: #0000006b;
}

@media (min-width: 992px) {
  .hero-special {
    display: flex;
  }

  .speciality-blog {
    width: 60%;
  }

  .div-image {
    width: 40%;
    display: block;
  }
}

.modal-vue .overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

#field {
  width: 90%;
  margin: 1rem;
  padding: 0.5rem;
}

.modal-vue .modal {
  position: fixed;
  align-items: center;
  height: 550px;
  max-width: 450px;
  min-width: 310px;
  left: 50%;
  top: 9%;
  z-index: 9999;
  margin: 0 auto;
  padding: 20px 30px;
  border-radius: 15px;
  background-color: #fff;
  transform: translateX(-50%);
}

.modal-vue .close {
  position: absolute;
  top: 10px;
  right: 10px;
}

#sideButton {
  background-color: #ea7272f0;
  border: white;
  color: white;
  height: 3rem;
  font-size: 1.5rem;
  position: fixed;
  display: block;
  top: 50%;
  right: -3rem;
  left: inherit;
  width: 10.5rem;
  height: 3rem;
  z-index: 1;
  margin-top: -8.25rem;
  transform: rotate(270deg);
  transform-origin: 100% 100% 0;
  animation: btn-slide 0.5s ease-out 1.4s forwards;
}

@keyframes btn-slide {
  100% {
    right: 0;
  }
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
  animation: btn-slide 0.5s ease-out 1.4s forwards;
}

.submitBtn {
  font-size: 1.2rem;
  background-color: #ea7272f0;
  padding: 10px;
  color: white;
  border-color: #ea7272f0;
}

.hero-special {
  display: block;
}

.table {
  background: #f5f5dcb5;
}

#moreBtn,
#lessBtn {
  color: #0066ff;
  cursor: pointer;
}

.card-badge {
  font-weight: 500;
  color: white;
  border-radius: 50px;
}

.danger {
  background: #db08088c;
  border-radius: 50px;
}

.success {
  background: green;
  border-radius: 50px;
}

.warning {
  background: yellow;
  color: black;
  border-radius: 50px;
}

.info {
  background: blue;
  border-radius: 50px;
}

#more,
#up,
#lessBtn {
  display: none;
}

.speciality-blog {
  width: 100%;
}

.div-image {
  background-image: url("https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp");
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: none;
}

.div-image-sm {
  background-image: url("https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp");
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
}

.tour-card {
  display: block;
  border: 2px solid gray;
  justify-content: space-between;
  border-radius: 50px;
  padding: 5px;
}

.tour-card p {
  color: #00000099;
}

.btn-details {
  background: #ea7272f0;
  border: 2px solid #ea7272f0;
  padding: 10px 50px 10px 50px;
  border-radius: 50px;
  font-weight: 500;
  margin: auto;
  color: white;
}

.btn-enquire {
  background: white;
  border: 2px solid #ea7272f0;
  padding: 10px 48px 10px 48px;
  border-radius: 50px;
  font-weight: 500;
  margin: auto;
}

.image-box {
  border-radius: 50px;
  width: 100%;
}

.icon-thread {
  margin-right: 45px;
  font-size: 30px;
  color: #0000006b;
}

.icon-dot {
  color: #0000006b;
  height: 1rem;
  margin: 4px;
}

.icon-tour {
  height: 1rem;
  margin: 0 5px 0 5px;
}

.path h5 {
  color: #0000006b;
  font-size: 0.79rem;
}

.button-class {
  display: block;
  justify-content: space-around;
  margin: 0;
  margin-bottom: 0.5rem;
}

.button-class a {
  text-decoration: none;
}

@media (min-width: 576px) {
  .path h5 {
    font-size: inherit;
  }

  .icon-dot {
    color: #0000006b;
    height: 1.25rem;
    margin: 8px;
  }

  .icon-tour {
    height: 1.25rem;
    margin: 0 5px 0 5px;
  }

  .button-class {
    display: flex;
  }

  .button-class br {
    display: none;
  }
}

@media (min-width: 992px) {
  .icon-thread {
    margin-right: 80px;
  }

  .path {
    justify-content: space-between;
  }

  .button-class {
    display: block;
    justify-content: center;
    margin: 1rem;
  }

  .btn-details,
  .btn-enquire {
    margin: 1rem;
  }

  .tour-card {
    display: flex;
  }

  .hero-special {
    display: flex;
  }

  .speciality-blog {
    width: 60%;
  }

  .div-image {
    width: 40%;
    display: block;
  }

  .image-box {
    width: 30%;
  }
}
</style>