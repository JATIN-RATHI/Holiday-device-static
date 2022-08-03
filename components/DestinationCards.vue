<template>
    <div class="container d-flex mt-4 mb-4 justify-content-between">
        <b-card
            title="Card Title"
            img-src="//images.ctfassets.net/8053dpll6ke8/730EwdvL40gtekrjFEdN1k/48617232021a71c1aa9947ec406b1d4f/manaliPackageImg.png"
            img-alt="Image"
            img-top
            tag="article"
            class="card mb-2"
        >
            <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary" class="bookNowBtn">Book Now!</b-button>
        </b-card>
        <b-card
            title="Card Title"
            img-src="//images.ctfassets.net/8053dpll6ke8/2VZZaR3Nai0k0z6y1MhPjG/1f3f5ca9086bb699b2f52b6175cab5d8/spitiValleyPackageImage.jpg"
            img-top
            tag="article"
            class="card mb-2"
        >
            <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary" class="bookNowBtn">Book Now!</b-button>
        </b-card>
        <b-card
            title="Card Title"
            img-src="//images.ctfassets.net/8053dpll6ke8/6dKmeb2wCqtc3IScUWbOw/ca9b06f47c4ba8357d1ef23d3fb5cf43/RajasthanPackageImage.jpg"
            img-top
            tag="article"
            class="card mb-2"
        >
            <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary" class="bookNowBtn">Book Now!</b-button>
        </b-card>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { BCard, BCardText, BCardGroup } from 'bootstrap-vue'
@Component({
    components:{
        BCard,
        BCardText,
        BCardGroup
    },
})
export default class DestinationCards extends Vue{
    data(){
        return{

        }
    }
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
        width: 15rem;
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