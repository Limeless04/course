import { createRouter, createWebHistory } from 'vue-router'
// there is also createWebHashHistory and createMemoryHistory
import Home from '@pages/home/Home.vue'
import Login from '@pages/auth/Login.vue'
import Register from '@pages/auth/Register.vue'
import Catalogue from '@pages/textbooks/Catalogue.vue'
import Quiz from '@pages/quiz/Quiz.vue'
import BookTOC from '@pages/textbooks/BookTOC.vue'
import QuizCard from "@pages/quiz/QuizCard.vue"


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: "home",
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/catalogue',
            name: 'catalogue',
            component: Catalogue,
        },
        {
            path: '/catalogue/:name',
            name: 'book-toc',
            component: BookTOC
        },
        {
            path: '/quiz',
            name: 'quiz',
            component: Quiz
        },
        {
            path: '/quiz/:name',
            name: 'quiz-card',
            component: QuizCard
        }
    ],
})


export default router