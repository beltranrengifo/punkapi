<template>
  <article class="pa-search">
    <v-text-field
      v-model="query"
      :label="label"
      clearable
      color="var(--color-primary)"
      :hint="hint"
      @input="handleSearch"
      class="pa-search__input"
    />
  </article>
</template>

<script>
export default {
  name: 'PaSearch',

  props: {
    searching: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    hint: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      query: '',
    }
  },

  methods: {
    handleSearch() {
      if (this.query && this.query.length < 3) {
        return
      }
      if (!this.query) {
        this.$emit('resetSearch')
        return
      }
      this.$emit('handleSearch', this.query)
    },
  },
}
</script>

<style lang="scss" scoped>
.pa-search {
  &__input {
    @include input;
  }
}
</style>
