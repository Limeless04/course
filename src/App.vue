<script setup>
import Navbar from './components/ui/Navbar.vue';
import Sidebar from './components/ui/Sidebar.vue';
import {RouterView} from 'vue-router'
</script>

<template>
  <div class="flex flex-col w-screen">
    <Navbar />
    <div class="flex">
      <Sidebar />
      <RouterView class="lg:p-9 xs:p-2 w-full"/>
    </div>
  </div>
</template>

