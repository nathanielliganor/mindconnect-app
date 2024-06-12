<template>
    <div class="feature-card">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FeatureCard',
    props: {
      title: String,
      description: String
    }
  }
  </script>
  
  <style scoped>
  .feature-card {
    background-color: #fff;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    padding: 20px;
    width: 250px;
    text-align: left;
  }
  
  .feature-card h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  .feature-card p {
    font-size: 14px;
  }
  </style>
  