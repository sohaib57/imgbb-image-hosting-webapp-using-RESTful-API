//forget password page
<template>
  <v-app>
    <Header />
    <!-- v-main starts from here -->
    <v-main>
      <v-container fluid>
        <v-row class="justify-center">
          <v-col cols="12" md="5">
            <v-card>
              <v-row class="justify-center">
                <!-- First column -->
                <v-col cols="8" class="white">
                  <h2 class="font-weight-bold text-center">Forget Password</h2>
                  <v-form class="mt-4">
                    <v-text class="font-weight-bold" v-model="email">
                      Email address
                    </v-text>
                    <v-text-field
                      outlined
                      append-icon="mdi-email"
                    ></v-text-field>
                    <v-btn
                      block
                      dark
                      class="textDecor btngradient"
                      @click.prevent="resetPassoword"
                    >
                      Reset password</v-btn
                    >
                  </v-form>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  components: {
    Header,
  },

  data() {
    return {
      email: "",
    };
  },
  methods: {
    // on click it will hit the forgetpass key
    resetPassoword() {
      this.$store.dispatch("forgetPassword", this.email);
    },
  },
};
</script>

<style scoped>
.textDecor {
  text-transform: none;
}
</style>