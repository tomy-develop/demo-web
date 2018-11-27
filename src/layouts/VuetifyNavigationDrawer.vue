<template>
  <v-navigation-drawer app v-model="drawer">
    <navigation-route-list></navigation-route-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
import NavigationRouteList from '@/components/organisms/NavigationRouteList.vue'
export default Vue.extend({
  name: 'VuetifyNavigationDrawerLayout',
  components: {
    NavigationRouteList,
  },
  computed: {
    drawer: {
      get (): boolean {
        return this.$store.getters['layout/isEnabledNavigationDrawer']
      },
      set (value: boolean) {
        this.$store.dispatch('layout/changeNavigationDrawer', value)
      },
    },
  },
})
</script>
