<template>
  <pa-modal-base class="pa-modal-base--beer">
    <template v-slot:header="props">
      <h2>{{ props.content.name }}</h2>
      <small>{{ props.content.tagline }}</small>
      <br />
      <small class="font-weight-black">
        <span v-if="props.content.abv < 1">Alcohol free, under</span>
        {{ props.content.abv }}% abv.
      </small>
    </template>

    <template v-slot:description="props">
      <div class="pa-modal__info-container">
        <h3 class="pa-modal__description">{{ props.content.description }}</h3>
      </div>
    </template>
    <template v-slot:info="props">
      <div class="pa-modal__info-container">
        <ul class="pa-modal__details">
          <li v-if="props.content.first_brewed">
            First brewed:
            <span>{{ props.content.first_brewed }}</span>
          </li>
          <li v-if="props.content.abv">
            ABV:
            <span>{{ props.content.abv }}</span>
          </li>
          <li v-if="props.content.ibu">
            IBU:
            <span>{{ props.content.ibu }}</span>
          </li>
          <li v-if="props.content.ph">
            PH:
            <span>{{ props.content.ph }}</span>
          </li>
          <li v-if="props.content.attenuation_level">
            Attenuation level:
            <span>{{ props.content.attenuation_level }}</span>
          </li>
          <li v-if="props.content.boil_volume">
            Boil volume:
            <span>
              {{ props.content.boil_volume.value }}
              {{ props.content.boil_volume.unit }}
            </span>
          </li>
          <li v-if="props.content.method.mash_temp">
            Mash temp:
            <span>
              {{ props.content.method.mash_temp[0].temp.value }}º
              {{ props.content.method.mash_temp[0].temp.unit }}
            </span>
          </li>
          <li v-if="props.content.method.fermentation">
            Fermentation:
            <span>
              {{ props.content.method.fermentation.temp.value }}º
              {{ props.content.method.fermentation.temp.unit }}
            </span>
          </li>
          <li v-if="props.content.food_pairing">
            Food pairing:
            <span v-for="food in props.content.food_pairing" :key="food">
              {{ food }},
            </span>
          </li>
          <li v-if="props.content.brewers_tips" class="two-third">
            Tips:
            <span>{{ props.content.brewers_tips }}</span>
          </li>
          <li v-if="props.content.contributed_by">
            Contributed by:
            <span>{{ props.content.contributed_by }}</span>
          </li>
          <li v-for="malt in props.content.ingredients.malt" :key="malt.name">
            Malt: {{ malt.name }}
            <span>{{ malt.amount.value }} {{ malt.amount.unit }}</span>
          </li>
          <li
            v-for="(hop, i) in props.content.ingredients.hops"
            :key="hop.name + i"
          >
            Hop: {{ hop.name }}
            <span>{{ hop.amount.value }} {{ hop.amount.unit }}</span>
            <span>Adds {{ hop.attribute }}, use in {{ hop.add }}</span>
          </li>
          <li>
            Yeast:
            <span>{{ props.content.ingredients.yeast }}</span>
          </li>
        </ul>
      </div>
    </template>
  </pa-modal-base>
</template>

<script>
import PaModalBase from '@/components/PaModalBase'
export default {
  name: 'PaModalBeer',

  components: {
    PaModalBase,
  },
}
</script>

<style lang="scss" scoped>
.pa-modal {
  &__description {
    text-align: center;
    font-size: rem(20);
    margin-top: rem(32);
    margin-bottom: rem(8);
    line-height: 1.6;
  }
  &__info-container {
    max-width: 990px;
    margin: 0 auto;
    margin-top: 60px;
  }
  &__details {
    grid-column-gap: rem(12);
    grid-row-gap: rem(12);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    @media screen and (max-width: 767px) {
      grid-template-columns: repeat(2, 1fr);
    }
    li {
      border-bottom: 1px dotted #dfdfdf;
      border-right: 1px dotted #dfdfdf;
      padding: rem(16) rem(24) rem(60) rem(16);
      &.two-third {
        grid-column: 1 / 3;
      }
      span {
        display: block;
        font-weight: 600;
      }
    }
  }
}
</style>
