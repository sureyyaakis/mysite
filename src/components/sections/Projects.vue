<script setup>
const projects = [
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets with customizable charts and filters.',
    techStack: ['Vue.js', 'D3.js', 'Express', 'MongoDB'],
    imageUrl: null, // Placeholder for image
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Machine Learning API',
    description: 'RESTful API for machine learning model deployment with automated scaling and monitoring.',
    techStack: ['Python', 'Flask', 'TensorFlow', 'Docker', 'AWS'],
    imageUrl: null, // Placeholder for image
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce application with user authentication, product catalog, and payment processing.',
    techStack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Stripe'],
    imageUrl: null, // Placeholder for image
    demoUrl: '#',
    githubUrl: '#'
  }
];
</script>

<template>
  <section id="projects" class="py-20 bg-white dark:bg-gray-800">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-16">Projects</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2"
        >
          <!-- Project Image -->
          <div class="h-48 bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
            <svg v-if="!project.imageUrl" class="w-12 h-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <img v-else :src="project.imageUrl" :alt="project.title" class="w-full h-full object-cover" />
          </div>
          
          <!-- Project Info -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">{{ project.description }}</p>
            
            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tech in project.techStack" 
                :key="tech"
                class="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-full"
              >
                {{ tech }}
              </span>
            </div>
            
            <!-- Links -->
            <div class="flex gap-4">
              <a 
                :href="project.demoUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center text-primary hover:text-primary-dark"
              >
                <span class="mr-1">Demo</span>
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a 
                :href="project.githubUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center text-primary hover:text-primary-dark"
              >
                <span class="mr-1">GitHub</span>
                <svg class="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
