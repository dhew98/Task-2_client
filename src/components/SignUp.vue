<template>
  <div class="container mt-5">
    <h1 class="mb-4">Sign Up</h1>
    <form @submit.prevent="handleSubmit">

      <div class="mb-3 w-50" >
        <label for="email" class="form-label">Email:</label>
        <input type="email" class="form-control" id="email"  v-model="email" required>
      </div>

     
      <div class="mb-3 w-50">
        <label for="firstName" class="form-label">First Name:</label>
        <input type="text" class="form-control" id="firstName"  v-model="firstName" required>
      </div>

   
      <div class="mb-3 w-50">
        <label for="lastName" class="form-label">Last Name:</label>
        <input type="text" class="form-control" id="lastName"  v-model="lastName" required>
      </div>


      <div class="mb-3 w-50">
        <label for="mobileNumber" class="form-label">Mobile Number:</label>
        <input type="text" class="form-control" id="mobileNumber"  v-model="mobileNumber" required>
      </div>

     
      <div class="mb-3 w-50">
        <label for="password" class="form-label">Password:</label>
        <input type="password" class="form-control" id="password"  v-model="password" required>
      </div>

     
      <button type="submit" class="btn btn-primary">Sign Up</button>
    </form>
  </div>
</template>



<script>
import Swal from 'sweetalert2'
export default {
  name:"SignUp",
  name:'SweetAlert2Demo',
  data() {
    return {
      email: '',
      firstName: '',
      lastName: '',
      mobileNumber: '',
      password: '',
      
    };
  },
  methods: {
    handleSubmit(event) {

    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        mobileNumber: this.mobileNumber,
        password: this.password,
        verified:null
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {

    
      console.log('Form data sent successfully!', data);
     
    })
    .catch(error => {
      console.error('Error sending form data:', error);
     
    });
    Swal.fire({ title: "Sign Up Successful!",
  
  icon: "success"});
      event.target.reset();
      console.log('Form submitted with data:', this.email, this.firstName, this.lastName, this.mobileNumber, this.password);
    }
  },
  
};



</script>

