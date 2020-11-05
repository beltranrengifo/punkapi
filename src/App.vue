<template>
  <div id="app">hi</div>
</template>

<script>
export default {
  name: 'App',
  components: {},

  data() {
    return {
      DEFAULT_TITLE: 'PunkApi Catalogue',
    }
  },

  created() {
    this.setTitle()
  },

  methods: {
    setTitle() {
      document.title = this.DEFAULT_TITLE
    },
  },
}
</script>

<style lang="scss"></style>
