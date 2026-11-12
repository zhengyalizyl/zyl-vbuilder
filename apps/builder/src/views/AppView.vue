<script setup lang="ts">
import AppNavigator from '../components/AppNavigator.vue';

</script>
<template>
  <div class="app-wrapper">
    <header class="app-header">
      <AppNavigator msg="zyl学习"/>
    </header>
    <main class="app-main">
      <RouterView/>
    </main>
  </div>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;
}

.app-main {
 height: calc(100% - 48px);
}
</style>
