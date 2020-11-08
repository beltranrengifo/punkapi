<template>
  <main class="pa-main">
    <pa-grid
      v-if="beers && beers.length"
      :items="beers"
      @handle-more="loadMore"
    />
    <pa-error v-else-if="error" :error="error" />
    <pa-no-results
      v-else-if="!beers.length"
      text="No beers around :("
      subtext="Try again!"
    />
    <pa-modal-beer />

    <pa-floating-action
      text="TRY!"
      @handle-click="getRandom"
      :loading="loadingButton"
    />
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PaGrid from '@/components/PaGrid'
import PaError from '@/components/PaError'
import PaNoResults from '@/components/PaNoResults'
import PaModalBeer from '@/components/PaModalBeer'
import PaFloatingAction from '@/components/PaFloatingAction'

export default {
  name: 'PaMain',

  components: {
    PaGrid,
    PaError,
    PaNoResults,
    PaModalBeer,
    PaFloatingAction,
  },

  data() {
    return {
      page: 1,
      loadingButton: false,
    }
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
      fetchRandom: 'punkapi/fetchRandom',
      setModalContent: 'common/setModalContent',
    }),

    loadMore() {
      this.fetchBeers({
        loadMore: true,
        params: { page: ++this.page, per_page: 20 },
      })
    },

    async getRandom() {
      this.loadingButton = true
      const random = await this.fetchRandom()
      this.setModalContent(random)
      this.loadingButton = false
    },
  },
}
</script>

<style lang="scss" scoped>
.pa-main {
  padding: rem(48) 0 rem(124);
}
</style>
