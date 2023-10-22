<template>
    <section class="flex flex-col gap-3 ">
        <TitleHeader :title="subjectName" />
        <RouterLink to="/catalogue" class="flex align-middle items-center text-indigo-600 hover:underline hover:underline-offset-2">
            <ChevronDoubleLeftIcon class="h-4 w-4 text-indigo-600" />
            Kembali Ke Daftar Buku
        </RouterLink>
        <div class="mt-3 ">
            <h1 class="text-xl">1. Chapter 1</h1>
            <div class="flex flex-col gap-2 mt-4 ml-4 text-indigo-500  cursor-pointer">
                <div v-for="(chapter, index) in subchapters" :key="index">
                    <h2 class="hover:underline hover:underline-offset-2">{{ chapter }}</h2>
                </div>
                <!-- <h2>1.1 Subchapter</h2>
                <h2>1.2 Subchapter</h2>
                <h2>1.3 Subchapter</h2>
                <h2>1.4 Subchapter</h2>
                <h2>1.5 Subchapter</h2>
                <h2>1.6 Subchapter</h2> -->
            </div>
        </div>
    </section>
</template>

<script setup>
import {
    ChevronDoubleLeftIcon

} from '@heroicons/vue/24/solid';
import TitleHeader from '@ui/TitleHeader.vue';
import { ref, computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router';
const route = useRoute()

const subjectName = computed(() => (route.params.name).charAt(0).toUpperCase() + (route.params.name).slice(1))
// const subjectName = ref(params.route.name)
const subchapters = [
    '1.1 Subchapter',
    '1.2 Subchapter',
    '1.3 Subchapter',
    '1.4 Subchapter',
    '1.5 Subchapter',
    '1.6 Subchapter',

]
</script>