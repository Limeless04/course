<template>
    <div class="flex flex-col">
        <RouterLink to="/quiz" class="flex gap-2 items-center xs:mt-3 text-indigo-600 hover:underline hover:underline-offset-2 mb-4">
            <ChevronDoubleLeftIcon class="text-indigo-600 h-4 w-4" /> Kembali ke quiz
        </RouterLink>
        <TitleHeader :title="subjectName"/>
        <div class="lg:w-2/3 xs:w-full h-fit mt-10 mx-auto  bg-white rounded-lg shadow-md p-4">
            <h2 class="text-2xl font-semibold text-gray-800">{{ questions[currentQuestionIndex] }}</h2>

            <div class="mt-4">
                <div v-for="(answer, index) in answers" :key="index" class="mb-2">
                    <label class="flex items-center">
                        <input type="radio" :id="`answer${index}`" :value="answer" v-model="selectedAnswer"
                            class="form-radio text-indigo-600" />
                        <span class="ml-2 text-gray-700">{{ answer }}</span>
                    </label>
                </div>
                <button @click="checkAnswer" class="mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
                    Check Answer
                </button>
            </div>
            <div class="flex gap-10 align-middle items-center justify-center">
                <button @click="previousQuestion"
                    class="mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
                    :disabled="currentQuestionIndex === 0">Previous</button>
                <button @click="nextQuestion"
                    class="mt-4 bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Next</button>
            </div>
        </div>
    </div>
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

const questions = ['Question 1', 'Question 2', 'Question 3'];
const answers = ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'];

const currentQuestionIndex = ref(0);
const selectedAnswer = ref('');

const previousQuestion = () => {
    if (currentQuestionIndex.value > 0) {
        currentQuestionIndex.value -= 1;
        selectedAnswer.value = '';
    }
};

const nextQuestion = () => {
    if (currentQuestionIndex.value < questions.length - 1) {
        currentQuestionIndex.value += 1;
        selectedAnswer.value = '';
    }
};

const checkAnswer = () => {
    if (selectedAnswer.value === 'Correct Answer') {
        alert('Correct!');
    } else {
        alert('Incorrect. Please try again.');
    }
};

</script>