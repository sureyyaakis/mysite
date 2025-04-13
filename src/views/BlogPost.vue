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
    title: "What's a Lean In Circle? (And Why I Love Mine)",
    slug: 'lean-in-circle-experience',
    date: 'April 18, 2025',
    author: 'Sureyya Akis',
    category: 'Personal Growth',
    imageSrc: '/blog/lean-in-circle.jpg',
    content: `
      <p class="mb-6">Let's be real—navigating your 20s (or any phase of adulthood tbh) can feel like you're trying to figure out life, work, relationships, and <em>literally everything</em> else... all at once. That's where I found something surprisingly amazing: <strong>Lean In Circles</strong>.</p>
      
      <p class="mb-6">I first heard about them from a friend who casually dropped "my circle said the same thing" in conversation. I was like—wait, what circle? Is this a book club? A girl gang? A secret society?</p>
      
      <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">So, What <em>Is</em> a Lean In Circle?</h3>
      
      <p class="mb-6">A Lean In Circle is a small group (like 8 to 12 people max) who meet regularly—online or in person—to talk about life, careers, growth, and everything in between. Think: goal-setting, honest convos, skill-building, and hyping each other up when the world feels a little too loud.</p>
      
      <p class="mb-6">These circles are part of the Lean In movement started by Sheryl Sandberg (you might've read her book or at least heard the name), but they've grown into this global thing where <em>real women</em> support each other through <em>real stuff</em>.</p>
      
      <div class="bg-light-lemon dark:bg-gray-700/50 p-6 rounded-lg mb-8">
        <h4 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">What It's Like Being in a Circle</h4>
        <p class="text-gray-700 dark:text-gray-300">I was a little nervous at first—like, do I need to have my life together to join? (Spoiler: no one does). But from the first meeting, it felt like a breath of fresh air.</p>
        <p class="mt-3 text-gray-700 dark:text-gray-300">One girl talked about being scared to ask for a promotion. Another shared how she's building her side hustle into a full-time gig. We laughed, got vulnerable, and left each call with legit action steps. No pressure, no competition—just real support.</p>
        <p class="mt-3 italic text-gray-700 dark:text-gray-300">"I didn't realize how badly I needed women in my corner until I found this space."</p>
      </div>
      
      <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Why You Might Want One Too</h3>
      
      <p class="mb-6">There are so many reasons to consider joining a Lean In Circle:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li>You want a safe space to talk about big goals, burnout, and boundary-setting</li>
        <li>You're into the idea of <em>community over competition</em></li>
        <li>You want people who will remind you you're a boss (even on your off days)</li>
        <li>You just like the idea of connecting with other women who get it</li>
      </ul>
      
      <p class="mb-6">I've found that having this dedicated space to discuss career challenges, personal growth, and life transitions has been invaluable. It's a unique blend of mentorship, friendship, and accountability that's difficult to find elsewhere.</p>
      
      <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">The Ripple Effect</h3>
      
      <p class="mb-6">Being part of a Lean In Circle doesn't just benefit you personally. I've noticed a ripple effect that extends to:</p>
      
      <ol class="list-decimal pl-6 mb-6 space-y-4 text-gray-700 dark:text-gray-300">
        <li>
          <strong>Your Confidence</strong>
          <p>Regularly articulating your challenges and receiving constructive feedback builds a quiet confidence that others notice.</p>
        </li>
        <li>
          <strong>Your Workplace</strong>
          <p>As you develop better communication skills and boundary-setting, you bring those improvements back to your team.</p>
        </li>
        <li>
          <strong>Your Relationships</strong>
          <p>The emotional intelligence you develop in your circle often translates to better personal relationships too.</p>
        </li>
        <li>
          <strong>Your Future</strong>
          <p>The connections you make can lead to unexpected opportunities, collaborations, and friendships that last beyond the circle.</p>
        </li>
      </ol>
      
      <div class="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg mb-8">
        <h4 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">Common Questions</h4>
        <div class="space-y-4">
          <div>
            <p class="font-semibold text-gray-900 dark:text-white">Is this just for corporate women?</p>
            <p class="text-gray-700 dark:text-gray-300">Not at all! Circles include entrepreneurs, creatives, students, stay-at-home moms, and women in all kinds of fields and life stages.</p>
          </div>
          <div>
            <p class="font-semibold text-gray-900 dark:text-white">Do I need to commit a lot of time?</p>
            <p class="text-gray-700 dark:text-gray-300">Most circles meet monthly for 1-2 hours, making it manageable even for busy schedules.</p>
          </div>
          <div>
            <p class="font-semibold text-gray-900 dark:text-white">What if I'm really introverted?</p>
            <p class="text-gray-700 dark:text-gray-300">Many circles create space for all personality types. You can participate at your own comfort level, and many introverts find these smaller group settings ideal.</p>
          </div>
        </div>
      </div>
      
      <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">How to Join (Or Start!) a Circle</h3>
      
      <p class="mb-6">It's actually super easy. Just head to <a href="https://leanin.org/circles" class="text-primary hover:text-tertiary transition-colors" target="_blank">leanin.org/circles</a>, find a group near you (or start your own!), and take it from there. You don't need to be a CEO or know exactly what you're doing—you just have to be <em>you</em>.</p>
      
      <p class="mb-6">The website walks you through the entire process, provides resources for circle meetings, and connects you with the larger Lean In community.</p>
      
      <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Final Thought</h3>
      
      <p class="mb-6">Whether you're figuring out your first job, shifting careers, starting something new, or just want to be around empowering energy—Lean In Circles are that little extra support system we all deserve.</p>
      
      <p class="mb-6">In a world that often pits women against each other, these circles create intentional spaces for collaboration, growth, and genuine connection. And sometimes, that makes all the difference.</p>
      
      <div class="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <h4 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">Ready to Find Your People?</h4>
        <p class="text-center">
          <a href="https://leanin.org/circles" class="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-tertiary transition-colors mt-2" target="_blank">Check out Lean In Circles</a>
        </p>
      </div>
    `,
  },
  {
    id: 2,
    title: 'Book Review: Crucial Conversations - Tools for Talking When Stakes are High',
    slug: 'crucial-conversations-book-review',
    date: 'April 15, 2025',
    author: 'Sureyya Akis',
    category: 'Communication',
    imageSrc: '/blog/crucial-conversations.jpg',
    content: `
      <p class="mb-6">In a world where the quality of our conversations often determines the quality of our relationships and results, learning how to effectively navigate high-stakes discussions becomes an invaluable skill. The book "Crucial Conversations: Tools for Talking When Stakes are High" by Kerry Patterson, Joseph Grenny, Ron McMillan, and Al Switzler offers a comprehensive framework for handling these challenging interactions.</p>
      
      <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">What Defines a Crucial Conversation?</h3>
      
      <p class="mb-6">The authors define crucial conversations as interactions where:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li><strong>Stakes are high</strong> - The outcome significantly impacts your life or relationships</li>
        <li><strong>Opinions vary</strong> - Different perspectives and viewpoints exist</li>
        <li><strong>Emotions run strong</strong> - The conversation triggers strong feelings</li>
      </ul>
      
      <p class="mb-6">Think about conversations regarding relationship issues, performance reviews, addressing a loved one's harmful habits, or discussions about contentious topics. These all qualify as crucial conversations that can either strengthen bonds or damage relationships depending on how they're handled.</p>
      
      <div class="bg-light-lemon dark:bg-gray-700/50 p-6 rounded-lg mb-8">
        <h4 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">Key Concept: The Fool's Choice</h4>
        <p class="text-gray-700 dark:text-gray-300">One of the book's central ideas is that we often feel trapped between two bad options:</p>
        <ol class="list-decimal pl-6 mt-3 space-y-2">
          <li>Speak up and damage the relationship</li>
          <li>Stay silent and damage the results</li>
        </ol>
        <p class="mt-3 text-gray-700 dark:text-gray-300">The authors argue this is a false dichotomy - with the right skills, we can achieve both candor and respect.</p>
      </div>
      
      <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Core Principles and Tools</h3>
      
      <p class="mb-6">The book outlines several key principles and practical tools that can transform how you handle difficult conversations:</p>
      
      <ol class="list-decimal pl-6 mb-6 space-y-4 text-gray-700 dark:text-gray-300">
        <li>
          <strong>Start with Heart</strong>
          <p>Begin by examining your own motives. What do you really want for yourself, others, and the relationship? Staying focused on these shared goals helps avoid defensive or aggressive behavior.</p>
        </li>
        <li>
          <strong>Create Safety</strong>
          <p>When people feel psychologically safe, they're more likely to share honestly. The authors introduce two critical components of safety:</p>
          <ul class="list-disc pl-6 mt-2 mb-2 space-y-1">
            <li><strong>Mutual Purpose</strong> - Establishing that you care about their goals and interests</li>
            <li><strong>Mutual Respect</strong> - Demonstrating that you respect them as individuals</li>
          </ul>
        </li>
        <li>
          <strong>Master Your Stories</strong>
          <p>Between an action and our feeling about it lies the story we tell ourselves. By recognizing and questioning these interpretations, we can avoid jumping to conclusions and respond more effectively.</p>
        </li>
        <li>
          <strong>STATE Your Path</strong>
          <p>A framework for expressing your views:</p>
          <ul class="list-disc pl-6 mt-2 mb-2 space-y-1">
            <li><strong>S</strong>hare your facts</li>
            <li><strong>T</strong>ell your story</li>
            <li><strong>A</strong>sk for others' paths</li>
            <li><strong>T</strong>alk tentatively</li>
            <li><strong>E</strong>ncourage testing</li>
          </ul>
        </li>
        <li>
          <strong>Learn to Look</strong>
          <p>Develop awareness of when a conversation becomes crucial and notice when safety is at risk. Watch for signs like silence (withdrawing) or violence (controlling, labeling, attacking).</p>
        </li>
        <li>
          <strong>Make It Safe</strong>
          <p>When safety is compromised, step out of the content temporarily to restore it using techniques like apologizing, contrasting (clarifying what you do and don't intend), or creating a mutual purpose.</p>
        </li>
        <li>
          <strong>Explore Others' Paths</strong>
          <p>Use the AMPP method to encourage others to share their views:</p>
          <ul class="list-disc pl-6 mt-2 mb-2 space-y-1">
            <li><strong>A</strong>sk to get things rolling</li>
            <li><strong>M</strong>irror to confirm feelings</li>
            <li><strong>P</strong>araphrase to acknowledge the story</li>
            <li><strong>P</strong>rime when you're getting nowhere</li>
          </ul>
        </li>
        <li>
          <strong>Move to Action</strong>
          <p>Turn conversations into results by clearly deciding who will do what by when, and how you'll follow up.</p>
        </li>
      </ol>
      
      <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Practical Applications</h3>
      
      <p class="mb-6">The principles from "Crucial Conversations" can transform various aspects of your life:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li><strong>Professional Settings</strong> - Improve team communication, handle performance issues, navigate organizational changes</li>
        <li><strong>Personal Relationships</strong> - Address recurring conflicts, discuss sensitive topics, deepen intimacy through honest dialogue</li>
        <li><strong>Self-Development</strong> - Become more aware of your emotional responses and communication patterns</li>
        <li><strong>Conflict Resolution</strong> - Transform contentious situations into opportunities for mutual growth</li>
      </ul>
      
      <div class="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg mb-8">
        <h4 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">The Silence-Violence Continuum</h4>
        <p class="text-gray-700 dark:text-gray-300 mb-4">When feeling unsafe, people typically respond in one of two ways:</p>
        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-1 p-4 bg-white dark:bg-gray-600 rounded">
            <h5 class="font-bold mb-2">Silence</h5>
            <ul class="list-disc pl-4 space-y-1">
              <li>Masking - Understating or selectively showing true opinions</li>
              <li>Avoiding - Steering away from sensitive subjects</li>
              <li>Withdrawing - Pulling out of the conversation altogether</li>
            </ul>
          </div>
          <div class="flex-1 p-4 bg-white dark:bg-gray-600 rounded">
            <h5 class="font-bold mb-2">Violence</h5>
            <ul class="list-disc pl-4 space-y-1">
              <li>Controlling - Forcing views on others</li>
              <li>Labeling - Categorizing to dismiss ideas</li>
              <li>Attacking - Belittling or threatening</li>
            </ul>
          </div>
        </div>
      </div>
      
      <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Critical Analysis</h3>
      
      <p class="mb-6">While "Crucial Conversations" offers powerful tools, it's worth noting a few considerations:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
        <li><strong>Cultural Context</strong> - The book's approach is rooted in Western communication styles and may require adaptation for different cultural contexts</li>
        <li><strong>Power Dynamics</strong> - In situations with significant power imbalances, safety may be difficult to establish without structural changes</li>
        <li><strong>Practice Required</strong> - These skills demand consistent practice before they become second nature, especially in emotionally charged situations</li>
      </ul>
      
      <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Conclusion: A Transformative Framework</h3>
      
      <p class="mb-6">"Crucial Conversations" provides a practical, research-based approach to navigating the conversations that matter most. By mastering these skills, you can transform potential conflicts into opportunities for understanding, growth, and stronger relationships.</p>
      
      <p class="mb-6">The most valuable insight from this book may be that we don't have to choose between honesty and respect. With practice and the right tools, we can create environments where difficult truths can be shared while maintaining and even strengthening relationships.</p>
      
      <div class="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <h4 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">Key Takeaway</h4>
        <p class="italic text-lg text-center text-gray-700 dark:text-gray-300">"The single biggest problem in communication is the illusion that it has taken place." - George Bernard Shaw</p>
      </div>
    `,
  },
  {
    id: 3,
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
    id: 4,
    title: 'Balancing Work and Personal Projects',
    slug: 'balancing-work-personal-projects',
    date: 'April 10, 2025',
    author: 'Sureyya Akis',
    category: 'Work-Life Balance',
    imageSrc: '/blog/balance.jpg',
    content: '<p>This is a placeholder for the "Balancing Work and Personal Projects" blog post content.</p>',
  },
  {
    id: 4,
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
function navigateToBlogPost(newSlug) {
  // Check if we're already on this route
  if (route.params.slug === newSlug) {
    // If we are, force a reload of the current component
    router.replace({ path: `/blog`, query: { redirect: newSlug }})
      .then(() => {
        router.replace({ name: 'BlogPost', params: { slug: newSlug }});
      });
  } else {
    // If not, simply navigate to the new blog post
    router.push({ name: 'BlogPost', params: { slug: newSlug } });
  }
}
</script>

<template>
  <div v-if="currentPost" :key="route.params.slug" class="min-h-screen pt-12 pb-20 bg-white dark:bg-dark-purple">
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
