<template>
  <div id="page-info">

    <NavBar></NavBar>

    <v-container fluid class="bg-blue-grey-darken-4">
      Info
    </v-container>

  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'Info',

  components: {
    NavBar,
  },
}
</script>

<style scoped lang="scss">

</style>
