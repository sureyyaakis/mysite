<script setup>
const experiences = [
  {
    title: 'Junior Software Engineer',
    company: 'oVio Technologies Inc.',
    period: 'Mar 2023 - Present',
    location: 'California, United States · On-site',
    description: 'Working as a full-time Junior Software Engineer, developing and maintaining web applications.',
    skills: ['ASP.NET Web API', 'GitHub', 'C#', 'SQL', 'JavaScript', 'Web Development', 'REST APIs', 'Unit Testing', 'Agile', 'Azure']
  },
  {
    title: 'Software Automation Engineer',
    company: 'Kev&Cooper',
    period: 'Sep 2022 - Nov 2022',
    location: 'California, United States',
    description: 'Archived an API connection that provided benefits for Power BI reporting, such as enriching the data with context from external sources or connecting with cloud data more flexibly. Tested smoke, regression, and database.',
    skills: ['Test Automation', 'Selenium', 'API Integration', 'Power BI', 'Database Testing', 'Regression Testing', 'QA']
  },
  {
    title: 'Web Developer',
    company: 'Concord USA, LLC',
    period: 'May 2021 - Nov 2022',
    location: 'United States',
    description: 'Full-time web developer creating and maintaining web applications and websites.',
    skills: ['JavaScript', 'Cascading Style Sheets (CSS)', 'HTML', 'Web Development', 'Frontend Development', 'Responsive Design']
  },
  {
    title: 'Digital Marketing Specialist',
    company: 'Wasler Digital Agency',
    period: 'Sep 2021 - Aug 2022',
    location: 'United States',
    description: 'Content planning and creation for websites. Increased site visits by 25% by designing and posting interactive flyers and ads on the site for upcoming promotions and events. Achieved responsiveness for mobile devices and increased customer engagement by more than 8% by creating SEO campaigns for complex media websites.',
    skills: ['Social Media', 'Customer Satisfaction', 'Content Creation', 'SEO', 'Digital Marketing', 'Mobile Optimization']
  },
  {
    title: 'Residence Life Coordinator',
    company: 'North American University',
    period: 'Aug 2018 - May 2021',
    location: 'Houston, Texas Area',
    description: 'Managed residential assistants and answered student inquiries on a daily basis. Incorporated guidance to resident advisors on how to assist students with their college life. Assisted residence changes for students and business offices and ensured the in-house booking system was up-to-date. Organized and coordinated dorm events with resident advisors.',
    skills: ['Public Speaking', 'Event Planning', 'Leadership', 'Team Management', 'Customer Service', 'Conflict Resolution', 'Administration']
  }
];
</script>

<template>
  <section id="experience" class="py-20 bg-gray-50 dark:bg-dark-purple relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
    <div class="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-tertiary/10 blur-3xl"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-4xl font-bold text-center mb-16 gradient-text">Professional Experience</h2>
      
      <div class="max-w-4xl mx-auto">
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-tertiary left-1/2 transform -translate-x-1/2"></div>
          
          <!-- Experience items -->
          <div 
            v-for="(exp, index) in experiences" 
            :key="index"
            class="relative z-10 mb-16 last:mb-0"
          >
            <div :class="`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`">
              <!-- Timeline dot -->
              <div 
                class="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 border-white dark:border-dark-purple shadow-lg"
                :class="[index % 3 === 0 ? 'bg-primary' : index % 3 === 1 ? 'bg-secondary' : 'bg-tertiary']"
              ></div>
              
              <!-- Content -->
              <div class="w-full md:w-5/12 p-6 mt-8 md:mt-0 bg-white dark:bg-gray-800/90 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div class="flex flex-col">
                  <span 
                    class="text-sm font-semibold mb-1 inline-block px-3 py-1 rounded-full"
                    :class="[index % 3 === 0 ? 'text-primary bg-primary/10' : index % 3 === 1 ? 'text-secondary bg-secondary/10' : 'text-tertiary bg-tertiary/10']"
                  >
                    {{ exp.period }}
                  </span>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ exp.title }}</h3>
                  <h4 class="text-lg text-secondary dark:text-light-lemon mb-1">{{ exp.company }}</h4>
                  
                  <!-- Location information -->
                  <p v-if="exp.location" class="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <svg class="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    {{ exp.location }}
                  </p>
                  
                  <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{{ exp.description }}</p>
                  
                  <div class="flex flex-wrap gap-2">
                    <span 
                      v-for="skill in exp.skills" 
                      :key="skill"
                      class="px-2 py-1 text-xs rounded-full transition-colors duration-300"
                      :class="[index % 3 === 0 ? 'bg-primary/20 text-primary-dark dark:text-primary' : 
                              index % 3 === 1 ? 'bg-secondary/20 text-secondary dark:text-secondary' : 
                              'bg-tertiary/20 text-tertiary dark:text-tertiary']"
                    >
                      {{ skill }}
                    </span>
                  </div>
                </div>
              </div>
              
              <!-- Empty space for the other side -->
              <div class="w-full md:w-5/12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
