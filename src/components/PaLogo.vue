<template>
  <div class="pa-logo">
    <div class="pa-logo__bottle">
      <div class="pa-logo__bottle-face">
        <svg
          viewBox="0 0 220 860"
          xmlns="http://www.w3.org/2000/svg"
          class="pa-logo__item"
        >
          <g fill="none" fill-rule="evenodd">
            <path
              d="M20 340h180v100H20V340zm20-160h140v160H40V180zM60 20h100v160H60V20zm140 360h20v460h-20V380zM0 380h20v460H0V380zm20 400h180v80H20v-80z"
              fill="#333"
            ></path>
            <path
              fill="#00AFDB"
              d="M20 440h180v340H20zM60 0h100v20H60z"
              class="pa-logo__item-label"
            ></path>
          </g>
        </svg>
      </div>

      <div class="pa-logo__bottle-face">
        <svg
          viewBox="0 0 220 860"
          xmlns="http://www.w3.org/2000/svg"
          class="pa-logo__item"
        >
          <g fill="none" fill-rule="evenodd">
            <path
              d="M20 340h180v100H20V340zm20-160h140v160H40V180zM60 20h100v160H60V20zm140 360h20v460h-20V380zM0 380h20v460H0V380zm20 400h180v80H20v-80z"
              fill="#333"
            ></path>
            <path
              fill="#00AFDB"
              d="M20 440h180v340H20zM60 0h100v20H60z"
              class="pa-logo__item-label"
            ></path>
          </g>
        </svg>
      </div>

      <div class="pa-logo__bottle-face">
        <svg
          viewBox="0 0 220 860"
          xmlns="http://www.w3.org/2000/svg"
          class="pa-logo__item"
        >
          <g fill="none" fill-rule="evenodd">
            <path
              d="M20 340h180v100H20V340zm20-160h140v160H40V180zM60 20h100v160H60V20zm140 360h20v460h-20V380zM0 380h20v460H0V380zm20 400h180v80H20v-80z"
              fill="#333"
            ></path>
            <path
              fill="#00AFDB"
              d="M20 440h180v340H20zM60 0h100v20H60z"
              class="pa-logo__item-label"
            ></path>
          </g>
        </svg>
      </div>

      <div class="pa-logo__bottle-face">
        <svg
          viewBox="0 0 220 860"
          xmlns="http://www.w3.org/2000/svg"
          class="pa-logo__item"
        >
          <g fill="none" fill-rule="evenodd">
            <path
              d="M20 340h180v100H20V340zm20-160h140v160H40V180zM60 20h100v160H60V20zm140 360h20v460h-20V380zM0 380h20v460H0V380zm20 400h180v80H20v-80z"
              fill="#333"
            ></path>
            <path
              fill="#00AFDB"
              d="M20 440h180v340H20zM60 0h100v20H60z"
              class="pa-logo__item-label"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaLogo',
}
</script>

<style lang="scss" scoped>
.pa-logo {
  &__bottle {
    width: rem(12);
    transform-style: preserve-3d;
    animation: spin 5s linear infinite;
    position: absolute;
    top: 8px;
    left: rem(16);
  }
  &__bottle-face {
    position: absolute;
    width: rem(12);
    &:first-child {
      transform: translateZ(-6px) rotateY(180deg);
    }
    &:nth-child(2) {
      transform: rotateY(-270deg) translateX(6px);
      transform-origin: top right;
    }
    &:nth-child(3) {
      transform: rotateY(270deg) translateX(-6px);
      transform-origin: center left;
    }
    &:nth-child(4) {
      transform: translateZ(6px);
    }
  }
  &__item-label {
    animation: color-change 14s infinite forwards;
  }
}
</style>
