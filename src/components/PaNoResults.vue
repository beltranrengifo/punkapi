<template>
  <section class="pa-no-results text-center">
    <h2 class="mb-8">
      {{ text }}
    </h2>
    <p>
      Try again!
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
  },
}
</script>

<style lang="scss" scoped></style>
