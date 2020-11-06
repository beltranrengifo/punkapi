<template>
  <div class="pa-header">
    <v-app-bar app flat color="var(--color-soft)">
      <pa-logo />
      <v-spacer />
      <v-btn icon @click="handleDrawer">
        <v-icon>{{ setIcon }}</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import PaLogo from '@/components/PaLogo'

export default {
  name: 'PaHeader',

  components: {
    PaLogo,
  },

  methods: {
    ...mapMutations({
      handleDrawer: 'common/HANDLE_DRAWER',
    }),
  },

  computed: {
    setIcon() {
      return this.$store.state.common.showDrawer
        ? 'mdi-arrow-collapse-right'
        : 'mdi-dots-vertical'
    },
  },
}
</script>

<style lang="scss" scoped></style>
