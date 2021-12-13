//Signup page
<template>
  <v-app>
    <Header />
    <!-- V-main body starts from here -->
    <v-main>
      <v-container fluid class="mt-n6 mb-6">
        <v-row class="justify-center">
          <v-col cols="12" md="6">
            <v-card elevation="5">
              <v-row class="justify-center">
                <!-- First column -->
                <v-col cols="8">
                  <h1 class="text-center">Signup</h1>
                  <v-form ref="form" v-model="valid" lazy-validation>
                    <!-- input fields -->
                    <v-text class="font-weight-bold">Full Name</v-text>
                    <v-text-field
                      append-icon="mdi-account"
                      v-model="formData.name"
                      :rules="userNameRules"
                      required
                      outlined
                    ></v-text-field>
                    <div class="d-flex">
                      <v-row>
                        <v-col cols="12" md="6">
                          <v-text class="font-weight-bold">Password</v-text>
                          <v-text-field
                            v-model="formData.password"
                            :rules="passwordRules"
                            required
                            outlined
                            :value="myPass"
                            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="() => (value = !value)"
                            :type="value ? 'password' : 'text'"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" md="6">
                          <v-text class="font-weight-bold"
                            >Password confirmation</v-text
                          >
                          <v-text-field
                            v-model="formData.password_confirmation"
                            :rules="passwordRules"
                            required
                            outlined
                            :value="myPass"
                            :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="() => (value = !value)"
                            :type="value ? 'password' : 'text'"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </div>

                    <v-text class="font-weight-bold">Age</v-text>
                    <v-text-field
                      append-icon="mdi-account-convert-outline"
                      v-model="formData.age"
                      :rules="ageRules"
                      required
                      outlined
                    >
                    </v-text-field>

                    <v-text class="font-weight-bold">Email address</v-text>
                    <v-text-field
                      append-icon="mdi-email"
                      v-model="formData.email"
                      :rules="emailRules"
                      required
                      outlined
                    ></v-text-field>

                    <!--                 
                     <v-btn @click="onePickFile" class="primary textDecor"
                      >Upload image <v-icon right> mdi-cloud-upload </v-icon>
                    </v-btn> -->
                    <v-file-input
                      @change="imagePreview"
                      v-model="formData.profile_picture"
                    ></v-file-input>
                    <!-- <input
                      type="file"
                      style="display: none"
                      :rules="imgRules"
                      ref="fileInput"
                      accept="image/*"
                      
                    />  -->
                    <br />
                    <v-btn
                      class="mt-3 btngradient white--text textDecor"
                      block
                      @click.prevent="handleSubmit"
                      >Sign Up</v-btn
                    >
                    <p class="text-center pt-3">
                      Already registered
                      <router-link to="/login" class="textDecor"
                        >Login?</router-link
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
import Header from "../components/Header.vue";

import {
  userNameVal,
  emailVal,
  passwordVal,
  ageVal,
  imgVal,
} from "../const/const.js";

export default {
  components: {
    Header,
  },
  name: "signup",
  data() {
    return {
      value: String,

      formData: {
        // V-modeling
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        profile_picture: "",
        age: "",
      },
      // Validation rules

      userNameRules: userNameVal,
      emailRules: emailVal,
      passwordRules: passwordVal,
      ageRules: ageVal,
      imgRules: imgVal,
    };
  },
  methods: {
    //  base 64 convert image
    imagePreview(event) {
      let get = this;
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          get.formData.profile_picture = reader.result;
        },
        false
      );
      reader.readAsDataURL(event);
    },

    handleSubmit() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("signup", this.formData);
        this.$router.push("/");
        console.log(this.formData);
      } else {
        console.log("Your account is not created");
        this.status = 401;
      }
    },
  },
};
</script>

<style scoped>
.textDecor {
  text-transform: none;
}

.radius {
  border-radius: 50%;
}
</style>