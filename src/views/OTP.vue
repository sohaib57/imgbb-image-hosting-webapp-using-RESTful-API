// otp page to go
<template>
  <v-app>
    <v-form>
      <v-text-field
        label="OTP"
        type="number"
        v-model="number"
        required
        outlined
      ></v-text-field>

      <v-text-field
        append-icon="mdi-email"
        v-model="email"
        required
        outlined
      ></v-text-field>
      <v-text-field
        v-model="password"
        required
        outlined
        :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="() => (value = !value)"
        :type="value ? 'password' : 'text'"
      ></v-text-field>
      <v-btn @click.prevent="otp"> Submit </v-btn>
    </v-form>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      value: String,
      credentials: {
        email: "",
        password: "",
        number: "",
      },
    };
  },
  methods: {
    otp() {
      this.$store.dispatch("OTP", this.credentials);
    },
  },
};
</script>

<style>
</style>