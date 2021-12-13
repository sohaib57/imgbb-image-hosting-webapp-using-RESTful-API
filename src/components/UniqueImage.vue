<template>
  <!-- v-card  -->
  <v-card id="my-card" class="mx-auto my-3" width="350px">
    <v-img cover center contain :src="image.path" width="350px" height="200px">
    </v-img>

    <v-divider class="mx-4 my-1"></v-divider>
    <v-card-text>
      <v-text class="text-left text-subtitle-1 black--text">
        {{ image.name }}
      </v-text>
      <br />
      <v-text class="text-left orange--text">
        Extension : {{ image.extension }}
      </v-text>
    </v-card-text>
  </v-card>
</template>


<script>
export default {
  name: "UniqueImage",
  props: ["image", "id"],
  data: () => {
    return {};
  },
  methods: {
    remove_image() {
      this.$store.dispatch("removeImages", this.id);
    },
  },
};
</script>