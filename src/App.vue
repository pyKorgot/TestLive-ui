<template>
  <TestPlanView />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import TestPlanComponent from './components/TestPlanComponent.vue';
import TestPlanView from './views/TestPlanView.vue'

export default defineComponent({
  name: 'App',
  components: {
    TestPlanView
  }
});
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
