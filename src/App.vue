<template>
  <v-app>
    <pa-header />
    <pa-drawer />
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid></v-container>
    </v-main>

    <v-footer app>
      <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import PaHeader from '@/components/PaHeader'
import PaDrawer from '@/components/PaDrawer'

export default {
  name: 'App',

  components: {
    PaHeader,
    PaDrawer,
  },

  data() {
    return {
      pageNum: 1,
    }
  },

  async created() {
    this.setTitle()
    await this.fetchBeers({
      pageNum: this.pageNum,
    })
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
