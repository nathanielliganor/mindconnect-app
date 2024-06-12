<template>
    <section class="how-it-works">
      <h2>How it works</h2>
      <p>Our platform uses the latest technology to provide personalized support and recommendations, all designed to help you prioritize your mental health.</p>
      <div class="feature-cards">
        <FeatureCard title="GenAI chatbot" description="Talk to a chatbot powered by GenAI to get support and advice anytime" />
        <FeatureCard title="Video game recommendations" description="Find new games to play based on your interests and mental health goals" />
        <FeatureCard title="Support groups" description="Connect with others who share similar experiences in our safe, moderated support groups" />
        <FeatureCard title="Guided meditations" description="Relax and unwind with guided meditation sessions" />
        <FeatureCard title="Global community" description="Join a diverse community of players from around the world" />
        <FeatureCard title="Mood tracker" description="Track your mood over time to identify patterns and monitor your progress" />
      </div>
    </section>
  </template>
  
  <script>
  import FeatureCard from './FeatureCard.vue';
  
  export default {
    name: 'HowItWorks',
    components: {
      FeatureCard
    }
  }
  </script>
  
  <style scoped>
  .how-it-works {
    padding: 40px 20px;
    text-align: center;
  }
  
  .how-it-works h2 {
    font-size: 28px;
    margin-bottom: 20px;
  }
  
  .how-it-works p {
    font-size: 16px;
    margin-bottom: 30px;
  }
  
  .feature-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  </style>
  