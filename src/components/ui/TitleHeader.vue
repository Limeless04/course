<template>
    <div>
        <h1 class="text-3xl text-gray-500 border-b-4 w-full">{{ title }}</h1>
    </div>
</template>

<script setup>
defineProps([
    'title'
])
</script>