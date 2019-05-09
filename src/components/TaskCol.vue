<template>
  <v-layout justify-center>
    <v-flex grow>
      <span class="column-title">TODO</span>
      <v-item-group class="card-group">
        <task-card></task-card>
      </v-item-group>
      <v-btn icon align-left>
        <v-icon medium>fas fa-plus-circle</v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TaskCard from '@/components/TaskCard.vue' // @ is an alias to /src

@Component({
  components: {
    TaskCard
  }
})
export default class Home extends Vue {}
</script>

<style>

</style>
