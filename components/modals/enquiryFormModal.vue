<template>
  <div class="container">
    <div v-if="loading" class="spinner"></div>
    <div v-if="enquirySubmitted" class="thankyou-modal text-center d-grid">
      <a
          id="close"
          style="cursor: pointer; padding-left: 100%"
          @click="hideThankyouModal()"
          ><FontAwesomeIcon icon="x" />
        </a>
      <h2 class="justify-content-center">Quick Enquiry</h2>
      <img
        src="https://images.ctfassets.net/8053dpll6ke8/2GVVmGMtNULVRuN5Ckr2pI/127432a9a4f342929b71067178f584d2/thankyou.gif?h=250"
        alt="thankyou gif"
      />Our agent will reach you asap!
      <button @click="thankyouExploreBtn()" class="submitBtn mx-auto">
        Explore Packages
      </button>
    </div>
    <div v-if="errorSubmission" class="thankyou-modal text-center d-grid">
      <a
          id="close"
          style="cursor: pointer; padding-left: 100%"
          @click="hideErrorModal()"
          ><FontAwesomeIcon icon="x" />
        </a>
      <h2 class="justify-content-center">Quick Enquiry</h2>
      <img
        src="https://images.ctfassets.net/8053dpll6ke8/5XjDfG4GLXrz2At7LxVtR2/35a43bf7510e15abb458aa5f1bcd3d46/submission_error.gif?h=250"
        alt="submission failed gif"
      />
      Can't submit the form at this moment!
      <button @click="errorCallBtn()" class="submitBtn mx-auto">
        Call us!
      </button>
      <button @click="thankyouExploreBtn()" class="submitBtn mx-auto">
        Explore Packages
      </button>
    </div>
    <button id="sideButton" @click="show()">Quick Enquiry</button>
    <div v-if="showModal" class="modal-vue">
      <div class="overlay" @click="hide()"></div>
      <div
        class="
          modal
          o-section
          container
          d-block
          justify-content-center
          align-items-center
          text-center
        "
      >
        <a
          id="close"
          style="cursor: pointer; padding-left: 100%"
          @click="hide()"
          ><FontAwesomeIcon icon="x" />
        </a>
        <h2 class="justify-content-center">Quick Enquiry</h2>
        <form>
          <input
            id="field"
            type="text"
            name="name"
            v-model="name"
            placeholder="Full Name"
          />
          <input
            id="field"
            type="text"
            maxlength="10"
            v-model="phone"
            placeholder="XXXX-XXX-XXX"
          />
          <input
            id="field"
            type="text"
            v-model="email"
            placeholder="Email ID"
          />
          <textarea
            id="field"
            name="description"
            v-model="description"
            cols="30"
            rows="4"
            placeholder="Describe your enquiry we'll get back to you asap!"
          ></textarea>
        </form>
        <button @click="submitFORM()" class="submitBtn mx-auto">
          Submit Enquiry
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";
import apiCall from "~/services/apiCall";
import { emitter } from "~/utils";
library.add(fas);
@Component({
  components: {
    FontAwesomeIcon,
  },
})
export default class enquiryForm extends Vue {
  [x: string]: any;

  data() {
    return {
      loading: false,
      showModal: false,
      enquirySubmitted: false,
      errorSubmission: false,
      name: "",
      phone: "",
      email: "",
      description: "",
      error: null,
    };
  }
  show() {
    this.showModal = true;
    $("body").css("overflow", "hidden");
  }
  hideThankyouModal() {
    this.$data.enquirySubmitted = false
  }
  hideErrorModal(){
    this.$data.errorSubmission = false
  }
  hide() {
    this.$data.showModal = false;
    $("body").css("overflow", "scroll");
  }
  thankyouExploreBtn() {
    window.location.href = "/destinations";
  }
  errorCallBtn() {
    window.location.href = "tel:8130586075"
  }
  async submitFORM() {
    console.log(
      "submit form button is clicked",
      this.$data.name,
      this.$data.email
    );
    try {
      const response = await apiCall.enquiryFormSubmit({
        name: this.$data.name,
        phone: this.$data.phone,
        email: this.$data.email,
        description: this.$data.description,
      });
      this.hide()
      this.$data.enquirySubmitted = true;
      console.log("form response: ", JSON.parse(response.config.data));
    } catch (error) {
      this.hide()
      this.$data.errorSubmission = true;
      this.$data.error = error.response.data.error;
      console.log(this.$data.error);
    }
  }
  mounted() {
    this.$data.showModal = true;
    emitter.on("enquiryFormModal", this.show);
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
#enquiryform {
  height: 60%;
  width: 30%;
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
.modal-vue .modal,
.thankyou-modal {
  position: fixed;
  align-items: center;
  height: 550px;
  max-width: 450px;
  min-width: 310px;
  left: 50%;
  top: 5%;
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
.submitBtn {
  font-size: 1.2rem;
  background-color: #ea7272f0;
  padding: 10px;
  color: white;
  border-color: #ea7272f0;
}
</style>