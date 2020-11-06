export default {
  data() {
    return {
      screenWidth: window.innerWidth,
      breakpoints: [
        { size: 'isPhone', breakpoint: '(max-width: 767px)' },
        {
          size: 'isTablet',
          breakpoint: '(min-width: 768px) and (max-width: 1024px)',
        },
        { size: 'isDesktop', breakpoint: '(min-width: 1025px) and (max-width: 1280px)' },
        { size: 'isBigDesktop', breakpoint: '(min-width: 1281px)' },
      ],
      isBigDesktop: false,
      isDesktop: false,
      isTablet: false,
      isPhone: false,
    }
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.setScreenSizeValues)
      this.setScreenSizeValues()
    })
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    setScreenSizeValues() {
      this.screenWidth = window.innerWidth
      this.breakpoints.forEach((item) => {
        this[item.size] = window.matchMedia(item.breakpoint).matches
      })
    },
  },
}
