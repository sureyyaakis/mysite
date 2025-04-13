<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isDarkMode = ref(false);

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle('dark', isDarkMode.value);
  localStorage.setItem('darkMode', isDarkMode.value ? 'dark' : 'light');
}

// Initialize dark mode from local storage on mount
if (typeof window !== 'undefined') {
  const savedMode = localStorage.getItem('darkMode');
  isDarkMode.value = savedMode === 'dark';
  document.documentElement.classList.toggle('dark', isDarkMode.value);
}

// Navigation items
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/#about' },
  { name: 'Experience', path: '/#experience' },
  { name: 'Projects', path: '/#projects' },
  { name: 'Blog', path: '/blog' }
];
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-dark-purple shadow-lg transition-all backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <router-link :to="{ path: '/' }" class="text-2xl font-bold gradient-text-lemon-purple">Sureyya</router-link>
      
      <div class="flex items-center space-x-8">
        <template v-for="(item, index) in navItems" :key="index">
          <router-link 
            :to="item.path" 
            class="text-secondary dark:text-light-lemon hover:text-tertiary dark:hover:text-light-pink transition-colors font-medium"
            :class="{ 'text-tertiary dark:text-light-pink': $route && $route.path === item.path }"
          >
            {{ item.name }}
          </router-link>
        </template>
        <button @click="toggleDarkMode" class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-secondary/30 transition-colors">
          <span v-if="isDarkMode" class="text-primary">
            <!-- Sun icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </span>
          <span v-else class="text-secondary">
            <!-- Moon icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </nav>
</template>
