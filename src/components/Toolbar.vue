<template>
  <v-toolbar app>
    <v-toolbar-title
      class="headline text-uppercase toolbarTitle"
      v-on:click="goHome"
      style="cursor: pointer"
    >
      <v-btn
        v-if="showBackButton"
        v-on:click.stop="goBack"
        icon
        class="hidden-xs-only btn_Back"
      >
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <span>Vue </span>
      <span class="font-weight-light">STARTER KIT</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat :to="'/sandbox'">Sandbox</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: "Toolbar",
  props: {
    backPath: {
      type: String,
      default: ""
    }
  },
  computed: {
    showBackButton() {
      return this.backPath !== "";
    }
  },
  methods: {
    goBack() {
      this.$router.push(this.backPath);
    },
    goHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped></style>
