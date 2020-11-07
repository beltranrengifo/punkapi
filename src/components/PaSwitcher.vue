<template>
  <div class="pa-theme-switcher">
    <v-btn v-if="useIcon" icon @click="$emit('handle-value')">
      <v-icon>{{ icon }}</v-icon>
    </v-btn>
    <v-switch
      v-else
      v-model="value"
      color="var(--color-primary)"
      :label="label"
      @click="$emit('handle-value', value)"
    />
  </div>
</template>

<script>
export default {
  name: 'PaSwitcher',

  data() {
    return {
      value: false,
    }
  },

  props: {
    icon: {
      type: String,
      default: 'mdi-toggle-switch',
    },
    label: {
      type: String,
      default: '',
    },
    useIcon: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped></style>
