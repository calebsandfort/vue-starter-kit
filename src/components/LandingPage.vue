<template>
  <v-container class="px-0 pt-0">
    <Toolbar></Toolbar>
    <v-content>
      <v-container fluid>
        <v-layout text-xs-center wrap>
          <v-flex xs12>
            <v-img
              :src="require('../assets/guerillaLogo.png')"
              class="my-3"
              contain
              height="175"
            ></v-img>
          </v-flex>
          <v-flex mb-4>
            <h1 class="display-2 font-weight-bold mb-3">
              Vue Starter Kit
            </h1>
            <p class="subheading font-weight-regular">
              Starter kit for Vue project
            </p>
          </v-flex>
          <v-flex mb-5 xs12>
            <h2 class="headline font-weight-bold mb-3">Sections</h2>
            <v-layout justify-center class="nav-links-wrapper">
              <router-link :to="'/sandbox'" class="subheading mx-3"
                >Sandbox</router-link
              >
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-container>
</template>

<script>
import Toolbar from "./Toolbar";

export default {
  name: "LandingPage",
  components: {
    Toolbar
  },
  data: function() {
    return {};
  }
};
</script>

<style scoped></style>
