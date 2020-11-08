<template>
  <div>
    <section class="pa-grid" :style="getStyles">
      <pa-grid-item
        v-for="item in items"
        :key="item.id"
        :item="item"
        :parent-width="width"
        :columns="columns"
      />
    </section>
    <section class="text-center mt-14">
      <v-btn
        color="orange lighten-2"
        text
        outlined
        @click="$emit('handle-more')"
      >
        Load more
        <v-badge color="amber darken-3" :content="items.length" offset-y="-8" />
      </v-btn>
    </section>
  </div>
</template>

<script>
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
  grid-column-gap: rem(12);
  grid-row-gap: rem(32);
  grid-auto-rows: minmax(100px, auto);
  max-width: 100%;
  margin: 0 auto;
}
</style>
