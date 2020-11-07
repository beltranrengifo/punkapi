<template>
  <header class="pa-header">
    <pa-logo />
    <pa-title
      :text="$store.state.common.DEFAULT_TITLE"
      subtext="Made with ❤️ & Vue.js"
      use-line
      tag="h1"
      upper
    />
  </header>
</template>

<script>
import PaLogo from '@/components/PaLogo'
import PaTitle from '@/components/PaTitle'

export default {
  name: 'PaHeader',

  components: {
    PaLogo,
    PaTitle,
  },
}
</script>

<style lang="scss" scoped>
.pa-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: rem(32) 0 rem(48);
}
</style>
