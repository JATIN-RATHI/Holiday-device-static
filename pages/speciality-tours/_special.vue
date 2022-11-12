<template>
    <div class="container">
        <NavbarHome />
        <div class="hero-special my-5 bg-light">
            <div class="speciality-blog p-3">
                <h2>Speciality Tour Packages</h2>
                <h5>Go beyond the usual, plan something special. Find your true reason and set on the trail of unique
                    travel!</h5>
                <p class="d-block">Holiday Device speciality tour packages let you create special moments as you learn
                    to celebrate
                    life all over again with our travel mantra! We offer the most interesting domestic and
                    international tour packages for you. The handcrafted tours provide you non-stop fun and
                    entertainment along with ample time to unwind and <span id="dots">...</span><span id="more">soak in
                        the beauty of the destinations that
                        you visit. Our speciality tour packages are relaxing and carefully planned itineraries. We make
                        sure you have all the fun and entertainment and also get sufficient time to relax and soak in
                        the surroundings. Come with us, create special moments and celebrate life all over again! Escape
                        to stunning holiday destinations, where a perfect break awaits you! Find your special reason,
                        set on to meet new people and trace out your new journeys of life. We make sure you have all the
                        fun and entertainment and also get sufficient time to relax and soak in the surroundings. Live
                        the special moments and celebrate life all over again because we thrive to empower you with the
                        most fascinating memories and invite you to relish our legacy to travel, explore and celebrate
                        life.</span></p>
                <a @click="readMore()" id="myBtn">Read more </a>&nbsp;
                <FontAwesomeIcon id="down" icon="fa-chevron-down" />
                <FontAwesomeIcon id="up" icon="fa-chevron-up" />
            </div>
            <div class="div-image">
                <div class="mt-5">
                    <table v-if="tableOpen" class="table mb-0">
                        <thead>
                            <tr>
                                <th class="w-50">Speciality Packages</th>
                                <th class="w-25">Day/Night</th>
                                <th class="w-25">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="ng-star-inserted">
                                <td>Gujarat Statue of Unity</td>
                                <td>3 Days</td>
                                <td>₹30,000</td>
                            </tr>
                            <tr class="ng-star-inserted">
                                <td>Seniors' Special Gujarat Statue of Unity</td>
                                <td>3 Days</td>
                                <td>₹30,000</td>
                            </tr>
                            <tr class="ng-star-inserted">
                                <td>Haridwar Rishikesh</td>
                                <td>4 Days</td>
                                <td>₹32,000</td>
                            </tr>
                            <tr class="ng-star-inserted">
                                <td>Hyderabad Ramoji City</td>
                                <td>4 Days</td>
                                <td>₹32,000</td>
                            </tr>
                            <tr class="ng-star-inserted">
                                <td>Sarnath Varanasi</td>
                                <td>5 Days</td>
                                <td>₹32,000</td>
                            </tr>
                            <!---->
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="div-image-sm p-3 d-lg-none">
                <div>
                    <table class="table mb-0">
                        <thead>
                            <tr>
                                <th class="w-50">Speciality Packages</th>
                                <th class="w-25">Day/Night</th>
                                <th class="w-25">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="ng-star-inserted">
                                <td>Gujarat Statue of Unity</td>
                                <td>3 Days</td>
                                <td>₹30,000</td>
                            </tr>
                            <tr class="ng-star-inserted">
                                <td>Seniors' Special Gujarat Statue of Unity</td>
                                <td>3 Days</td>
                                <td>₹30,000</td>
                            </tr>
                            <tr class="ng-star-inserted">
                                <td>Haridwar Rishikesh</td>
                                <td>4 Days</td>
                                <td>₹32,000</td>
                            </tr>
                            <tr class="ng-star-inserted">
                                <td>Hyderabad Ramoji City</td>
                                <td>4 Days</td>
                                <td>₹32,000</td>
                            </tr>
                            <tr class="ng-star-inserted">
                                <td>Sarnath Varanasi</td>
                                <td>5 Days</td>
                                <td>₹32,000</td>
                            </tr>
                            <!---->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>        
        <div class="d-flex tour-card">
            <img class="image-box" src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
                alt="destination" width="30%">
            <div class="m-3">
                <div class="card-badge">
                    <span class="danger px-2">Group Tour</span>
                    <span class="success px-2">Family</span>
                    <span class="warning px-2">Couples</span>
                    <span class="info px-2">Senior's Special</span>
                </div>
                <h1>Kerela</h1>
                <p>5 Days 4 Nights</p>
                <div class="my-2">
                    <FontAwesomeIcon class="icon-thread" icon="fa-plate-wheat" />
                    <FontAwesomeIcon class="icon-thread" icon="fa-building-circle-check" />
                    <FontAwesomeIcon class="icon-thread" icon="fa-truck-plane" />
                </div>
                <div class="path d-flex">
                    <FontAwesomeIcon class="icon-tour" icon="fa-location-dot" />
                    <h5>Delhi</h5>
                    <FontAwesomeIcon class="icon-dot" icon="fa-ellipsis" />
                    <FontAwesomeIcon class="icon-tour" icon="fa-location-dot" />
                    <h5>Punjab</h5>
                    <FontAwesomeIcon class="icon-dot" icon="fa-ellipsis" />
                    <FontAwesomeIcon class="icon-tour" icon="fa-location-dot" />
                    <h5>{{ destination_slug }}</h5>
                </div>
            </div>
            <div class="m-3 mt-5 justify-content-center">
                <button class="btn-details my-3">View Details</button>
                <button class="btn-enquire">Enquire Now</button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import NavbarHome from '../../components/NavbarHome.vue'
library.add(fas)
@Component({
    components: {
        FontAwesomeIcon,
        NavbarHome,
    },
    data() {
        return {
            destination_slug: 'Manali',
            tableOpen: false,
        }
    },
    methods: {
        readMore() {
            this.$data.tableOpen = !this.$data.tableOpen
            var dots = document.getElementById("dots")
            var moreText = document.getElementById("more")
            var btnText = document.getElementById("myBtn")
            var iconDown = document.getElementById("down")
            var iconUp = document.getElementById("up")

            if (dots.style.display === "none") {
                dots.style.display = "inline"
                iconDown.style.display = "inline"
                btnText.innerHTML = "Read more"
                moreText.style.display = "none"
                iconUp.style.display = "none"
            } else {
                dots.style.display = "none";
                iconDown.style.display = "none"
                btnText.innerHTML = "Read less"
                moreText.style.display = "inline"
                iconUp.style.display = "inline"
            }
        }
    },
    async asyncData({ params }) {
        const slug = params.slug
        console.log("slug", params.special)
        return { slug }
    }
})
export default class SpecialityTours extends Vue {

}
</script>
<style scoped>
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
    background-image: url('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp');
    width: 100%;
    background-repeat: no-repeat;
    display: none;
}

.div-image-sm {
    background-image: url('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp');
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
    margin: 0 5px 0 5px
}

.path {
    justify-content: space-between;
}

.path h5 {
    color: #0000006b;
}

@media (min-width: 992px)
{
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
</style>