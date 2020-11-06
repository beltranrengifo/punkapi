<template>
  <div class="pa-theme-switcher">
    <v-btn icon @click="$emit('handle-value')">
      <v-icon>{{ icon }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'PaSwitcher',

  props: {
    icon: {
      type: String,
      default: 'mdi-toggle-switch',
    },
  },
}
</script>

<style lang="scss" scoped></style>
