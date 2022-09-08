<template>
    <div>
        <div id="lg-screen">
            <div v-if="first" class="container justify-content-evenly align-items-center d-flex mb-5">
                <a href="#testimonials" @click="prevSlide()" class="arrow-icon"><FontAwesomeIcon icon="fa-angle-left" /></a>
                <div class="review-box text-center p-2">
                    <b-avatar :src="ReviewerContent.testimonialsContent[slideReviewNo].fields.reviewerImage.fields.file.url" size="6rem" />
                    <h5>{{ ReviewerContent.testimonialsContent[slideReviewNo].fields.reviewerName}}</h5>
                    <div class="ratings">
                        <FontAwesomeIcon icon="fa-star" />
                        <FontAwesomeIcon icon="fa-star" />
                        <FontAwesomeIcon icon="fa-star" />
                        <FontAwesomeIcon icon="fa-star" />
                        <FontAwesomeIcon icon="fa-star-half-stroke" />
                    </div>
                    <p>{{ ReviewerContent.testimonialsContent[slideReviewNo].fields.reviewcomment }}</p>
                </div>
                <div class="review-box text-center p-2">
                    <b-avatar :src="ReviewerContent.testimonialsContent[slideReviewNo + 1].fields.reviewerImage.fields.file.url" size="6rem" />
                    <h5>{{ ReviewerContent.testimonialsContent[slideReviewNo + 1].fields.reviewerName }}</h5>
                    <div class="ratings">
                        <FontAwesomeIcon icon="fa-star" />
                        <FontAwesomeIcon icon="fa-star" />
                        <FontAwesomeIcon icon="fa-star" />
                        <FontAwesomeIcon icon="fa-star" />
                        <FontAwesomeIcon icon="fa-star-half-stroke" />
                    </div>
                    <p>{{ ReviewerContent.testimonialsContent[slideReviewNo + 1].fields.reviewcomment }}</p>
                </div>
                <div class="review-box text-center p-2">
                    <b-avatar :src="ReviewerContent.testimonialsContent[slideReviewNo + 2].fields.reviewerImage.fields.file.url" size="6rem" />
                    <h5>{{ ReviewerContent.testimonialsContent[slideReviewNo + 2].fields.reviewerName }}</h5>
                    <div class="ratings">
                        <FontAwesomeIcon icon="fa-star" />
                        <FontAwesomeIcon icon="fa-star" />
                        <FontAwesomeIcon icon="fa-star" />
                        <FontAwesomeIcon icon="fa-star" />
                        <FontAwesomeIcon icon="fa-star-half-stroke" />
                    </div>
                    <p>{{ ReviewerContent.testimonialsContent[slideReviewNo + 2].fields.reviewcomment }}</p>
                </div>
                <!-- <div><img src="//images.ctfassets.net/8053dpll6ke8/730EwdvL40gtekrjFEdN1k/48617232021a71c1aa9947ec406b1d4f/manaliPackageImg.png" alt=""></div> -->
                <a href="#testimonials" @click="nextSlide()" class="arrow-icon"><FontAwesomeIcon icon="fa-angle-right" /></a>
            </div>            
            <div v-else-if="fourth" class="container justify-content-evenly align-items-center d-flex mb-5">
                <a href="#testimonials" @click="next('third')" class="arrow-icon"><FontAwesomeIcon icon="fa-angle-left"/></a>
                <a href="https://www.google.com/search?hl=en-IN&gl=in&q=H+No-126,+Holiday+Device,+Kadipur,+Kushak+Colony,+Kadipur,+Delhi,+110036&ludocid=17811990895300712314&lsig=AB86z5XE-pv6iI2yFvwfNZc6JP9b#lrd=0x390cfd951ea3482f:0xf730e758e8e4177a,1,,," target="blank" class="text-decoration-none">
                    <h4><FontAwesomeIcon icon="fa-hand-point-right" style="height:20px" /> View More Reviews</h4>                
                </a>
                <a href="https://reviewthis.biz/holidaydevicegooglereviews" target="blank" class="text-decoration-none">
                    <h4><FontAwesomeIcon icon="fa-hand-point-right" style="height:20px" /> Add Review</h4>                
                </a>
                <a href="#testimonials" @click="next('first')" class="arrow-icon"><FontAwesomeIcon icon="fa-angle-right" /></a>
            </div>
        </div>
        <div id="sm-screen">
            <div class="container justify-content-evenly align-items-center d-flex flex-row mb-5">
                <a href="#testimonials" @click="viewPrevReview()" class="arrow-icon"><FontAwesomeIcon icon="fa-angle-left" /></a>
                <div class="review-box-mob text-center p-2">
                    <b-avatar :src="ReviewerContent.testimonialsContent[reviewNo].fields.reviewerImage.fields.file.url" size="6rem" />
                    <h5>{{ ReviewerContent.testimonialsContent[reviewNo].fields.reviewerName }}</h5>
                    <div class="ratings">
                        <FontAwesomeIcon icon="fa-star" />
                        <FontAwesomeIcon icon="fa-star" />
                        <FontAwesomeIcon icon="fa-star" />
                        <FontAwesomeIcon icon="fa-star" />
                        <FontAwesomeIcon icon="fa-star-half-stroke" />
                    </div>
                    <p>{{ ReviewerContent.testimonialsContent[reviewNo].fields.reviewcomment }}</p>
                </div>
                <a href="#testimonials" @click="viewNextReview()" class="arrow-icon"><FontAwesomeIcon icon="fa-angle-right" /></a>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ContentfulRequests from '~/plugins/contentfulRequest'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
const contentfulRequest = new ContentfulRequests()
@Component({
    components: {
        FontAwesomeIcon,
    },   
    methods: {
        nextSlide(){
            let count = this.$data.slideReviewNo + 2
            let arrayLen = this.$data.ReviewerContent.testimonialsContent.length
            if(count == arrayLen - 1 ) 
            {
                this.$data.slideReviewNo = 0
                console.log('nextslideII->', this.$data.slideReviewNo)
            }
            else {
                this.$data.slideReviewNo += 3
                console.log('nextslideEE->', this.$data.slideReviewNo)
            }
        },
        prevSlide(){
            let count = this.$data.slideReviewNo - 2
            let arrayLen = this.$data.ReviewerContent.testimonialsContent.length
            if(count < 0 ) 
            {
                this.$data.slideReviewNo = arrayLen - 3
                console.log('prevslideII->', this.$data.slideReviewNo)
            }
            else {
                this.$data.slideReviewNo -= 3
                console.log('prevslideEE->', this.$data.slideReviewNo)
            }
        },
        viewNextReview(){
            let count = this.$data.reviewNo
            let arrayLen = this.$data.ReviewerContent.testimonialsContent.length
            if( count == arrayLen - 1 )
            {
                this.$data.reviewNo = 0
            }
            else{
                this.$data.reviewNo ++
            }
        },
        viewPrevReview(){
            let count = this.$data.reviewNo
            let arrayLen = this.$data.ReviewerContent.testimonialsContent.length
            if( count == 0)
            {
                this.$data.reviewNo = arrayLen - 1
            }
            else{
                this.$data.reviewNo --
            }
        }
    },
    async fetch(){
        let testimonialsContent = (await contentfulRequest.getHolidayDeviceHomeTestimonialsContent()) || {}
        this.$data.ReviewerContent = testimonialsContent
    }
})
export default class ReviewsCards extends Vue {
   data() {
        return {
            first: true,
            second: false,
            third: false,
            fourth: false,
            reviewNo: 0,
            slideReviewNo: 0,
            ReviewerContent: [],
        }
    }
}
</script>
<style>
.ratings svg {
    font-size: 1.2rem;
}
#lg-screen{
    display: none;
}
.review-box {
    width: 225px;
    box-shadow: 0 0 20px 0px;
}
.arrow-icon svg {
    color: #ea7272f0;
    font-size: 32px;
}
.ratings {
    color: #f74343ad;
}
.review-box-mob{
    width: 75%;
    box-shadow: 0 0 20px 0px;
}
@media (min-width: 992px){
    #sm-screen{
        display: none;
    }
    #lg-screen{
        display: flex;
    } 
    .arrow-icon svg {
        font-size: 32px;
    }
}
@media (min-width: 1200px){
    .review-box {
    width: 318px;
    height: 350px;
    box-shadow: 0 0 20px 0px;
    }
    .arrow-icon svg {
        color: #ea7272f0;
        font-size: 50px;
    }
}
</style>