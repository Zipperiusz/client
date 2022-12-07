<!-- TODO: zmienic strukturę całości wg tego https://www.naiveui.com/en-US/os-theme/components/grid -->
<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-5">
        <div class="card">
          <h2 class="card-title text-center">Register</h2>
          <div class="card-body py-md-4">
            <form _lpchecked="1">
              <div class="form-group">
                <input type="text" class="form-control" id="name" placeholder="Name" />
              </div>
              <div class="form-group">
                <input type="email" class="form-control" id="email" placeholder="Email" />
              </div>

              <div class="form-group">
                <input type="password" class="form-control" id="password" placeholder="Password" />
              </div>
              <div class="form-group">
                <input type="password" class="form-control" id="confirm-password" placeholder="Confirm password" />
              </div>
              <div class="d-flex flex-row align-items-center justify-content-between">
                <router-link to="/login"><button class="btn btn-primary" id="buttonL">Login</button></router-link>
                <button class="btn btn-primary">Create Account</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=PT+Sans');

body {
  background: #ffffff;
  font-family: 'PT Sans', sans-serif;
}
h2 {
  padding-top: 1.5rem;
}

.card {
  border: 0.4rem solid #f8f9fa;
  top: 10%;
}
.form-control {
  background-color: #f8f9fa;
  padding: 25px 15px;
  margin-bottom: 1.3rem;
}

.btn {
  padding: 15px;
  background: rgba(148, 186, 101, 0.7);
  border: 2px solid #2e2e2e;
  margin: 10px;
}
.btn-primary:hover {
  background-color: rgba(190, 12, 12, 0.7);
  border-color: #2e2e2e;
  transition: 0.3s;
}
</style>
