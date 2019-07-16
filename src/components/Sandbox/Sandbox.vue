<template>
  <v-container fluid class="px-0 pt-0">
    <Toolbar back-path="/"></Toolbar>
    <v-content>
      <v-container fluid grid-list-lg>
        <v-card>
          <v-card-text>
            Sandbox
          </v-card-text>
        </v-card>
      </v-container>
    </v-content>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Toolbar from "../Toolbar";

export default {
  name: "Sandbox",
  components: {
    Toolbar
  },
  data() {
    return {};
  }
};
</script>

<style scoped></style>
