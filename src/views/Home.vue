<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs4>
        <task-col></task-col>
      </v-flex>
      <v-flex xs4>
        <task-col></task-col>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TaskCol from '@/components/TaskCol.vue' // @ is an alias to /src

@Component({
  components: {
    TaskCol
  }
})
export default class Home extends Vue {}
</script>
