<template>
    <section>
        <TitleHeader title="Halaman Quiz" />
        <div class="flex lg:gap-10 xs:gap-2 mt-10 text-center xs:flex-col lg:flex-row ">
            <RouterLink to="/quiz/matematika">
                <Card subject="Matematika"/>
            </RouterLink>
            
            <RouterLink to="/quiz/fisika">
                <Card subject="Fisika"/>
            </RouterLink>
            
            <RouterLink to="/quiz/biologi">
                <Card subject="Biologi"/>
            </RouterLink>
        </div>
    </section>
</template>

<script setup>
import TitleHeader from '@ui/TitleHeader.vue';
import Card from '@ui/Card.vue'
import { RouterLink} from 'vue-router'
</script>