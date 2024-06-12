<template>
    <nav class="navbar">
      <div class="logo">Mind Connect</div>
      <ul class="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Assessments</a></li>
        <li><a href="#">Chat</a></li>
        <li><a href="#">Explore</a></li>
      </ul>
      <div class="user-profile">
        <img src="path/to/profile-pic.jpg" alt="Profile Picture">
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
  
  .nav-links {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .nav-links li {
    margin-left: 20px;
  }
  
  .nav-links a {
    text-decoration: none;
    color: #333;
    font-size: 16px;
    transition: color 0.3s ease;
  }
  
  .nav-links a:hover {
    color: #007bff;
  }
  
  .user-profile {
    display: flex;
    align-items: center;
  }
  
  .user-profile img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
  }
  </style>
  