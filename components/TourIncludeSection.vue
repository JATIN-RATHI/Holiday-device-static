<template>
    <div class="container icon-main d-flex justify-content-around mb-5">
        <div class="d-grid">
            <FontAwesomeIcon class="icon-tour" icon="fa-building-circle-check" />
            <h3 class="icon-text">Hotels</h3>
            <!-- <br><p>We provide you best and affordable hotels.</p> -->
        </div>
        <div class="d-grid text-center">
            <FontAwesomeIcon class="icon-tour" icon="fa-truck-plane" />
            <h3 class="icon-text">Transport</h3>
            <!-- <br><p>Transportation support throughout your tour</p> -->
        </div>
        <div class="d-grid text-center">
            <FontAwesomeIcon class="icon-tour" icon="fa-plate-wheat" />
            <h3 class="icon-text">Food</h3>
            <!-- <br><p>Breakfast & Dinner provided at hotel (no extra cost)</p> -->
        </div>
        <div class="d-grid text-center">
            <FontAwesomeIcon class="icon-tour" icon="fa-handshake-angle" />
            <h3 class="icon-text">Assistance</h3> 
            <!-- <br><p>Our travel experts will help you for your travel.</p> -->
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
    }
  })
  export default class NavbarHome extends Vue {
  }
</script>
<style>
.icon-tour{
    height: 2.2rem;
    color: #c56868f0;
}
.icon-text{
    font-size: 0.7rem;
    font-weight: bold;
    color: #6c757d;
}
.icon-main {
    flex-direction: row !important;;
}
@media (min-width: 768px){
    .icon-tour{
        height: 5rem;
    }
    .icon-text{
        font-size: 1.5rem;
    }
}

</style>