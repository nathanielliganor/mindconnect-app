<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Add your global styles here */
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  color: #333;
}

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

a {
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #0056b3;
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
</style>
