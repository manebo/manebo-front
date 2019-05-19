<template>
  <v-layout justify-center>
    <v-flex grow>
      <span class="column-title">TODO</span>
      <h1 v-show="$store.state.loading">loading...</h1>
      <v-item-group class="card-group" v-show="!$store.state.loading">
        <task-card v-for="task in $store.state.tasks" :task="task" :key="task.id">
        </task-card>
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

export default class Home extends Vue {
  public beforeCreate () {
    this.$store.dispatch('getTasksFromApi', this.$store)
    console.log(this.$store.state.tasks)
    console.log(this.$store.state.loading)
  }
}
</script>

<style>

</style>
