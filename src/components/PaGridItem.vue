<template>
  <v-card
    max-width="100%"
    :width="itemWidth"
    class="pa-grid-item"
    rounded="0"
    flat
    hover
  >
    <v-img
      :src="item.image_url"
      height="200px"
      contain
      gradient="to left top, rgba(212,218,255,.1) 60%, rgba(25,142,172, 0.2)120%"
    />

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange lighten-2" text>
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he
          could deliver. You won't have time for sleeping, soldier, not with all
          the bed making you'll be doing. Then we'll go with that data file!
          Hey, you add a one and two zeros to that or we walk! You're going to
          do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: 'PaGridItem',

  props: {
    item: {
      type: Object,
      required: true,
    },
    parentWidth: {
      type: Number,
      default: 1440,
    },
    columns: {
      type: Number,
      default: 4,
    },
  },

  data() {
    return {
      show: false,
    }
  },

  computed: {
    itemWidth() {
      return this.parentWidth / this.columns
    },
  },
}
</script>

<style lang="scss" scoped>
.pa-grid-item {
  filter: grayscale(100%);
  transition: filter 0.2s ease-out;
  &:hover {
    filter: grayscale(0);
  }
}
</style>
