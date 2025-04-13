<script setup>
import profilePic from '../../assets/images/profile-pic.jpg';

const skills = [
  { category: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'R'] },
  { category: 'Frontend', items: ['Vue.js', 'React', 'HTML/CSS', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'Django', 'Flask'] },
  { category: 'Data Science', items: ['Pandas', 'NumPy', 'Scikit-Learn', 'TensorFlow', 'PyTorch'] },
  { category: 'DevOps', items: ['Git', 'Docker', 'CI/CD', 'AWS'] },
  { category: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis'] }
];
</script>

<template>
  <section id="about" class="py-20 bg-white dark:bg-gray-800">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 mb-10 md:mb-0">
          <div class="relative">
            <!-- Profile picture -->
            <div class="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto bg-gray-300 dark:bg-gray-700 flex items-center justify-center ring-4 ring-primary shadow-xl">
              <img 
                :src="profilePic" 
                alt="Sureyya Akis profile picture" 
                class="w-full h-full object-cover"
              />
            </div>
            <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <span class="text-white font-bold">5+ Years</span>
            </div>
          </div>
        </div>
        
        <div class="md:w-1/2 md:pl-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
          <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            I'm a passionate software engineer with expertise in machine learning, data science, and full-stack development. 
            With a strong background in both theoretical and practical aspects of software engineering, 
            I specialize in building scalable applications and deriving meaningful insights from data.
          </p>
          <p class="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            My journey in tech began with a curiosity about how things work, which evolved into a career focused on 
            creating innovative solutions to complex problems. I'm constantly learning and exploring new technologies 
            to stay at the forefront of the rapidly evolving tech landscape.
          </p>
          
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technical Skills</h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-for="(skillGroup, index) in skills" :key="index" class="mb-4">
              <h4 class="font-medium text-primary mb-2">{{ skillGroup.category }}</h4>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="skill in skillGroup.items" 
                  :key="skill"
                  class="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
