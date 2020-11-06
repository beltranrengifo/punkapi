<template>
  <div class="pa-theme-switcher">
    <v-btn icon @click="handleTheme">
      <v-icon>mdi-theme-light-dark</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'PaThemeSwitcher',

  methods: {
    handleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
}
</script>

<style lang="scss" scoped></style>
