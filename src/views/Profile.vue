<template>
  <v-app>
    <v-container fluid>
      <!-- v-card for profile -->
      <v-card class="mx-auto" max-width="434" tile>
        <v-img
          height="100%"
          src="https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        ></v-img>
        <v-col>
          <v-avatar size="100" style="position: absolute; top: 220px">
            <v-img :src="updatedData.profile_picture"></v-img>
          </v-avatar>
        </v-col>
        <v-list-item color="rgba(0, 0, 0, .4)">
          <v-list-item-content>
            <v-list-item-title class="title">{{
              updatedData.name
            }}</v-list-item-title>
            <v-list-item-subtitle>{{ updatedData.email }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
      <!-- Row of user edir user profile -->
      <v-row class="text-center mt-6" min-height="100vh">
        <v-col>
          <h1 class="font-weight-light">
            <v-icon>mdi-cog</v-icon> Edit your profile
          </h1>
          <v-container style="width: 400px">
            <!-- username -->
            <v-row class="mt-1">
              <v-col cols="6" sm="6" xsm="6" lg="6" md="6" class="">
                <strong> User Name: </strong>
              </v-col>
              <v-col
                cols="6"
                sm="6"
                xsm="6"
                lg="6"
                md="6"
                class="font-weight-light"
              >
                {{ updatedData.name }}
              </v-col>
            </v-row>
            <!-- email -->
            <v-row class="mt-1">
              <v-col cols="6" sm="6" xsm="6" lg="6" md="6" class="">
                <strong> Email: </strong>
              </v-col>
              <v-col
                cols="6"
                sm="6"
                xsm="6"
                lg="6"
                md="6"
                class="font-weight-light"
              >
                {{ updatedData.email }}
              </v-col>
            </v-row>

            <!-- Age-->
            <v-row class="mt-1">
              <v-col cols="6" sm="6" xsm="6" lg="6" md="6" class="">
                <strong> Age: </strong>
              </v-col>
              <v-col
                cols="6"
                sm="6"
                xsm="6"
                lg="6"
                md="6"
                class="font-weight-light"
              >
                {{ updatedData.age }}
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>

      <!-- Here the update profile  -->

      <template>
        <v-row justify="center">
          <v-dialog v-model="dialog" max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="red" dark v-bind="attrs" v-on="on">
                Edit Profile
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">User Profile</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        label="Username"
                        v-model="updatedData.name"
                        hint=""
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Email"
                        hint="Email must be valid"
                        v-model="updatedData.email"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Age"
                        type="age"
                        v-model="updatedData.age"
                        hint="Age must be less than 100 and more that 10 years"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-file-input
                        prepend-icon="mdi-camera"
                        :v-model="updatedData.profile_picture"
                        @change="captureImage"
                        required
                      >
                      </v-file-input>
                    </v-col>
                  </v-row>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                  Close
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  class="my-5"
                  text
                  @click="replace, (dialog = false)"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </template>

      <br />
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      updatedData: {
        email: "",
        age: "",
        name: "",
        profile_picture: "",
      },
      currenntUser: [],
      dialog: false,
    };
  },

  mounted() {
    this.currenntUser = JSON.parse(localStorage.getItem("users"));
    console.log(this.currenntUser);
    this.updatedData.name = this.currenntUser.name;
    this.updatedData.email = this.currenntUser.email;
    this.updatedData.age = this.currenntUser.age;
    this.updatedData.profile_picture = this.currenntUser.profile_picture;
    console.log(this.updatedData.profile_picture);
  },

  methods: {
    replace() {
      console.log(this.updatedData);
      this.$store.dispatch("updateProfile", this.updatedData);
    },

    captureImage(event) {
      console.log(event);

      let get = this;
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          get.updatedData.profile_picture = reader.result;
        },
        false
      );
      reader.readAsDataURL(event);
    },
  },
};
</script>

