<template>
    <div class="d-flex justify-content-center">
        <h1 class="companyLogo">Holiday Device</h1>
        <b-nav pills class="">   
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
                            <b-dropdown-item><FontAwesomeIcon icon="hill-avalanche" /> Himachal Pradesh</b-dropdown-item>
                            <b-dropdown-item><FontAwesomeIcon icon="hill-avalanche" /> Utrakhand</b-dropdown-item>
                            <b-dropdown-item><FontAwesomeIcon icon="hill-avalanche" /> Kerala</b-dropdown-item>
                            <b-dropdown-item><FontAwesomeIcon icon="hill-avalanche" /> Rajasthan</b-dropdown-item>
                            <b-dropdown-item><FontAwesomeIcon icon="hill-avalanche" /> Goa</b-dropdown-item>
                            <b-dropdown-item><FontAwesomeIcon icon="hill-avalanche" /> Andman</b-dropdown-item>                   
                        </div>
                        <div>
                            <b-dropdown-item><FontAwesomeIcon icon="hill-avalanche" /> Bali</b-dropdown-item>
                            <b-dropdown-item><FontAwesomeIcon icon="hill-avalanche" /> Dubai</b-dropdown-item>
                            <b-dropdown-item><FontAwesomeIcon icon="hill-avalanche" /> Mauritius</b-dropdown-item>
                            <b-dropdown-item><FontAwesomeIcon icon="hill-avalanche" /> Maldives</b-dropdown-item>
                            <b-dropdown-item><FontAwesomeIcon icon="hill-avalanche" /> Singapore</b-dropdown-item>
                        </div>
                        <div>
                            <b-dropdown-item><FontAwesomeIcon icon="hill-avalanche" /> Thailand</b-dropdown-item>
                            <b-dropdown-item><FontAwesomeIcon icon="hill-avalanche" /> Lddakh</b-dropdown-item>
                            <b-dropdown-item><FontAwesomeIcon icon="hill-avalanche" /> North East</b-dropdown-item>
                            <b-dropdown-item><FontAwesomeIcon icon="hill-avalanche" /> Nepal</b-dropdown-item>
                            <b-dropdown-item><FontAwesomeIcon icon="hill-avalanche" /> Kashmir</b-dropdown-item>
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
</template>
<script>
  import { Component, Vue, Prop} from 'vue-property-decorator'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { fas } from '@fortawesome/free-solid-svg-icons'

  library.add(fas)
  @Component({
    components:{
        FontAwesomeIcon,
    },
    methods: {
      destinationOnOver() {
        this.$refs.destinations.visible = true;
      },
      destinationOnLeave() {
        this.$refs.destinations.visible = false;
      },
      specialityToursOnOver() {
        this.$refs.specialityTours.visible = true;
      },
      specialityToursOnLeave() {
        this.$refs.specialityTours.visible = false;
      },
    }
  })
  export default class NavbarHome extends Vue {

  }
</script>
<style>
    .nav-link{
        color: #6c757d;
        font-size: 1.2rem;
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
        margin-right: 20%;
    }
</style>