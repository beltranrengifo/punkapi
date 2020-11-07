<template>
  <component
    :is="tag"
    class="pa-title"
    :class="{
      'pa-title--upper': upper,
      'pa-title--underline': useLine,
    }"
    :data-subtitle="subtext"
  >
    {{ text }}
  </component>
</template>

<script>
export default {
  name: 'PaTitle',

  props: {
    text: {
      type: String,
      required: true,
    },
    subtext: {
      type: String,
      default: '',
    },
    tag: {
      type: String,
      default: 'h2',
    },
    useLine: {
      type: Boolean,
      default: false,
    },
    upper: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.pa-title {
  margin-top: rem(24);
  font-size: rem(40);
  letter-spacing: 8px;
  &--upper {
    text-transform: uppercase;
  }
  &--underline {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: var(--color-primary);
      bottom: -48px;
      z-index: 1;
      border-radius: 6px;
    }
  }
  &:before {
    content: attr(data-subtitle);
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
    font-size: rem(10);
    white-space: pre;
  }
}
</style>
