<template>
  <v-app>
    <!-- Importing header componenet -->
    <Header />
    <v-main>
      <v-container fluid>
        <v-row class="justify-center">
          <v-col cols="12" md="6">
            <v-alert
              v-if="show"
              type="success"
              close-text="Close Alert"
              dismissible
            >
              {{ showSuccess }}
            </v-alert>
            <!-- <v-alert  v-else dense outlined close-text="Close Alert" type="error" dismissible >{{showError}} </v-alert> -->
            <v-card>
              <v-row class="justify-center">
                <!-- First column -->
                <v-col cols="8" class="white">
                  <h1 class="text-center">Login</h1>
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <!-- input fields -->
                    <v-text class="font-weight-bold">Email address </v-text>
                    <v-text-field
                      outlined
                      v-model="formData.email"
                      required
                      append-icon="mdi-email"
                    >
                    </v-text-field>
                    <v-text class="font-weight-bold">Password</v-text>
                    <v-text-field
                      outlined
                      v-model="formData.password"
                      required
                      class="font-weight-light"
                      :value="myPass"
                      :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="() => (value = !value)"
                      :type="value ? 'password' : 'text'"
                    ></v-text-field>

                    <v-btn
                      block
                      class="btngradient white--text textDecor"
                      @click.prevent="handleSubmit"
                      >Login</v-btn
                    >
                    <p class="text-center pt-3">
                      <router-link to="/forgetpassword" class="textDecor"
                        >Forget password ?</router-link
                      >
                    </p>
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
// import axios from "axios";
import { mapGetters } from "vuex";
import Header from "../components/Header.vue";
export default {
  components: {
    Header,
  },
  data() {
    return {
      value: String,
      formData: {
        email: "",
        password: "",
        show: true,
      },
    };
  },

  computed: {
    ...mapGetters(["showSuccess", "showError"]),
  },

  methods: {
    handleSubmit() {
      this.$store.dispatch("login", this.formData);
      this.$router.push("/home");
    },
  },
};
</script>

<style>
.textDecor {
  text-transform: none;
  text-decoration: none;
}

.background,
.btngradient {
  background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);
}
</style>