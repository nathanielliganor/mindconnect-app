<template>
    <section class="team-section">
      <div class="team-images">
        <img src="path/to/image1.jpg" alt="Team Image 1">
        <img src="path/to/image2.jpg" alt="Team Image 2">
        <img src="path/to/image3.jpg" alt="Team Image 3">
      </div>
      <div class="team-description">
        <h2>Our team is passionate about using technology to improve mental health.</h2>
        <p>We’re constantly working to make our platform more accessible, inclusive, and effective, and we’re dedicated to supporting our users throughout their mental health journey.</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'TeamSection'
  }
  </script>
  
  <style scoped>
  .team-section {
    padding: 40px 20px;
    text-align: center;
  }
  
  .team-images {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
  }
  
  .team-images img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
  }
  
  .team-description h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .team-description p {
    font-size: 16px;
  }
  </style>
  