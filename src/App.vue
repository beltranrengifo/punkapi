<template>
  <v-app>
    <pa-header />
    <pa-drawer />
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid></v-container>
    </v-main>

    <v-footer app>
      <pa-theme-switcher />
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import PaHeader from '@/components/PaHeader'
import PaDrawer from '@/components/PaDrawer'
import PaThemeSwitcher from '@/components/PaThemeSwitcher'

export default {
  name: 'App',

  components: {
    PaHeader,
    PaDrawer,
    PaThemeSwitcher,
  },

  async created() {
    this.setTitle()
    await this.fetchBeers()
  },

  methods: {
    setTitle() {
      document.title = this.$store.state.common.DEFAULT_TITLE
    },

    ...mapActions({
      fetchBeers: 'punkapi/fetchBeers',
    }),
  },
}
</script>
