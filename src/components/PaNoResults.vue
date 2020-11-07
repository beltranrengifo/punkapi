<template>
  <section class="pa-no-results text-center">
    <h2 class="mb-8">
      {{ text }}
    </h2>
    <p v-if="subtext">
      {{ subtext }}
    </p>
  </section>
</template>

<script>
export default {
  name: 'PaNoResults',

  props: {
    text: {
      type: String,
      default: 'Nothing found',
    },
    subtext: {
      type: String,
      default: '',
    },
  },
}
</script>
