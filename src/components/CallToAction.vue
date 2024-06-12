<template>
    <section class="cta-section">
      <h2>Ready to check in on your mental health?</h2>
      <button class="cta-button">Get started</button>
    </section>
  </template>
  
  <script>
  export default {
    name: 'CallToAction'
  }
  </script>
  
  <style scoped>
  .cta-section {
    padding: 40px 20px;
    text-align: center;
    background-color: #f9f9f9;
  }
  
  .cta-section h2 {
    font-size: 24px;
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
  