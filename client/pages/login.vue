<template>
  <div>
    <form action class="form1">
      <div class="card">
        <div class="card-top">
          <img alt class="img_login" src="img/blue box.png" />
          <h2 class="titulo">Sign In</h2>
        </div>

        <div class="card-group">
          <label>Email</label>
          <input name="email" placeholder="Email" required type="email" />
        </div>

        <div class="card-group">
          <label>Password</label>
          <input name="senha" placeholder="Senha" required type="password" />
        </div>

        <div class="card-group">
          <label>
            <input type="checkbox" />Remember-me
          </label>
        </div>

        <div class="card-group btn">
          <button type="submit">Login</button>
        </div>
      </div>
    </form>

    <form action class="form2">
      <div class="card">
        <div class="card-top">
          <img alt class="img_login" src="img/blue box.png" />
          <h2 class="titulo">Sign Up</h2>
        </div>

        <div class="card-group">
          <label>Email</label>
          <input name="email" placeholder="Email" required type="email" />
        </div>
        <br />
        <div class="card-group btn">
          <button type="submit">Continue</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  background-color: rgb(76, 76, 196);
  font-family: sans-serif;
}

.card {
  box-shadow: #cccccc;
  background-color: cornsilk;
  padding: 30px;
  border-radius: 5px;
}

.form1 {
  width: 400px;
  margin-left: 150px;
  display: inline-block;
  padding-top: 40px;
}

.card-top {
  text-align: center;
}

.card-group {
  margin-bottom: 10px;
}

.card-group > label {
  width: 300px;
  color: black;
  display: block;
}

.card-group > input {
  border-radius: 5px;
  outline: 0;
  width: 325px;
  height: 25px;
  padding: 5px;
}

.card-group > button {
  background-image: linear-gradient(to right, darkslateblue, rgb(63, 63, 187));
  width: 340px;
  border-radius: 20px;
  padding: 10px;
  color: white;
  border: 0px;
  outline: 0px;
}

.btn button:hover {
  background-image: linear-gradient(to right, darkslateblue, rgb(63, 63, 187));
}

.img_login {
  border-radius: 10px;
  width: 80px;
  box-shadow: 1px 1px 5px #ccc;
}

.titulo {
  color: darkgrey;
}

.form2 {
  width: 400px;
  margin-left: 180px;
  display: inline-block;
  padding-top: 40px;
}
</style>
