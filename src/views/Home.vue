<template>
  <div>
    <Navbar />
    <HeroSection />
    <HowItWorks />
    <TeamSection />
    <CallToAction />
    <!-- If you have a footer component, include it here -->
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import HeroSection from '@/components/HeroSection.vue';
import HowItWorks from '@/components/HowItWorks.vue';
import TeamSection from '@/components/TeamSection.vue';
import CallToAction from '@/components/CallToAction.vue';
// import Footer from '@/components/Footer.vue'; // Uncomment if you have a footer component

export default {
  name: 'HomeView',
  components: {
    Navbar,
    HeroSection,
    HowItWorks,
    TeamSection,
    CallToAction,
    // Footer // Uncomment if you have a footer component
  }
}
</script>

<style scoped>
/* Add any styles specific to HomeView here */
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  color: #333;
}

.container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h1, h2, h3, p {
  margin: 0;
  padding: 10px 0;
}

button {
  cursor: pointer;
  border: none;
  outline: none;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

.cta-button {
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.cta-button:hover {
  background-color: #0056b3;
}
</style>
