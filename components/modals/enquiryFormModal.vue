<template>
  <div class="container">
    <div v-if="loading" class="spinner"></div>
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
  data() {
    return {
      loading: false,
      showModal: false,
      name: "",
      phone: "",
      email: "",
      description: "",
      error: null,
    };
  },
  methods: {
    show() {
      this.$data.showModal = true;
      $("body").css("overflow", "hidden");
    },
    hide() {
      this.$data.showModal = false;
      $("body").css("overflow", "scroll");
    },
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
        console.log("form response: ", JSON.parse(response.config.data));
      } catch (error) {
        this.$data.error = error.response.data.error;
        console.log(this.$data.error)
      }
    },
  },
  mounted() {
    this.$data.showModal = true;
    emitter.on("enquiryFormModal", this.$data.show);
  },
})
export default class enquiryForm extends Vue {
[x: string]: any;
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
.submitBtn {
  font-size: 1.2rem;
  background-color: #ea7272f0;
  padding: 10px;
  color: white;
  border-color: #ea7272f0;
}
</style>