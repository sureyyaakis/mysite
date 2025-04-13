<template>
  <footer class="py-12 relative overflow-hidden">
    <!-- Gradient background -->
    <div class="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-tertiary/10 dark:from-primary/5 dark:via-secondary/5 dark:to-tertiary/5"></div>
    
    <!-- Decorative circles -->
    <div class="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
    <div class="absolute top-0 left-0 w-64 h-64 rounded-full bg-tertiary/5 blur-3xl"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Top section with logo and links -->
      <div class="flex flex-col md:flex-row justify-between items-center mb-8 pb-8 border-b border-gray-200 dark:border-gray-700/30">
        <div class="mb-6 md:mb-0">
          <h3 class="text-2xl font-bold gradient-text-lemon-purple mb-2">Sureyya Akis</h3>
          <p class="text-gray-600 dark:text-gray-300">Software Engineer</p>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4 sm:gap-8">
          <a href="#about" class="text-secondary dark:text-light-lemon hover:text-tertiary dark:hover:text-light-pink transition-colors">About</a>
          <a href="#experience" class="text-secondary dark:text-light-lemon hover:text-tertiary dark:hover:text-light-pink transition-colors">Experience</a>
          <a href="#projects" class="text-secondary dark:text-light-lemon hover:text-tertiary dark:hover:text-light-pink transition-colors">Projects</a>
        </div>
      </div>
      
      <!-- Bottom section with copyright and social icons -->
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <p class="text-gray-600 dark:text-gray-300">&copy; {{ new Date().getFullYear() }} Sureyya Akis. All Rights Reserved.</p>
        </div>
        
        <div class="flex space-x-5">
          <a 
            href="https://github.com/sureyyaakis" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800/50 text-secondary dark:text-light-lemon hover:text-tertiary dark:hover:text-tertiary transition-all"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a 
            href="https://linkedin.com/in/sureyyaakis" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800/50 text-secondary dark:text-light-lemon hover:text-tertiary dark:hover:text-tertiary transition-all"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a 
            href="mailto:sureyya.akis@example.com" 
            class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800/50 text-secondary dark:text-light-lemon hover:text-tertiary dark:hover:text-tertiary transition-all"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>
      </div>
      
      <!-- Designed with love message -->
      <div class="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
        Designed with
        <span class="text-tertiary animate-pulse">♥</span>
        in 2025
      </div>
    </div>
  </footer>
</template>
