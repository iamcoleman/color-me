<template>
  <div id="nav-bar" :style="dynamicStyleObject">

    <v-container fluid class="bar-container bg-blue-grey-darken-4">
      <v-row align="center">
        <v-col>
          <h1>color.me</h1>
        </v-col>

        <v-spacer></v-spacer>

        <v-col id="nav-menu" class="text-no-wrap">
          <ul>
            <li @mouseover="updateColorPrimary()">Info</li>
            <li @mouseover="updateColorPrimary()">Mix</li>
            <li @mouseover="updateColorPrimary()">Blend</li>
            <li @mouseover="updateColorPrimary()">Modify</li>
          </ul>
        </v-col>

        <v-spacer></v-spacer>

        <v-col class="text-right">
          <!-- TODO: Replace with v-select eventually -->
          <label for="output-format">Output Format: </label>
          <select name="output-format" id="output-format" style="color: white;">
            <option value="hex">HEX</option>
            <option value="rgb">RGB</option>
          </select>
        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'NavBar',

  data: () => ({
    //
  }),

  computed: {
    dynamicStyleObject() {
      return {
        '--color-primary': this.$store.state.colorPrimary,
        '--color-primary-text': this.$store.state.colorPrimaryText,
        '--color-primary-clamped': this.$store.state.colorPrimaryClamped,
      };
    },
  },

  methods: {
    ...mapActions({
      updateColorPrimary: 'updateColorPrimary',
    }),
  },
}
</script>

<style scoped lang="scss">
#nav-bar {
  margin: 24px 12px 12px 12px;
  color: white;
}

.bar-container {
  border-radius: 12px;
}

h1 {
  color: var(--color-primary-clamped);
}

#nav-menu {
  ul {
    list-style: none;
  }

  li {
    display: inline-block;
    padding: 6px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.25rem;
    cursor: pointer;

    &:hover {
      background-color: var(--color-primary);
      color: var(--color-primary-text);
      //color: var(--color-primary);
    }
  }
}
</style>
