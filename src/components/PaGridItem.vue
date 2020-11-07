<template>
  <article>
    <v-card
      v-if="itemIsValid"
      max-width="100%"
      :width="itemWidth"
      class="pa-grid-item"
      rounded="4"
      flat
    >
      <v-badge
        v-if="alcoholFree"
        color="indigo"
        content="0%"
        class="pa-grid-item__badge"
      />
      <v-img
        :src="item.image_url"
        height="200px"
        contain
        gradient="to left top, rgba(212,218,255,.1) 60%, rgba(25,142,172, 0.2)120%"
        class="pa-grid-item__image"
        @click="show = !show"
      />

      <v-card-title class="pa-grid-item__title" @click="show = !show">
        {{ item.name | truncate(25) }}
      </v-card-title>

      <v-card-subtitle class="pa-grid-item__subtitle" @click="show = !show">
        {{ item.tagline | truncate(35) }}
      </v-card-subtitle>

      <v-card-actions>
        <v-btn color="orange lighten-2" text>
          More details
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
            <p class="mb-1">First brewed in {{ item.first_brewed }}.</p>
            <p class="mb-0">
              {{ item.description | truncate(145) }}
            </p>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
    <v-skeleton-loader
      v-else
      type="image, list-item-avatar-three-line, article"
      max-width="100%"
      :width="itemWidth"
      height="338"
    />
  </article>
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

    itemIsValid() {
      return (
        typeof this.item === 'object' &&
        this.item !== null &&
        Object.keys(this.item).length > 0
      )
    },

    alcoholFree() {
      return this.item.abv < 1
    },
  },
}
</script>

<style lang="scss" scoped>
.pa-grid-item {
  filter: grayscale(70%);
  transition: all 0.2s ease-out;
  &:hover {
    filter: grayscale(0);
    /* Vuetify is using importants for modifiers :( */
    box-shadow: 0px 16px 34px -18px var(--card-hover-shadow) !important;
  }
  &__image,
  &__title,
  &__subtitle {
    cursor: pointer;
  }
  &__badge {
    position: absolute;
    top: 24px;
    right: 28px;
    .v-badge__badge {
      font-size: rem(14);
      font-weight: 600;
    }
  }
}
</style>
