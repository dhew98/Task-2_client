<template>
  <div class="container mt-5">
    <h1 class="mb-4">Log In</h1>
    <form @submit.prevent="login">
      <div class="mb-3 w-50" >
        <label for="email" class="form-label">Email:</label>
        <input type="email" class="form-control" id="email"  v-model="email" required>
      </div>

      <br />
      <div class="mb-3 w-50">
        <label for="password" class="form-label">Password:</label>
        <input type="password" class="form-control" id="password"  v-model="password" required>
      </div>
      <br />
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name:"Login",
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login(event) {
      const loginData = {
        email: this.email,
        password: this.password,
      };

      fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      })
      .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Handle successful response
      console.log('Form data sent successfully!', data);
      this.$router.push('/user')
      // Clear form fields, display success message, redirect, etc.
    })
    .catch(error => {
      // Handle error
      console.error('Error sending form data:', error);
      // Display error message to the user
    });
        event.target.reset();
        console.log('Form submitted with data:', this.email, this.password);
    },
  },
};
</script>
