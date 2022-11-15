<template>
    <div>
        <div id="lg-screen" class="justify-content-between">
            <img src="//images.ctfassets.net/8053dpll6ke8/7o4FrG2QOQzrg27NqW80lU/782eeb70f8e350c1f4c93d372792a8cc/HD_logo_top.png" style="height: 85px">
            <b-nav pills class="navBar">   
                <b-nav-item>Home</b-nav-item>             
                <div @mouseover="destinationOnOver" @mouseleave="destinationOnLeave">
                    <b-nav-item-dropdown
                    class="dropdownItem"
                    ref="destinations"
                    id="my-nav-dropdown"
                    text="Destinations"
                    toggle-class="nav-link-custom"
                    right
                    >
                        <div style="display:flex">
                            <div>
                                <b-dropdown-item><FontAwesomeIcon icon="mountain" /> Himachal Pradesh</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="mountain-sun" /> Utrakhand</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="vihara" /> Kerala</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="fort" /> Rajasthan</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="umbrella-beach" /> Goa</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="whale" /> Andman</b-dropdown-item>                   
                            </div>
                            <div>
                                <b-dropdown-item><FontAwesomeIcon icon="tree-palm" /> Bali</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="city" /> Dubai</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="cloud-sun-rain" /> Mauritius</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="water" /> Maldives</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="bridge-water" /> Singapore</b-dropdown-item>
                            </div>
                            <div>
                                <b-dropdown-item><FontAwesomeIcon icon="place-of-worship" /> Thailand</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="mountains" /> Ladakh</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="landmark" /> North East</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="gopuram" /> Nepal</b-dropdown-item>
                                <b-dropdown-item><FontAwesomeIcon icon="snowflake" /> Kashmir</b-dropdown-item>
                            </div>                        
                        </div>
                    </b-nav-item-dropdown>
                </div>
                <div @mouseover="specialityToursOnOver" @mouseleave="specialityToursOnLeave">
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
                </div>
                <b-nav-item>About Us</b-nav-item>
                <b-nav-item>Contact Us</b-nav-item>
            </b-nav>
        </div>
        <div id="sm-screen" class="justify-content-between">            
            <a v-if="!MobMenuShow" class="nav-mob"><FontAwesomeIcon @click="show('MobMenuShow')" icon="bars" /></a>
            <div v-else class="MobMenu">
                <a @click="close('MobMenuShow')"><FontAwesomeIcon icon="xmark"/></a>
                <ul>
                    <li>
                        <a v-if="!destinations" @click="show('destinations')">Destinations <FontAwesomeIcon icon="fa-caret-down"/></a>
                        <a v-if="destinations" @click="close('destinations')">Destinations <FontAwesomeIcon icon="fa-caret-up"/></a>
                        <ul v-if="destinations" class="sub-categories text-center">
                            <li><a>Himachal Pradesh</a></li>
                            <li><a>Uttrakhand</a></li>
                            <li><a>Kerala</a></li>
                            <li><a>Rajasthan</a></li>
                            <li><a>Goa</a></li>
                            <li><a>Andman</a></li>
                            <li><a>Bali</a></li>
                            <li><a>Dubai</a></li>
                            <li><a>Mauritius</a></li>
                            <li><a>Maldives</a></li>
                            <li><a>Thailand</a></li>
                            <li><a>Ladakh</a></li>
                            <li><a>Assam</a></li>
                            <li><a>Manipur</a></li>
                            <li><a>Nepal</a></li>
                            <li><a>Sikkim</a></li>
                            <li><a>Kashmir</a></li>
                        </ul>
                    </li>
                    <li>
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
                    </li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li class="text-center mt-4">Follow us:</li>
                    <li class="text-center">
                        <FontAwesomeIcon icon="fa-brands fa-facebook"/>
                        <FontAwesomeIcon icon="fa-brands fa-instagram"/>
                        <FontAwesomeIcon icon="fa-brands fa-telegram"/>
                        <FontAwesomeIcon icon="fa-brands fa-youtube"/>
                    </li>
                </ul>
            </div>
            <img src="//images.ctfassets.net/8053dpll6ke8/7o4FrG2QOQzrg27NqW80lU/782eeb70f8e350c1f4c93d372792a8cc/HD_logo_top.png" style="height: 75px"></img>
        </div>
    </div>
</template>
<script lang="ts">
  import { Component, Vue, Prop} from 'vue-property-decorator'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faLaptopHouse, fas } from '@fortawesome/free-solid-svg-icons'

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
        }
    }
  })
  export default class NavbarHome extends Vue {
    $refs!:{
        destinations: HTMLElement
        specialityTours: HTMLElement
    }
    destinationOnOver() {
        this.$refs.destinations.visible = true
    }
    destinationOnLeave() {
        this.$refs.destinations.visible = false
    }
    specialityToursOnOver() {
        this.$refs.specialityTours.visible = true
    }
    specialityToursOnLeave() {
        this.$refs.specialityTours.visible = false
    }
  }
</script>
<style>
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