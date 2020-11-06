<template>
  <main>
    <pa-grid :items="beers" />
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PaGrid from '@/components/PaGrid'

export default {
  name: 'PaMain',

  components: {
    PaGrid,
  },

  async created() {
    await this.fetchBeers()
  },

  computed: {
    ...mapGetters({
      beers: 'punkapi/getBeers',
    }),
  },

  methods: {
    ...mapActions({
      fetchBeers: 'punkapi/fetchBeers',
    }),
  },
}
</script>

<style lang="scss" scoped></style>
