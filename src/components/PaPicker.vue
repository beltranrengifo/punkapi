<template>
  <article class="pa-picker">
    <v-menu
      v-model="showPicker"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="dateRangeText"
          :label="label"
          readonly
          v-bind="attrs"
          v-on="on"
          color="var(--color-primary)"
          class="pa-picker__input"
        />
      </template>
      <v-date-picker
        v-model="dateRange"
        range
        reactive
        no-title
        scrollable
        type="month"
        min="2007-09"
        max="2016-05"
      >
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="cancel">
          Cancel
        </v-btn>
        <v-btn text color="primary" @click="handleSearch">
          OK
        </v-btn>
      </v-date-picker>
    </v-menu>
  </article>
</template>

<script>
export default {
  name: 'PaPicker',

  props: {
    label: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      dateRange: ['2007-09'],
      showPicker: false,
    }
  },

  computed: {
    dateRangeText: {
      get() {
        return `From ${this.dateRange[0] || ''} To ${this.dateRange[1] || ''}`
      },
      set(val) {
        return val
      },
    },
  },

  methods: {
    handleSearch() {
      const dateObj = {}
      if (this.dateRange[0])
        dateObj.brewed_after = this.formatDate(this.dateRange[0])
      if (this.dateRange[1])
        dateObj.brewed_before = this.formatDate(this.dateRange[1])

      this.$emit('handlePicker', dateObj)
      this.showPicker = false
    },

    cancel() {
      this.showPicker = false
      this.dateRange = []
      this.$emit('handlePicker')
    },

    formatDate(date) {
      if (!date) return null

      const [year, month] = date.split('-')
      return `${month}-${year}`
    },
  },
}
</script>

<style lang="scss" scoped>
.pa-picker {
  @include input;
}
</style>
