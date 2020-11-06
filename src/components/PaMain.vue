<template>
  <main class="pa-main">
    <pa-grid v-if="beers && beers.length" :items="beers" />
    <pa-error v-else-if="error" :error="error" />
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PaGrid from '@/components/PaGrid'
import PaError from '@/components/PaError'

export default {
  name: 'PaMain',

  components: {
    PaGrid,
    PaError,
  },

  async created() {
    await this.fetchBeers()
  },

  computed: {
    ...mapGetters({
      beers: 'punkapi/getBeers',
      error: 'punkapi/getError',
    }),
  },

  methods: {
    ...mapActions({
      fetchBeers: 'punkapi/fetchBeers',
    }),
  },
}
</script>

<style lang="scss" scoped>
.pa-main {
  padding: rem(48) 0 rem(124);
}
</style>
