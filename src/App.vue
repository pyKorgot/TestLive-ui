<template>
  <!-- <TestPlanView /> -->
  <n-config-provider :theme="darkTheme">
    <BaseView />
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BaseView from './views/BaseView.vue';
import { darkTheme, NConfigProvider } from 'naive-ui';

export default defineComponent({
  name: 'App',
  components: {
    BaseView,
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
