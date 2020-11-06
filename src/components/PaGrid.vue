<template>
  <section class="pa-grid" :style="getStyles">
    <pa-grid-item
      v-for="item in items"
      :key="item.id"
      :item="item"
      :parent-width="width"
      :columns="columns"
    />
  </section>
</template>

<script>
/* eslint-disable indent */
import PaGridItem from '@/components/PaGridItem'
import Responsive from '@/mixins/responsive'

export default {
  name: 'PaGrid',

  mixins: [Responsive],

  components: {
    PaGridItem,
  },

  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  computed: {
    getStyles() {
      return `
        width: ${this.width}px;
        grid-template-columns: repeat(${this.columns}, 1fr);
      `
    },

    width() {
      return this.isBigDesktop
        ? 1280
        : this.isDesktop
        ? 1024
        : this.isTablet
        ? 768
        : 320
    },

    columns() {
      return this.isBigDesktop ? 4 : this.isDesktop ? 4 : this.isTablet ? 2 : 1
    },
  },
}
</script>

<style lang="scss" scoped>
.pa-grid {
  display: grid;
  grid-gap: rem(12);
  grid-auto-rows: minmax(100px, auto);
  max-width: 100%;
  margin: rem(48) auto 0;
}
</style>
