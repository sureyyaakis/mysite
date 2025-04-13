<script setup>
// Layout components
import Navbar from './components/layout/Navbar.vue';
import Footer from './components/layout/Footer.vue';

// Initialize dark mode from local storage on app mount
if (typeof window !== 'undefined') {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'dark') {
    document.documentElement.classList.add('dark');
  }
}
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors">
    <Navbar />
    
    <main class="pt-16"> <!-- Add padding to account for fixed navbar -->
      <router-view />
    </main>
    
    <Footer />
  </div>
</template>

