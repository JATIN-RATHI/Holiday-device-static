<template>
    <div class="modal o-section container d-flex justify-content-center">
        <form id="enquiryform">   
            <a @click="showForm = false"><FontAwesomeIcon icon="x" /> </a>        
            <input id="field" type="text" placeholder="Full Name">
            <input id="field" type="number" maxlength="4" placeholder="XXXX-XXX-XXX">
            <input id="field" type="text" placeholder="Email ID">
            <textarea id="field" name="description" cols="30" rows="4" placeholder="Description about your enquiry we'll get back to you asap!"></textarea>
        </form>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
@Component({
    components:{
        FontAwesomeIcon,
    }
})
export default class enquiryForm extends Vue{
}
</script>

<style>
    #enquiryform {
        height: 60%;
        width: 30%;
    }
    #field {
        width: 100%;
        margin: 1rem;
        padding: 0.5rem;
    }
</style>