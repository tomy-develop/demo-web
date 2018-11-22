<template>
  <v-app>
    <vuetify-navigation-drawer></vuetify-navigation-drawer>
    <vuetify-toolbar></vuetify-toolbar>
    <vuetify-content></vuetify-content>
    <vuetify-footer></vuetify-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import VuetifyNavigationDrawer from '@/layouts/VuetifyNavigationDrawer.vue'
import VuetifyToolbar from '@/layouts/VuetifyToolbar.vue'
import VuetifyContent from '@/layouts/VuetifyContent.vue'
import VuetifyFooter from '@/layouts/VuetifyFooter.vue'

export default Vue.extend({
  name: 'App',
  components: {
    VuetifyNavigationDrawer,
    VuetifyToolbar,
    VuetifyContent,
    VuetifyFooter,
  },
})
</script>
