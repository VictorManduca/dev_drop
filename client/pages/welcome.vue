<template>
    <form class="form_welcome" action="">
          <div class="card">
              <div class="card-top">
                <h1 class="titulo">Welcome to DevDrop</h1><br><br>
                <img class="img_login" src="img/blue box.png" alt="">
                <h3>Saveguard your life here!</h3>
                <h3>Saveguard your data!</h3>
                <h3>Stay safe!</h3>
              </div>

          </div>
      </form>

</template>

<script>
export default {};
</script>

<style>
body {
  background-color: rgb(76, 76, 196);
  font-family: sans-serif;
}

.form_welcome {
    width: 400px;
    margin: auto;
    padding-top: 40px;
}

.card-top {
  text-align: center;
}

.card {
  box-shadow: #cccccc;
  background-color: cornsilk;
  padding: 30px;
  border-radius: 5px;
}

.titulo {
  color: darkgrey;
}

.img_login {
    border-radius: 10px;
    width: 80px;
    box-shadow: 1px 1px 5px #ccc;
}
</style>
