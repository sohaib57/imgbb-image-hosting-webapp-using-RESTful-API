// Image gallery here a child is rendering
<template>
 <v-card class="d-flex flex-row flex-wrap" min-height=100vh width="100%">
   <!-- unique image is a child component -->
    <UniqueImage
      v-for="image in images"
      :key="image.id"
      :image="image"
    />
  </v-card>
</template>
<script>
import UniqueImage from './UniqueImage.vue';
export default {
  name: "ImageList",
  components: {
    UniqueImage
  },
  // using computed property to get images form store
  computed: {
    images() {
      return this.$store.state.images;
    },
  },
  //dispatching the list of images
  mounted() {
    this.$store.dispatch("listAllImages");
    this.listOfImages = JSON.parse(localStorage.getItem("all_images"));
  },
};
</script>


