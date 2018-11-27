<template>
  <v-list>
    <v-list-tile
      v-for="route in routes"
      :key="route.name"
      @click="changeRoute(route.name)"
    >
      <v-list-tile-action>
        <v-icon>
          {{ route.icon }}
        </v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>
          {{ route.title }}
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'NavigationRouteListOrganism',
  computed: {
    routes (): object[] {
      return this.$store.getters['navigation/routes']
    },
  },
  methods: {
    changeRoute (value: string) {
      this.$router.push({name: value})
    },
  },
})
</script>
