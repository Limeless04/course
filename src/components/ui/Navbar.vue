<template>
    <header class="bg-indigo-900 text-white h-14 w-screen">
        <!-- Navbar content goes here -->
        <div class="flex items-center justify-center h-full">
            <a to="/" class="text-center">
                My App
            </a>
        </div>
    </header>
</template>

<script setup>
import Sidebar from '@components/ui/Sidebar.vue'
import { handleError } from 'vue';


const handleSidebar = () => {
    console.log("Sidebar toggle")
}
</script>