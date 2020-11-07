<template>
  <section class="pa-filters">
    <pa-search
      @handleSearch="searchByName"
      @resetSearch="fetchBeers"
      :searching="searching"
      :label="searching ? 'Searching' : 'Search by name'"
      hint="Minimum of 3 characters"
    />
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import PaSearch from '@/components/PaSearch'

export default {
  name: 'PaFilters',

  components: {
    PaSearch,
  },

  props: {
    title: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      searching: false,
    }
  },

  methods: {
    async searchByName(query) {
      this.searching = true
      await this.searchBeers(query)
      this.searching = false
    },

    ...mapActions({
      searchBeers: 'punkapi/fetchBeersByName',
      fetchBeers: 'punkapi/fetchBeers',
    }),
  },
}
</script>

<style lang="scss" scoped></style>
