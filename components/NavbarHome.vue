<template>
    <div>
        <div id="lg-screen" class="justify-content-between container">
            <img src="//images.ctfassets.net/8053dpll6ke8/7o4FrG2QOQzrg27NqW80lU/782eeb70f8e350c1f4c93d372792a8cc/HD_logo_top.png" style="height: 85px">
            
            <b-nav pills class="navBar">             
                <b-nav-item to="">Home</b-nav-item> 
                <div>
                    <b-nav-item-dropdown                  
                    class="dropdownItem"
                    ref="destinations"
                    id="my-nav-dropdown"
                    text="Destinations"
                    toggle-class="nav-link-custom"
                    right
                    >
                    <b-dropdown-item @click="navigatePage('/destinations')" class="text-center h5 dest-all"><FontAwesomeIcon icon="hand-holding-heart" /> All Destination Packages</b-dropdown-item>
                        <div style="display:flex">                            
                            <div>
                                <b-dropdown-item><FontAwesomeIcon icon="mountain" /> Himachal Pradesh</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="mountain-sun" /> Utrakhand</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="vihara" /> Kerala</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="place-of-worship" /> Rajasthan</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="umbrella-beach" /> Goa</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="water" /> Andman</b-dropdown-item>                   
                            </div>
                            <div>
                                <b-dropdown-item><FontAwesomeIcon icon="umbrella-beach" /> Bali</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="city" /> Dubai</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="cloud-sun-rain" /> Mauritius</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="water" /> Maldives</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="bridge-water" /> Singapore</b-dropdown-item>
                            </div>
                            <div>
                                <b-dropdown-item><FontAwesomeIcon icon="place-of-worship" /> Thailand</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="water" /> Ladakh</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="landmark" /> North East</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="gopuram" /> Nepal</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="snowflake" /> Kashmir</b-dropdown-item>
                            </div>                        
                        </div>
                    </b-nav-item-dropdown>
                </div>
                <!-- <div @mouseover="specialityToursOnOver" @mouseleave="specialityToursOnLeave">
                    <b-nav-item-dropdown
                    ref="specialityTours"
                    id="my-nav-dropdown"
                    text="Speciality Tours"
                    toggle-class="nav-link-custom"
                    right                
                    >
                        <div style="display:flex">
                            <div>
                                <b-dropdown-item><FontAwesomeIcon icon="hill-avalanche" /> Couples only</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="hill-avalanche" /> Honeymoon Special</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="hill-avalanche" /> Luxury Tours</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="hill-avalanche" /> Senior's Special</b-dropdown-item>     
                                <b-dropdown-item><FontAwesomeIcon icon="hill-avalanche" /> World Tour</b-dropdown-item>         
                            </div>
                            <div>
                                <b-dropdown-item><FontAwesomeIcon icon="hill-avalanche" /> Short Trips</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="hill-avalanche" /> Treks & Hikes</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="hill-avalanche" /> FLY Adventures</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="hill-avalanche" /> FLOAT Adventures</b-dropdown-item>                            
                                <b-dropdown-item><FontAwesomeIcon icon="hill-avalanche" /> Family Fun</b-dropdown-item>                            
                            </div>                      
                        </div>
                    </b-nav-item-dropdown>
                </div> -->
                <b-nav-item to="/about-us">About Us</b-nav-item>
                <b-nav-item @click="contactUs">Contact Us</b-nav-item>
            </b-nav>
        </div>
        <div id="sm-screen" class="justify-content-between">            
            <a v-if="!MobMenuShow" class="nav-mob"><FontAwesomeIcon @click="show('MobMenuShow')" icon="bars" /></a>
            <div v-else class="MobMenu">
                <a @click="close('MobMenuShow')"><FontAwesomeIcon icon="xmark"/></a>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li>                        
                        <a v-if="!destinations" @click="show('destinations')">Destinations <FontAwesomeIcon icon="fa-caret-down"/></a>
                        <a v-if="destinations" @click="close('destinations')">Destinations <FontAwesomeIcon icon="fa-caret-up"/></a>
                        <ul v-if="destinations" class="sub-categories text-center">
                            <li><a href="/destinations" id="allPackages">All Packages</a></li>
                            <li><a href="/destinations">Himachal Pradesh</a></li>
                            <li><a href="/destinations">Uttrakhand</a></li>
                            <li><a href="/destinations">Kerala</a></li>
                            <li><a href="/destinations">Rajasthan</a></li>
                            <li><a href="/destinations">Goa</a></li>
                            <li><a href="/destinations">Andman</a></li>
                            <li><a href="/destinations">Bali</a></li>
                            <li><a href="/destinations">Dubai</a></li>
                            <li><a href="/destinations">Mauritius</a></li>
                            <li><a href="/destinations">Maldives</a></li>
                            <li><a href="/destinations">Thailand</a></li>
                            <li><a href="/destinations">Ladakh</a></li>
                            <li><a href="/destinations">Assam</a></li>
                            <li><a href="/destinations">Manipur</a></li>
                            <li><a href="/destinations">Nepal</a></li>
                            <li><a href="/destinations">Sikkim</a></li>
                            <li><a href="/destinations">Kashmir</a></li>
                        </ul>
                    </li>
                    <!-- <li>
                        <a v-if="!specialTours" @click="show('specialTours')">Speciality Tours <FontAwesomeIcon icon="fa-caret-down"/></a>
                        <a v-if="specialTours" @click="close('specialTours')">Speciality Tours <FontAwesomeIcon icon="fa-caret-up"/></a>
                        <ul v-if="specialTours" class="sub-categories text-center">
                            <li><a>Couples Only</a></li>
                            <li><a>Honeymoon Special</a></li>
                            <li><a>Treks & Hikes</a></li>
                            <li><a>Short Trips</a></li>
                            <li><a>Luxury Tours</a></li>
                            <li><a>FLY Adventures</a></li>
                            <li><a>Senior's Special</a></li>
                            <li><a>FLOAT Adventures</a></li>
                            <li><a>Family Fun</a></li>
                            <li><a>World Tour</a></li>
                        </ul>
                    </li> -->
                    <li><a href="/about-us">About us</a></li>
                    <li @click="contactUs">Contact us</li>
                    <li class="text-center mt-4">Follow us:</li>
                    <li class="text-center">
                        <FontAwesomeIcon icon="fa-brands fa-facebook"/>
                        <FontAwesomeIcon icon="fa-brands fa-instagram"/>
                        <FontAwesomeIcon icon="fa-brands fa-telegram"/>
                        <FontAwesomeIcon icon="fa-brands fa-youtube"/>
                    </li>
                </ul>
            </div>
            <img src="//images.ctfassets.net/8053dpll6ke8/7o4FrG2QOQzrg27NqW80lU/782eeb70f8e350c1f4c93d372792a8cc/HD_logo_top.png" style="height: 75px" alt="icon-brand">
        </div>
    </div>
</template>
<script lang="ts">
  import { Component, Vue, Prop} from 'vue-property-decorator'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { fas } from '@fortawesome/free-solid-svg-icons'

  library.add(fas)
  @Component({
    components:{
        FontAwesomeIcon,
    },
    data(){
        return {
            MobMenuShow: false,
            destinations: false,
            specialTours: false,
        }
    },
    methods: {
        show(name){
            if(name == 'MobMenuShow'){
                this.$data.MobMenuShow = true
            }
            else if( name == 'destinations'){
                this.$data.destinations = true
                this.$data.specialTours = false
            }
            else{
                this.$data.specialTours = true
                this.$data.destinations = false
            }
        },
        close(name){
            if(name == 'MobMenuShow'){
                this.$data.MobMenuShow = false
            }
            else if( name == 'destinations'){
                this.$data.destinations = false
            }
            else{
                this.$data.specialTours = false
            }
        },
        navigatePage(url) {
            this.$router.push(url)
        },
        contactUs() {
            window.location.href = "tel:8130586075"
        }
    }
  })
  export default class NavbarHome extends Vue {
[x: string]: any
  }
</script>
<style>
    .dest-all {
        background-color:#ffff003d;
    }
    #lg-screen {
        display: none;
    }
    #sm-screen {
        display: flex;
    }
    #sm-screen svg {
        font-size: 1.8rem;
        color: #ea7272f0;
    }
    #allPackages {
        color: #eb006c;
        font-weight: bold;
    }
    .nav-link{
        color: #6c757d;
        font-size: 1rem;
        font-weight: bold;
    }
    .nav-link:hover{
        color: #212529;
    }
    .nav-pills .show .nav-link{
        background-color: #6c757d;
        border: none;
    }
    .companyLogo{
        margin-left: 80px;
    }
    .navBar{
        margin-right: 40px;
        align-items: center;
    }
    .nav-mob {
        margin: 30px;
    }
    .MobMenu {
        padding: 30px;
        height: 100%;
        width: 100%;
        z-index: 5;
        position: fixed;
        background-color: #fff;
        top: 0;
        left: 0;
        overflow-x: hidden;        
        transition: 0.5s;
    }
    .MobMenu li {
        list-style: none;
        color: #6c757d;
        font-size: 1.78rem;
    }
    .MobMenu li a {
        text-decoration: none;
        color:#6c757d;
    }
    .sub-categories {
        background-color: #ff9f9f4f;
    }
    @media (min-width: 992px) {
        #sm-screen {
            display: none;
        }
        #lg-screen {
            display: flex;
        }
    }
    @media (min-width: 1024px){
        .nav-link{
            font-size: 1.2rem;
        }        
    }
</style>