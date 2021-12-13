<template>
  <!-- header -->
  <v-app>
    <v-app-bar app dense>
      <v-btn depressed @click="About">
        About
        <v-icon right> mdi-information-outline</v-icon>
      </v-btn>

      <v-spacer> </v-spacer>

      <v-app-bar-icon>
        <img src="../assets/logo (1).png" alt="imgbb" />
      </v-app-bar-icon>

      <v-spacer> </v-spacer>
      <!-- right menu bar -->
      <v-menu class="text-center mr-10" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn left icon v-bind="attrs" v-on="on">
            <v-icon>mdi-account</v-icon>
            <v-icon left>mdi-menu-down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>{{ name }}</v-list-item-title>
              <v-list-item-subtitle>Logged In</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
          <!-- settings option -->
          <v-list-item link>
            <v-list-item-title @click="profileUpdate">
              <v-icon left>mdi-cog</v-icon>
              settings
            </v-list-item-title>
          </v-list-item>

          <v-divider></v-divider>
          <!-- Logout option -->
          <v-list-item link @click="logout">
            <v-list-item-title>
              <v-icon left>mdi-logout</v-icon>
              logout
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-main>
      <Uploadimage />
      <br />
      <ImageGallery />
    </v-main>
  </v-app>
</template>

<script>
// importing the gallery and upload image component
import Uploadimage from "../components/Uploadimage.vue";
import ImageGallery from "../components/ImageGallery";

export default {
  name: "Home",
  components: {
    Uploadimage,
    ImageGallery,
  },
  data: () => ({
    currentUser: "",
    name: "",
  }),
  methods: {
    //  logout function to dispatch
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    // togo to about page on click
    About() {
      this.$router.push("/about");
    },
    //togo to profile update page on click
    profileUpdate() {
      this.$router.push("/profile");
    },
  },

  // getting the user from local storage and updating it.
  created() {
    this.currentUser = JSON.parse(localStorage.getItem("users"));
    this.name = this.currentUser.name;
    this.$store.dispatch("listAllImages");
    this.listOfImages = JSON.parse(localStorage.getItem("all_images"));
  },
};
</script>

