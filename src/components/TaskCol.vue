<template>
  <v-layout justify-center>
    <v-flex grow>
      <v-item-group class="card-group">
        <span class="column-title">TODO</span>
        <task-card></task-card>
      </v-item-group>
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
