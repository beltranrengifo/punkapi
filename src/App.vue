<template>
  <v-app>
    <pa-header />

    <pa-main />

    <v-footer app>
      <pa-switcher
        icon="mdi-theme-light-dark"
        @handle-value="$vuetify.theme.dark = !$vuetify.theme.dark"
      />
    </v-footer>
  </v-app>
</template>

<script>
import PaHeader from '@/components/PaHeader'
import PaMain from '@/components/PaMain'
import PaSwitcher from '@/components/PaSwitcher'

export default {
  name: 'App',

  components: {
    PaHeader,
    PaMain,
    PaSwitcher,
  },

  async created() {
    this.setTitle()
  },

  methods: {
    setTitle() {
      document.title = this.$store.state.common.DEFAULT_TITLE
    },
  },
}
</script>
