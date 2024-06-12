<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Welcome to Mental Health Checkup</h1>
      <p>We’re on a mission to help people improve their mental health with technology. Our platform offers a variety of tools to support you, including mood tracking, guided meditations, video game recommendations, and support groups.</p>
      <button class="cta-button">Get started</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url('@/assets/hero-image.png') no-repeat center center/cover; /* Update this path */
  height: 400px;
  color: #fff;
}

.hero-content {
  max-width: 600px;
}

.hero h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

.hero p {
  font-size: 18px;
  margin-bottom: 20px;
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