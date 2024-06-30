<template>
  <n-config-provider :theme="darkTheme">
    <n-layout position="absolute">

      <n-layout-header style="height: 64px; padding: 24px" bordered>
        TestLive
      </n-layout-header>

      <n-layout-content>
       <router-view />
      </n-layout-content>

    </n-layout>
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { darkTheme, NConfigProvider, NLayout, NLayoutHeader, NLayoutContent } from 'naive-ui';

export default defineComponent({
  name: 'App',
  components: {
    NConfigProvider,
    NLayout,
    NLayoutHeader,
    NLayoutContent,
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
