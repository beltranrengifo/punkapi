<template>
  <main class="pa-main">
    <pa-grid v-if="beers && beers.length" :items="beers" />
    <pa-error v-else-if="error" :error="error" />
    <pa-no-results v-else-if="!beers.length" text="No beers around :(" />
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PaGrid from '@/components/PaGrid'
import PaError from '@/components/PaError'
import PaNoResults from '@/components/PaNoResults'

export default {
  name: 'PaMain',

  components: {
    PaGrid,
    PaError,
    PaNoResults,
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
