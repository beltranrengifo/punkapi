<template>
  <section class="pa-error text-center">
    <h2 class="mb-8">
      {{ error }}
    </h2>
    <p>
      Not funny :(
    </p>
  </section>
</template>

<script>
export default {
  name: 'PaError',

  props: {
    error: {
      type: Error,
      required: true,
    },
  },
}
</script>
