<template>
  <div id="page-home" :style="dynamicStyleObject">

    <v-container fluid>
<!--      <h1 v-for="item in ['balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls','balls',]">-->
<!--        {{ item }}-->
<!--      </h1>-->

      <v-row no-gutters align="center" style="height: 100%; padding: 1.5rem; position: relative;">
        <v-col cols="12" class="text-center">
          <h1 :class="{'title-sm': smAndDown, 'title-md': md, 'title-lg': lgAndUp}">color.me</h1>
          <p>The best website ever created.</p>
          <div
            class="nav-grid text-center"
            :class="{'nav-grid-sm': smAndDown, 'nav-grid-md': md, 'nav-grid-lg': lgAndUp}"
          >
            <router-link to="/info" class="nav-button" @mouseenter="updateColorPrimary()">
              <span>info</span>
            </router-link>
            <a class="nav-button" @mouseenter="updateColorPrimary()">
              <span>mix</span>
            </a>
            <a class="nav-button" @mouseenter="updateColorPrimary()">
              <span>blend</span>
            </a>
            <a class="nav-button" @mouseenter="updateColorPrimary()">
              <span>modify</span>
            </a>
          </div>
        </v-col>

        <div class="primary-color-ref">
          {{ currentColorHex }}
        </div>
      </v-row>

    </v-container>

    <Footer></Footer>

  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import { useDisplay } from 'vuetify';
import { mapActions } from 'vuex';
import { Color } from '@/models/color';

export default {
  name: 'Home',

  components: {
    Footer,
    NavBar,
  },

  computed: {
    dynamicStyleObject() {
      return {
        '--color-primary': this.$store.state.colorPrimary,
        '--color-primary-text': this.$store.state.colorPrimaryText,
        '--color-primary-clamped': this.$store.state.colorPrimaryClamped,
      };
    },

    currentColorHex() {
      const color = new Color(this.$store.state.colorPrimary);
      return color.toString('hex');
    },
  },

  setup() {
    const { smAndDown, md, lgAndUp } = useDisplay();

    return { smAndDown, md, lgAndUp };
  },

  methods: {
    ...mapActions({
      updateColorPrimary: 'updateColorPrimary',
    }),
  },
};
</script>

<style scoped lang="scss">
#page-home {
  height: 100%;
  padding: 24px;

  .v-container {
    height: calc(100% - 48px); // 48px is Footer height + Footer margin
    border-radius: 12px;
    background-color: $bg-grey;
  }
}

h1 {
  color: var(--color-primary-clamped);
}

.title {
  &-sm {
    font-size: 3rem;
    line-height: 1;
  }

  &-md {
    font-size: 4.5rem;
    line-height: 1;
  }

  &-lg {
    font-size: 6rem;
    line-height: 1;
  }
}

p {
  color: $text-light-grey;
}

.nav-grid {
  margin: 2rem auto 0;
  display: grid;
  max-width: 60%;

  &-sm {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 0.75rem;
  }

  &-md {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
  }

  &-lg {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.25rem;
  }
}

.nav-button {
  padding: 1rem 2rem;
  border: 1px solid #3f3f4699;
  border-radius: 0.5rem;
  text-decoration: none;

  transition: 150ms ease-out;

  span {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.25rem;
    color: $text-white;
  }

  &:hover {
    border-color: var(--color-primary);
    background-color: var(--color-primary);

    transform: translateY(-5px);

    span {
      color: var(--color-primary-text);
    }
  }
}

.primary-color-ref {
  position: absolute;
  width: 100px;
  bottom: 1.5rem;
  left: 50%;
  margin-left: -50px;
  text-align: center;
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: bold;
  color: var(--color-primary-clamped);
}
</style>
