<template>
    <div class="container d-flex mt-4 mb-4 justify-content-between">
        <b-card
            v-for="card in packageCardContent.cardContent" :key="card.fields.packagename"
            :title=card.fields.packagename
            :img-src="card.fields.packageImage.fields.file.url"
            img-alt="Image"
            img-top
            tag="article"
            class="card mb-2"
        >
            <b-card-text style="color: #6c757d;font-weight: 500;">{{ card.fields.packageDays }} <br>{{ card.fields.packagePriceCard }}</b-card-text>
            <!-- <b-card-text>{{ card.fields.packageBriefDetail }}</b-card-text> -->
            <b-button href="#" variant="primary" class="bookNowBtn">Book Now!</b-button>
        </b-card>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { BCard, BCardText, BCardGroup } from 'bootstrap-vue'
import ContentfulRequest from '~/plugins/contentfulRequest'
const contentfulRequest = new ContentfulRequest()
@Component({
    components:{
        BCard,
        BCardText,
        BCardGroup
    },
    data(){
        return{
            packageCardContent: [],
        }
    },
    async fetch() {
        this.$data.packageCardContent = (await contentfulRequest.getHolidayDeviceHomeCardContent()) || {}
    }
})
export default class DestinationCards extends Vue{
    
}
</script>
<style>
.bookNowBtn {
    width: 100%;
}
.card{
    width: 100%;
}
.container{
    flex-direction: column;
}
@media (min-width: 768px){
    .card{
        width: 13rem;
    }
    .container{
    flex-direction: row;
}
}
@media (min-width: 992px){
    .card{
        width: 17rem;
    }
}
@media (min-width: 1200px){
    .card{
        width: 20rem;
    }
}
@media (min-width: 1400px){
    .card{
        width:25rem;
    }
}
  </style>