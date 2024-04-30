<template>
  <Header />
  <main>
    <router-view />
  </main>
</template>
<script setup>
import Header from "./components/Header.vue";
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});
</script>
<style scoped></style>
