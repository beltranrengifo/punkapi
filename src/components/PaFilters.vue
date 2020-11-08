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
    <pa-picker label="Brewed by date" @handlePicker="searchByDateRange" />
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import PaSearch from '@/components/PaSearch'
import PaSwitcher from '@/components/PaSwitcher'
import PaPicker from '@/components/PaPicker'

export default {
  name: 'PaFilters',

  components: {
    PaSearch,
    PaSwitcher,
    PaPicker,
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

    async searchByDateRange(dates) {
      await this.fetchBeers({
        params: {
          ...dates,
        },
      })
    },

    ...mapActions({
      fetchBeers: 'punkapi/fetchBeers',
    }),
  },
}
</script>

<style lang="scss" scoped>
.pa-filters {
  display: flex;
  justify-content: space-evenly;
  margin-top: rem(48);

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
}
</style>
