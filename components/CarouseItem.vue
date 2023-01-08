<template>
  <div class="review-box-mob text-center p-2">
    <b-avatar :src="src" size="6rem" />
    <h5>
      {{ reviewerName }}
    </h5>
    <div class="ratings">
      <FontAwesomeIcon icon="fa-star" />
      <FontAwesomeIcon icon="fa-star" />
      <FontAwesomeIcon icon="fa-star" />
      <FontAwesomeIcon icon="fa-star" />
      <FontAwesomeIcon icon="fa-star-half-stroke" />
    </div>
    <p>
      {{ reviewComment }}
    </p>
  </div>
</template>
<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
@Component({
  components: {},
})
export default class CarouseItem extends Vue {
  @Prop({ type: String, required: true })
  alt?: string;

  @Prop({ type: String, required: true })
  reviewerName?: string;

  @Prop({ type: String, required: true })
  reviewComment?: string;

  @Prop({ type: String, required: true })
  src?: string;
}
</script>