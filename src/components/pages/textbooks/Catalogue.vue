<template>
    <section>
        <TitleHeader title="Halaman Textbook" />
        <div class="flex gap-10 mt-10 text-center xs:flex-col lg:flex-row">
            <RouterLink to="/catalogue/matematika">
                <CardBook subject="Matematika"/>
            </RouterLink>
            
            <RouterLink to="/catalogue/fisika">
                <CardBook subject="Fisika"/>
            </RouterLink>
            
            <RouterLink to="/catalogue/biologi">
                <CardBook subject="Biologi"/>
            </RouterLink>
        </div>
       
    </section>
</template>

<script setup>
import TitleHeader from '@ui/TitleHeader.vue';
import CardBook from '@ui/Card.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>