<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const blogPosts = ref([
  {
    id: 1,
    title: "What's a Lean In Circle? (And Why I Love Mine)",
    slug: 'lean-in-circle-experience',
    date: 'April 18, 2025',
    excerpt: 'Discover how joining a Lean In Circle can provide community, growth, and support during your personal and professional journey.',
    category: 'Personal Growth',
    imageSrc: '/blog/lean-in-circle.jpg'
  },
  {
    id: 2,
    title: 'Book Review: Crucial Conversations - Tools for Talking When Stakes are High',
    slug: 'crucial-conversations-book-review',
    date: 'April 15, 2025',
    excerpt: 'A comprehensive review of "Crucial Conversations" and how its principles can transform your communication in high-stakes situations.',
    category: 'Communication',
    imageSrc: '/blog/crucial-conversations.jpg'
  },
  {
    id: 2,
    title: 'Daily To-Do Lists: The Key to Staying Motivated',
    slug: 'daily-todo-list-motivation',
    date: 'April 13, 2025',
    excerpt: 'Discover how a simple daily to-do list can transform your productivity and help you stay motivated throughout the day.',
    category: 'Productivity',
    imageSrc: '/blog/todo-list.jpg'
  },
  {
    id: 3,
    title: 'Balancing Work and Personal Projects',
    slug: 'balancing-work-personal-projects',
    date: 'April 10, 2025',
    excerpt: 'Learn strategies for managing your time effectively between work commitments and personal creative projects.',
    category: 'Work-Life Balance',
    imageSrc: '/blog/balance.jpg'
  },
  {
    id: 4,
    title: 'The Power of Consistent Small Steps',
    slug: 'power-of-small-steps',
    date: 'April 5, 2025',
    excerpt: 'How taking small consistent actions can lead to remarkable progress in your personal and professional life.',
    category: 'Personal Growth',
    imageSrc: '/blog/small-steps.jpg'
  }
]);

function navigateToBlogPost(slug) {
  router.push({ name: 'BlogPost', params: { slug } });
}
</script>

<template>
  <div class="min-h-screen py-20 bg-white dark:bg-dark-purple">
    <!-- Decorative elements -->
    <div class="absolute top-40 right-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
    <div class="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-tertiary/10 blur-3xl"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold gradient-text mb-6">Blog</h1>
        <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Thoughts, ideas, and insights about productivity, technology, and personal growth.
        </p>
      </div>
      
      <!-- Blog posts grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="post in blogPosts" 
          :key="post.id"
          class="bg-white dark:bg-gray-800/90 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
          @click="navigateToBlogPost(post.slug)"
        >
          <!-- Post image -->
          <div class="h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
            <div class="h-full w-full flex items-center justify-center gradient-bg-lemon-purple text-white text-lg font-medium">
              {{ post.category }}
            </div>
          </div>
          
          <!-- Post content -->
          <div class="p-6">
            <div class="flex items-center text-sm text-tertiary dark:text-tertiary mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {{ post.date }}
            </div>
            
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ post.title }}</h2>
            
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              {{ post.excerpt }}
            </p>
            
            <div class="flex items-center text-secondary hover:text-tertiary dark:text-light-lemon dark:hover:text-light-pink transition-colors">
              <span>Read more</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
