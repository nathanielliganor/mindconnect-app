<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Welcome to Mind Play Connect</h1>
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
/* Hero Section Container */
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url('@/assets/hero-image.png') no-repeat center center/cover; /* Update this path */
  height: 480px;
  width: 928;
  color: #fff;
  border-radius: 12px;
}

/* Hero Content Container */
.hero-content {
  max-width: 600px; /* Maximum width of the content */
}

/* Heading Styles */
.hero h1 {
  font-size: 36px; /* Font size for the heading */
  margin-bottom: 20px; /* Space below the heading */
}

/* Paragraph Styles */
.hero p {
  font-size: 18px; /* Font size for the paragraph */
  margin-bottom: 20px; /* Space below the paragraph */
}

/* Call-to-Action Button Styles */
.cta-button {
  padding: 10px 20px; /* Padding inside the button */
  font-size: 16px; /* Font size of the button text */
  color: #fff; /* Text color */
  background-color: #2194F2; /* Background color */
  border: none; /* No border */
  border-radius: 24px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
}

/* Call-to-Action Button Hover State */
.cta-button:hover {
  background-color: #0056b3; /* Background color on hover */
}
</style>