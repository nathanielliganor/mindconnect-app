<template>
    <div class="chat-container">
      <div class="messages">
        <div v-for="(message, index) in messages" :key="index" :class="message.class">
          {{ message.text }}
        </div>
      </div>
      <div class="input-container">
        <input v-model="userInput" @keyup.enter="sendMessage" placeholder="Type a message..." />
        <button @click="sendMessage">Send</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        userInput: '',
        messages: [
          { text: 'Loading initial prompt...', class: 'bot-message' }
        ]
      };
    },
    mounted() {
      this.getInitialPrompt();
    },
    methods: {
      getInitialPrompt() {
        console.log('Requesting initial prompt...');
        axios.post('http://localhost:3000/chat', {})
          .then(response => {
            console.log('Initial prompt received:', response.data.message);
            if (response.data.message) {
              this.messages.push({ text: response.data.message, class: 'bot-message' });
            } else {
              console.error('No message in response');
            }
          })
          .catch(error => {
            console.error('Error fetching initial prompt:', error);
          });
      },
      sendMessage() {
        if (this.userInput.trim() === '') return;
  
        // Add user message to chat
        this.messages.push({ text: this.userInput, class: 'user-message' });
  
        // Send message to backend
        axios.post('http://localhost:3000/chat', { message: this.userInput })
          .then(response => {
            this.messages.push({ text: response.data.message, class: 'bot-message' });
          })
          .catch(error => {
            console.error('Error sending message:', error);
          });
  
        // Clear user input
        this.userInput = '';
      }
    }
  };
  </script>
  
  <style scoped>
  .chat-container {
    width: 400px;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    display: flex;
    flex-direction: column;
  }
  
  .messages {
    flex: 1;
    overflow-y: auto;
    margin-bottom: 16px;
  }
  
  .user-message {
    text-align: right;
    margin: 8px;
  }
  
  .bot-message {
    text-align: left;
    margin: 8px;
  }
  
  .input-container {
    display: flex;
    justify-content: space-between;
  }
  
  input {
    flex: 1;
    padding: 8px;
    margin-right: 8px;
  }
  
  button {
    padding: 8px 16px;
  }
  </style>
  