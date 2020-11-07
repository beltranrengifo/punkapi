<template>
  <section class="pa-filters">
    <pa-search
      @handleSearch="searchByName"
      @resetSearch="fetchBeers"
      :searching="searching"
      :label="searching ? 'Searching' : 'Search by name'"
      hint="Minimum of 3 characters"
    />
    <pa-switcher @handle-value="searchByAbv" label="Non-Alcoholic Beers" />
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import PaSearch from '@/components/PaSearch'
import PaSwitcher from '@/components/PaSwitcher'

export default {
  name: 'PaFilters',

  components: {
    PaSearch,
    PaSwitcher,
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
      await this.fetchBeers({
        params: {
          beer_name: query.replace(/\s/, '_', 'g'),
        },
      })
      this.searching = false
    },

    async searchByAbv(val) {
      const params = val
        ? {
            params: {
              abv_lt: 1,
            },
          }
        : {}
      this.fetchBeers(params)
    },

    ...mapActions({
      fetchBeers: 'punkapi/fetchBeers',
    }),
  },
}
</script>

<style lang="scss" scoped></style>
