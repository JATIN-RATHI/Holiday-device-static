<template>
    <div class="yt-video-banner">
        <iframe width="1440" height="810" src="http://www.youtube.com/embed/35npVaFGHMY?autoplay=1&loop=1&playlist=35npVaFGHMY" frameborder="0" allowfullscreen></iframe>
    </div>
</template>
<script>
import { BEmbed } from 'bootstrap-vue'
import { Component, Vue } from 'vue-property-decorator'
@Component({
    component: {
        BEmbed,
    }
})
export default class videoBanner extends Vue {
    
}
</script>