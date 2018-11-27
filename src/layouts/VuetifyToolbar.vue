<template>
  <v-toolbar app>
    <v-toolbar-side-icon @click.stop="changeNavigationDrawer()"></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'VuetifyToolbarLayout',
  computed: {
    isEnabledNavigationDrawer (): boolean {
      return this.$store.getters['layout/isEnabledNavigationDrawer']
    },
  },
  methods: {
    changeNavigationDrawer () {
      this.$store.dispatch('layout/changeNavigationDrawer', !this.isEnabledNavigationDrawer)
    },
  },
})
</script>
