<template>
  <!-- <TestPlanView /> -->
  <n-config-provider :theme="darkTheme">
    <TestPlanView />
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { darkTheme, NConfigProvider } from 'naive-ui';
import TestPlanView from './views/TestPlanView.vue';

export default defineComponent({
  name: 'App',
  components: {
    TestPlanView,
    NConfigProvider
  },
  setup() {
    return {
      darkTheme,
    }
  }
});
</script>

<style>

</style>
