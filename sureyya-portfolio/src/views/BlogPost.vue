<script setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const slug = route.params.slug;

// Blog posts data
const blogPosts = ref([
  {
    id: 1,
    title: 'Daily To-Do Lists: The Key to Staying Motivated',
    slug: 'daily-todo-list-motivation',
    date: 'April 13, 2025',
    author: 'Sureyya Akis',
    category: 'Productivity',
    imageSrc: '/blog/todo-list.jpg',
    content: `
      <p class="mb-6">In our fast-paced world, staying motivated throughout the day can be challenging. We often start our mornings with enthusiasm, but by afternoon, our energy and focus begin to wane. This is where a simple but powerful tool comes in: the daily to-do list.</p>
      
      <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">The Psychology Behind To-Do Lists</h3>
      
      <p class="mb-6">To-do lists work because they tap into several psychological principles:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li><strong>The Zeigarnik Effect</strong> - Our brains naturally focus on unfinished tasks. By writing them down, we free our minds from the constant reminder.</li>
        <li><strong>The Dopamine Effect</strong> - Each time we check off an item, our brain releases dopamine, creating a sense of accomplishment and pleasure.</li>
        <li><strong>External Memory Storage</strong> - Lists serve as external memory, reducing cognitive load and mental fatigue.</li>
      </ul>
      
      <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">How to Create an Effective To-Do List</h3>
      
      <p class="mb-6">Not all to-do lists are created equal. Here's how to create one that actually boosts your motivation:</p>
      
      <ol class="list-decimal pl-6 mb-6 space-y-4 text-gray-700 dark:text-gray-300">
        <li>
          <strong>Write it the night before</strong>
          <p>Planning your day in advance allows your subconscious to process tasks overnight and reduces morning decision fatigue.</p>
        </li>
        <li>
          <strong>Limit your list to 3-5 important tasks</strong>
          <p>Long lists can be overwhelming and counterproductive. Focus on what truly matters for the day.</p>
        </li>
        <li>
          <strong>Use the 1-3-5 rule</strong>
          <p>Plan to accomplish one big thing, three medium things, and five small things each day.</p>
        </li>
        <li>
          <strong>Break down complex tasks</strong>
          <p>Divide large projects into smaller, manageable steps that can be completed in a single day.</p>
        </li>
        <li>
          <strong>Prioritize using the Eisenhower Matrix</strong>
          <p>Categorize tasks as: Important & Urgent, Important & Not Urgent, Not Important & Urgent, and Not Important & Not Urgent.</p>
        </li>
      </ol>
      
      <div class="bg-light-lemon dark:bg-gray-700/50 p-6 rounded-lg mb-8">
        <h4 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">Sample Daily To-Do List Template</h4>
        <div class="space-y-2">
          <div class="flex items-start">
            <div class="h-6 w-6 mr-2 rounded border-2 border-primary flex-shrink-0"></div>
            <p>ONE big task: Complete project proposal draft</p>
          </div>
          <div class="flex items-start">
            <div class="h-6 w-6 mr-2 rounded border-2 border-secondary flex-shrink-0"></div>
            <p>THREE medium tasks: Team meeting, research competitors, review feedback</p>
          </div>
          <div class="flex items-start">
            <div class="h-6 w-6 mr-2 rounded border-2 border-tertiary flex-shrink-0"></div>
            <p>FIVE small tasks: Check emails, schedule appointment, update calendar, send invoice, back up files</p>
          </div>
        </div>
      </div>
      
      <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">The Emotional Benefit</h3>
      
      <p class="mb-6">Beyond productivity, to-do lists provide emotional benefits:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li><strong>Reduced anxiety</strong> - The act of externalizing tasks reduces the mental burden of remembering everything.</li>
        <li><strong>Increased control</strong> - Lists create a sense of order in a chaotic world.</li>
        <li><strong>Visible progress</strong> - Crossing off items creates a tangible record of your accomplishments.</li>
        <li><strong>Better work-life balance</strong> - Clear boundaries on daily work help prevent endless task creep.</li>
      </ul>
      
      <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Digital vs. Paper: Which Works Better?</h3>
      
      <p class="mb-6">Research suggests that paper lists often win for motivation because:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li>The physical act of writing improves memory and commitment</li>
        <li>The satisfaction of physically crossing off items is more rewarding</li>
        <li>Paper lists don't come with the distractions of digital devices</li>
      </ul>
      
      <p class="mb-6">However, digital tools offer advantages like:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li>Easy rearranging and prioritizing</li>
        <li>Setting reminders and deadlines</li>
        <li>Accessibility across multiple devices</li>
        <li>Searchability and organization of recurring tasks</li>
      </ul>
      
      <p class="mb-6">The best approach might be a hybrid system, using paper for daily tasks and digital tools for project management and long-term planning.</p>
      
      <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Conclusion: Small Habit, Big Impact</h3>
      
      <p class="mb-6">A daily to-do list is more than just a productivity tool—it's a motivation engine. By providing structure, focus, and a sense of accomplishment, it helps maintain momentum throughout the day.</p>
      
      <p class="mb-6">Remember that the goal isn't to complete as many tasks as possible, but to make meaningful progress on what matters most. Start small, be consistent, and watch how this simple habit transforms not just your productivity, but your sense of purpose and satisfaction each day.</p>
      
      <div class="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <h4 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">Daily Affirmation</h4>
        <p class="italic text-lg text-center text-gray-700 dark:text-gray-300">"I don't have to do everything today. I just need to take one step forward."</p>
      </div>
    `,
  },
  {
    id: 2,
    title: 'Balancing Work and Personal Projects',
    slug: 'balancing-work-personal-projects',
    date: 'April 10, 2025',
    author: 'Sureyya Akis',
    category: 'Work-Life Balance',
    imageSrc: '/blog/balance.jpg',
    content: '<p>This is a placeholder for the "Balancing Work and Personal Projects" blog post content.</p>',
  },
  {
    id: 3,
    title: 'The Power of Consistent Small Steps',
    slug: 'power-of-small-steps',
    date: 'April 5, 2025',
    author: 'Sureyya Akis',
    category: 'Personal Growth',
    imageSrc: '/blog/small-steps.jpg',
    content: '<p>This is a placeholder for the "The Power of Consistent Small Steps" blog post content.</p>',
  }
]);

// Find the current blog post based on slug
const currentPost = computed(() => {
  return blogPosts.value.find(post => post.slug === slug) || null;
});

// Get other posts for the "You might also like" section
const relatedPosts = computed(() => {
  return blogPosts.value.filter(post => post.slug !== slug).slice(0, 2);
});

// Navigate back to blog list
function goBackToBlog() {
  router.push({ name: 'Blog' });
}

// Navigate to another blog post
function navigateToBlogPost(slug) {
  router.push({ name: 'BlogPost', params: { slug } });
}
</script>

<template>
  <div v-if="currentPost" class="min-h-screen pt-12 pb-20 bg-white dark:bg-dark-purple">
    <!-- Decorative elements -->
    <div class="absolute top-40 right-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
    <div class="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-tertiary/10 blur-3xl"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      <!-- Back button -->
      <button 
        @click="goBackToBlog" 
        class="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors mb-8"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Blog
      </button>
      
      <!-- Blog post header -->
      <div class="max-w-3xl mx-auto mb-12">
        <div class="flex items-center text-sm text-tertiary dark:text-tertiary mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {{ currentPost.date }}
          
          <span class="mx-2">•</span>
          
          <span class="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary dark:bg-primary/30 dark:text-primary">
            {{ currentPost.category }}
          </span>
        </div>
        
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ currentPost.title }}
        </h1>
        
        <div class="flex items-center">
          <div class="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center mr-3">
            <span class="text-lg font-medium text-gray-600 dark:text-gray-300">{{ currentPost.author.charAt(0) }}</span>
          </div>
          <div>
            <p class="font-medium text-gray-900 dark:text-white">{{ currentPost.author }}</p>
            <p class="text-sm text-gray-600 dark:text-gray-400">Software Engineer</p>
          </div>
        </div>
      </div>
      
      <!-- Blog post cover image -->
      <div class="max-w-4xl mx-auto mb-12 rounded-xl overflow-hidden shadow-lg">
        <div class="h-64 sm:h-80 md:h-96 w-full flex items-center justify-center gradient-bg-lemon-purple text-white text-2xl font-bold">
          {{ currentPost.title }}
        </div>
      </div>
      
      <!-- Blog post content -->
      <div class="max-w-3xl mx-auto prose prose-lg dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300" v-html="currentPost.content"></div>
      
      <!-- Author bio -->
      <div class="max-w-3xl mx-auto mt-16 p-8 bg-gray-100 dark:bg-gray-800 rounded-xl">
        <div class="flex items-start">
          <div class="w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center mr-4 flex-shrink-0">
            <span class="text-2xl font-medium text-gray-600 dark:text-gray-300">{{ currentPost.author.charAt(0) }}</span>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">About {{ currentPost.author }}</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Sureyya is a software engineer passionate about creating intuitive and efficient solutions. 
              With experience in both frontend and backend development, Sureyya enjoys sharing knowledge 
              and insights about productivity, technology, and personal growth.
            </p>
            <div class="flex space-x-4">
              <a href="https://github.com/sureyyaakis" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/sureyyaakis" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </a>
              <a href="mailto:sureyya.akis@example.com" class="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Related posts -->
      <div class="max-w-5xl mx-auto mt-20">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">You might also like</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            v-for="post in relatedPosts" 
            :key="post.id"
            class="bg-white dark:bg-gray-800/90 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            @click="navigateToBlogPost(post.slug)"
          >
            <!-- Post image -->
            <div class="h-40 overflow-hidden bg-gray-200 dark:bg-gray-700">
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
              
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ post.title }}</h3>
              
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
  </div>
  
  <div v-else class="min-h-screen flex items-center justify-center bg-white dark:bg-dark-purple">
    <div class="text-center">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Blog post not found</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
      <button 
        @click="goBackToBlog" 
        class="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
      >
        Back to Blog
      </button>
    </div>
  </div>
</template>
