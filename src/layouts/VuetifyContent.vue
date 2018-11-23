<template>
  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'VuetifyContentLayout',
})
</script>
