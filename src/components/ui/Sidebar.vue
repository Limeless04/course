<template>
    <div>
        <!-- Toggle Button for Small Screens -->
        <button @click="toggleSidebar" class="absolute top-0 left-0 h-14 w-fit px-4 text-white bg-indigo-900 lg:hidden">
            <Bars3CenterLeftIcon class="text-white h-6 w-6" />
        </button>

        <!-- Sidebar -->
        <aside :class="sidebarClasses"
            class="lg:block text-center bg-indigo-900  w-64 h-screen xs:-translate-y-28 mt-28">
            <div class="text-gray-100 text-xl">
                <div class="p-2.5 flex items-center">
                    <FaceSmileIcon class="h-6 w-6"/>
                    <h1 class="font-bold text-gray-200 text-[15px] ml-3">Sidebar</h1>
                </div>
                <div class="my-2 bg-gray-600 h-[1px]"></div>
            </div>

            <div class="flex items-center rounded-md px-4 duration-300 cursor-pointer  text-white">
                <RouterLink to="/" 
                    class="w-full  hover:bg-indigo-600 hover:text-white flex items-center p-2.5 mt-3 text-white" exact active-class="border-r-8 border-l-8" >
                    <HomeIcon class=" h-4 w-4" />
                    <span class="text-[15px] ml-4 font-bold">
                        Home
                    </span>
                </RouterLink>
            </div>
            <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-indigo-600 text-white"
                @click="toggleDropdown">
                <BookOpenIcon class="h-4 w-4 text-white ml-3" />
                <div class="flex justify-between w-full items-center">
                    <span class="text-[15px] ml-4 text-gray-200 font-bold">Textbooks</span>
                    <span class="text-sm" :class="{ 'rotate-180': isDropdownOpen }">
                        <ChevronDownIcon class="h-6 w-6 text-white" />
                    </span>
                </div>

            </div>
            <div class="text-left text-sm w-4/5 mx-auto  font-bold ml-8 bg-indigo-950 rounded-md text-white"
                :class="{ hidden: !isDropdownOpen }">
                <RouterLink to="/catalogue" class="flex items-center hover:bg-indigo-600 hover:rounded-md hover:text-white"
                    exact active-class="border-r-8 border-l-8">
                    <BookmarkIcon class="h-3 w-3  ml-4" />
                    <h1 class="cursor-pointer p-2  rounded-md "> List Buku</h1>
                </RouterLink>
            </div>
            <div class="flex items-center px-4 duration-300 cursor-pointer  text-white">
                <RouterLink to="/quiz" exact active-class="border-r-8 border-l-8"
                    class="w-full flex p-2.5 mt-3 text-white items-center hover:bg-indigo-600 hover:text-white">
                    <QuestionMarkCircleIcon class="h-4 w-4" />
                    <span class="text-[15px] ml-4 font-bold">Quiz</span>
                </RouterLink>
            </div>
            <div class="flex items-center rounded-md px-4 duration-300 cursor-pointer  text-white">
                <RouterLink to="/login"
                    class="p-2.5 mt-3 flex items-center w-full text-white hover:bg-indigo-600 hover:text-white"
                    exact active-class="border-r-8 border-l-8">
                    <ArrowTopRightOnSquareIcon class="h-4 w-4" />
                    <span class="text-[15px] ml-4 font-bold">Login</span>
                </RouterLink>
            </div>
            <div class="flex items-center rounded-md px-4 duration-300 cursor-pointer  text-white">
                <RouterLink to="/register"
                    class="p-2.5 mt-3 flex items-center w-full text-white hover:bg-indigo-600 hover:text-white"
                    exact active-class="border-r-8 border-l-8">
                    <UserPlusIcon class="h-4 w-4" />
                    <span class="text-[15px] ml-4 font-bold">Register</span>
                </RouterLink>
            </div>
        </aside>
    </div>
</template>
  
<script setup>
import { ref, computed } from 'vue';
import {
    ChevronDownIcon,
    Bars3CenterLeftIcon,
    HomeIcon,
    BookOpenIcon,
    BookmarkIcon,
    QuestionMarkCircleIcon,
    ArrowTopRightOnSquareIcon,
    UserPlusIcon,
    FaceSmileIcon
} from '@heroicons/vue/24/solid';
import { RouterLink } from 'vue-router'
const isDropdownOpen = ref(true);
const isOpen = ref(true);

const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

const toggleSidebar = () => {
    isOpen.value = !isOpen.value;
};

const sidebarClasses = computed(() => ({
    'hidden': isOpen.value,
    'lg:block': isOpen.value, // Show on screens larger than "lg"
    // Add other classes as needed
}));
</script>
  