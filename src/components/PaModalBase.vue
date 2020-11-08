<template>
  <div v-if="hasContent" class="pa-modal">
    <v-dialog
      v-model="hasContent"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      content-class="pa-modal__modal"
      @keydown="setModalContent(null)"
    >
      <v-card tile class="pa-modal__card">
        <v-toolbar
          :src="content.image_url || defaultImage"
          flat
          dark
          color="var(--color-primary)"
          class="pa-modal__header"
          height="300"
        >
          <v-btn
            icon
            dark
            class="pa-modal__close"
            @click="setModalContent(null)"
          >
            <v-icon large>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>
            <slot name="header" :content="content" />
          </v-toolbar-title>
        </v-toolbar>

        <v-card-text>
          <slot name="description" :content="content" />
          <slot name="info" :content="content" />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'PaModal',

  data() {
    return {
      stringProps: [
        'first_brewed',
        'abv',
        'ibu',
        'ph',
        'attenuation_level',
        'ingredients',
        'food_pairing',
        'brewers_tips',
      ],
    }
  },

  computed: {
    hasContent: {
      get() {
        return !!this.content
      },
      set(val) {
        return val
      },
    },

    defaultImage() {
      return require('@/assets/images/bottle.png')
    },

    ...mapGetters({
      content: 'common/getModalContent',
    }),
  },

  methods: {
    ...mapActions({
      setModalContent: 'common/setModalContent',
    }),
  },
}
</script>

<style lang="scss" scoped>
.pa-modal {
  &__card {
    display: block !important;
  }
  &__close {
    position: absolute;
    top: rem(24);
    left: rem(32);
  }
}
</style>

<style lang="scss">
.pa-modal {
  &__modal {
    .v-image__image {
      background-size: contain;
    }
  }
}
</style>
