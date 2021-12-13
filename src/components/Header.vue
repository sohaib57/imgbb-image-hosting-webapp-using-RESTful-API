//header component on login signup and forgetpassword
<template>
  <v-app-bar dense app elevation="4" class="white">
    <v-app-bar-icon>
      <img src="../assets/logo (1).png" alt="imgbb" />
    </v-app-bar-icon>
    <v-spacer> </v-spacer>
    <!-- Right side buttons -->
    <v-btn class="textDecor" outlined to="/" color="blue"> Log in </v-btn>
    <v-btn class="textDecor" outlined to="/signup" color="blue"> Sign up</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.v-btn {
  color: blue;
  margin: 2px;
}
.textDecor {
  text-transform: none;
}
</style>