<template>
  <div class="signIn">
    <div class="container-fluid signInHeader">
      <div class="row">
        <div class="col-sm-3">
          <h4>Sign In</h4>
        </div>
        <div class="col-sm-9">
          Have you been a member ?&nbsp;
          <a href="/signup">Sign up</a>
        </div>
      </div>
    </div>
    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" placeholder="Enter Email" v-model="email">
      <br>
      <label>Password</label>
      <input type="password" class="form-control" placeholder="Password" v-model="password">
      <p>{{error.message}}</p>
      <button class="btn btn-sm btn-primary" @click="signIn">Sign in</button>
      <br>
      <br>
      <a href="#">Forget password ?</a>
      <br>
    </div>
  </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  },
  methods: {
    signIn () {
      firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password).catch(
        err => {
          this.error = err
        }
      )
    }
  }
}
</script>

<style>
.signIn {
  align-items: center;
}

.form-group {
  padding-left: 10%;
  padding-right: 10%;
}

.signInHeader {
  padding-left: 8%;
}
</style>
