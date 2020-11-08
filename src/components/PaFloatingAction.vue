<template>
  <div class="pa-floating-action" @click="$emit('handle-click')">
    <v-fab-transition>
      <v-btn :loading="loading" color="gree" fab large dark bottom left>
        {{ text }}
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
export default {
  name: 'PaFloatingAction',

  props: {
    text: {
      type: String,
      default: 'Action',
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.pa-floating-action {
  position: fixed;
  bottom: rem(24);
  right: rem(24);
  z-index: 9;
}
</style>
