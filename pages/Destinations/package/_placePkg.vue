<template>
  <div>
    <NavbarHome />
    <div class="container" id="itineraryContent">
      <div class="border-bottom mb-4">
        <h1>{{ dataWithSlug.fields.destinationName }}</h1>
        <p class="mb-4">
          <FontAwesomeIcon class="icon-tour" icon="fa-calendar-days" />
          {{ dataWithSlug.fields.destinationDuration }}
        </p>
      </div>
      <div class="hero-package">
        <img
          :src="dataWithSlug.fields.destinationImage.fields.file.url"
          :alt="dataWithSlug.fields.destinationImage.fields.file.title"
        />
      </div>
      <div>
        <div class="stickey">
          <ul class="toggler-cls d-flex">
            <li class="active toggler" id="overviewToggle">
              <a
                @click="
                  scrollToSection('overview'), addClassActive('overviewToggle')
                "
                >Overview</a
              >
            </li>
            <li class="toggler" id="itineraryToggle">
              <a
                @click="
                  scrollToSection('itinerary'),
                    addClassActive('itineraryToggle')
                "
                >Itinerary</a
              >
            </li>
            <li class="toggler" id="detailPriceToggle">
              <a
                @click="
                  scrollToSection('detailPrice'),
                    addClassActive('detailPriceToggle')
                "
                >Detailed Price</a
              >
            </li>
            <li class="toggler" id="tourInfoToggle">
              <a
                @click="
                  scrollToSection('tourInfo'), addClassActive('tourInfoToggle')
                "
                >Tour Information</a
              >
            </li>
            <li>
                <a :href="dataWithSlug.fields.itineraryPdf.fields.file.url" target="blank">
            <FontAwesomeIcon icon="fa-print" />
          </a>
            </li>
          </ul>
        </div>
        <div id="overview" class="border-bottom">
          <h2 class="heading-itinerary">Overview</h2>
          <p>{{ dataWithSlug.fields.overview }}</p>
        </div>
        <div id="itinerary" class="border-bottom">
          <h2 class="heading-itinerary">Itinerary</h2>
          <iframe
            title="HolidayDeviceMap"
            width="100%"
            height="300"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Holiday%20Device,%20H%20No-126,%20Kadipur,%20Kushak%20Colony,%20Kadipur,%20Delhi,%20110036+(Holiday%20Device)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
          </iframe>
          <div
            v-for="dayPath in dataWithSlug.fields.itinerarySection"
            :key="dayPath.fields.id"
            class="card-itinerary p-2"
          >
            <div id="dayItinerary">
              <h4>{{ dayPath.fields.dayCount }}</h4>
            </div>
            <img
              class="loc-gif"
              src="https://images.ctfassets.net/8053dpll6ke8/2K3w7t3LEfciIxQ40Wk7El/fc1a61bdff902f2cf362180f5fad16cc/giphy.gif?h=250"
              alt="LocGif"
            />
            <div class="details">
              <h4 class="heading-itinerary">
                {{ dayPath.fields.packageName }}
              </h4>
              <b-collapse
                v-if="dayPath.fields.isActive"
                visible
                :id="'collapse-' + dayPath.fields.id"
              >
                <p class="paraBorder mb-0">
                  {{ dayPath.fields.dayDescription }}
                </p>
                <img
                  v-if="dayPath.fields.packageImage"
                  class="dayPath-img paraBorder"
                  :src="dayPath.fields.packageImage.fields.file.url"
                  :alt="dayPath.fields.packageImage.fields.file.title"
                />
              </b-collapse>
              <b-collapse v-else :id="'collapse-' + dayPath.fields.id">
                <p class="paraBorder mb-0">
                  {{ dayPath.fields.dayDescription }}
                </p>
              </b-collapse>
            </div>
            <a v-b-toggle="'collapse-' + dayPath.fields.id" class="btn-collapse"
              ><FontAwesomeIcon icon="fa-down-left-and-up-right-to-center"
            /></a>
          </div>
        </div>
        <div id="detailPrice" class="border-bottom">
          <h2 class="heading-itinerary">Detailed Price</h2>
          <p
            class="justify-content-center my-4"
            v-html="richtextToHTML(dataWithSlug.fields.detailedPriceTable)"
          ></p>
        </div>
        <div id="tourInfo" class="border-bottom">
          <h2 class="heading-itinerary">Tour Information</h2>
          <b-tabs>
            <b-tab title="Inclusions" active
              ><p v-html="richtextToHTML(dataWithSlug.fields.inclusions)"></p
            ></b-tab>
            <b-tab title="Exclusions"
              ><p v-html="richtextToHTML(dataWithSlug.fields.exclusions)"></p
            ></b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
    <Footerbase />
  </div>
</template>
<script>
import { Vue, Component } from "vue-property-decorator";
import NavbarHome from "~/components/NavbarHome.vue";
import Footerbase from "~/components/Footerbase.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { jsPDF } from "jspdf";
import ContentfulRequests from "~/plugins/contentfulRequest";
import $ from "jquery";

const contentfulRequest = new ContentfulRequests();
const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => `<b>${text}</b>`,
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) =>
      `<img class="img-fluid" src="${node.data.target.fields.file.url}" height="${node.data.target.fields.file.details.image.height}" width="${node.data.target.fields.file.details.image.width}" alt="${node.data.target.fields.description}"/>`,
  },
};

library.add(fas);
@Component({
  components: {
    NavbarHome,
    FontAwesomeIcon,
    Footerbase,
  },
  data() {
    return {
      content: "",
    };
  },
  methods: {
    scrollToSection(sectionNo) {
      const section = document.getElementById(sectionNo);
      section?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    },
    addClassActive(toggleId) {
      const toggle = document.getElementById(toggleId);
      this.cancelActive();
      $(toggle).addClass("active");
    },
    cancelActive() {
      $(".toggler").removeClass("active");
    },
    richtextToHTML(content) {
      return documentToHtmlString(content, options);
    },
  },
  async asyncData({ params }) {
    const dataWithSlug =
      (await contentfulRequest.getPageDataByPackageSlug(params.placePkg)) || {}
    return { dataWithSlug }
  },
  mounted() {
    const doc = new jsPDF('p', 'mm', [297, 210]);

    $("#downloadBtn").click(function () {
      doc.html(document.body, {
        callback: function (doc) {
          doc.save('HolidayDeviceItinerary.pdf');
        },
        x: 15,
        y: 15,
      });
    });
  },
})
export default class PlacePackage extends Vue {}
</script>
<style>
.richText-cls li {
  font-weight: 400;
}
.hide {
  display: none !important;
}
.show {
  display: block !important;
}
.btn-collapse {
  color: #f34848;
}
.card-itinerary {
  display: flex;
}
.icon-tour {
  color: #c56868f0;
  width: 25px;
  height: 22px;
}
.hero-package img {
  width: 100%;
}
.heading-itinerary {
  color: #343a40;
}
.btn-collapse {
  cursor: pointer;
}
.stickey {
  position: sticky;
  top: 0;
}
.toggler-cls {
  list-style: none;
  background: white;
  position: sticky;
  border-bottom: 1px solid #80808026;
  top: 0;
  overflow-x: scroll;
}
.toggler-cls::-webkit-scrollbar {
  display: none;
}

.toggler-cls li {
  padding: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  white-space: nowrap;
}

.active {
  font-size: 1.3rem;
  font-weight: 500;
  border-bottom: 3px solid #c56868f0;
}

#dayItinerary {
  width: 100%;
}
.details {
  width: 235%;
}
.details h4 {
  padding-left: 11%;
}
.paraBorder::before {
  content: "";
  padding: 7%;
  margin-left: -25px;
  border-left: 2px dashed #c56868f0;
}
.loc-gif {
  width: 50px;
  height: 50px;
  margin-top: -15px;
}
.dayPath-img {
  width: 80%;
  margin-left: 11%;
}
@media (min-width: 768px) {
  .dayPath-img {
    width: 50%;
  }
  .toggler-cls li {
    font-size: 1.7rem;
  }
}
</style>