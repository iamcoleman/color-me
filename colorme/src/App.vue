<template>
  <v-app :style="dynamicStyleObject">

<!--    <v-navigation-drawer position="right"></v-navigation-drawer>-->

    <v-main>
      <router-view/>
    </v-main>

  </v-app>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',

  data: () => ({
    //
  }),

  computed: {
    dynamicStyleObject() {
      return {
        '--color-primary': this.$store.state.colorPrimary,
        '--color-primary--text': this.$store.state.colorPrimaryText,
        '--color-primary-clamped': this.$store.state.colorPrimaryClamped,
      };
    },
  },

  mounted() {
    // initialize `colorPrimary` when the app loads
    this.updateColorPrimary();
  },

  methods: {
    ...mapActions({
      updateColorPrimary: 'updateColorPrimary',
    }),
  },
}
</script>

<style lang="scss">
.v-application {
  background-color: var(--color-primary) !important;
}
</style>
