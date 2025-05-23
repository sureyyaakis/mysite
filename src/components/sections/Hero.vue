<script setup>
import { ref, onMounted } from 'vue';

const socialLinks = [
  { 
    name: 'GitHub', 
    url: 'https://github.com/sureyyaakis', 
    icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
  },
  { 
    name: 'LinkedIn', 
    url: 'https://linkedin.com/in/sureyyaakis', 
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
  },
  { 
    name: 'Email', 
    url: 'mailto:sureyya.akis@example.com', 
    icon: 'M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z'
  }
];

const animatedText = ref('');
const fullText = "Software Engineer";
let currentIndex = 0;

onMounted(() => {
  const typingInterval = setInterval(() => {
    animatedText.value += fullText[currentIndex];
    currentIndex++;
    if (currentIndex >= fullText.length) {
      clearInterval(typingInterval);
    }
  }, 100);
});
</script>

<template>
  <section id="home" class="min-h-screen flex items-center justify-center py-16 px-4 bg-white dark:bg-dark-purple">
    <!-- Decorative circles -->
    <div class="absolute top-40 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
    <div class="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-tertiary/10 blur-3xl"></div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"></div>

    <div class="container mx-auto flex flex-col items-center relative z-10">
      <div class="w-full max-w-4xl text-center space-y-10 animate-fade-in">
        <h1 class="text-5xl md:text-7xl font-bold">
          Hi, I'm <span class="gradient-text-lemon-purple">Sureyya</span> <span class="wave-emoji">👋</span>
        </h1>
        
        <h2 class="text-2xl md:text-3xl text-secondary dark:text-light-lemon h-12 font-medium">
          {{ animatedText }}<span class="animate-pulse text-tertiary dark:text-tertiary">|</span>
        </h2>
        
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          I'm passionate about creating exceptional digital experiences through elegant code and innovative solutions.
        </p>
        
        <div class="flex justify-center space-x-6 pt-6">
          <a 
            v-for="link in socialLinks" 
            :key="link.name"
            :href="link.url" 
            target="_blank" 
            rel="noopener noreferrer"
            class="p-4 rounded-full gradient-bg-purple-pink text-white shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl"
            :title="link.name"
          >
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path :d="link.icon"/>
            </svg>
          </a>
        </div>
        
        <div class="pt-12">
          <a 
            href="#about" 
            class="button-gradient inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl md:text-lg"
          >
            Learn More About Me
            <svg class="ml-2 w-5 h-5 animate-bounce-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wave-emoji {
  display: inline-block;
  animation: wave 2.5s infinite;
  transform-origin: 70% 70%;
}

@keyframes wave {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}
</style>
