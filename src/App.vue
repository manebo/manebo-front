<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Manebo</span>
        <span class="font-weight-light">FRONT TEST</span>
      </v-toolbar-title>

      <!-- fill space -->
      <v-spacer></v-spacer>

      <!-- menu link buttons -->
      <v-btn icon to="/">
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn icon to="login">
        <v-icon>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>
