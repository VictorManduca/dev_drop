<template>
    <form class="form_in_up" action="">
        <h1>DevDrop</h1><br>
        <h3>Create your DevDrop account now</h3><br>
        <button class="registro_button" type="submit">Register for free</button><br>
        <h3>Already have account? Login</h3>

        <form class="form_apresentation" action="">
         <div class="card_apresentation">
              <div class="card-top">
                <h1 class="titulo">join the DevDrop community</h1><br><br>
                <img class="img_apresentation" src="img/blue box.png" alt="">
              </div>

          </div>
        </form>
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

.card-top {
  text-align: center;
}

.card_apresentation {
    background-image:linear-gradient(to right, rgb(63, 63, 187), darkslateblue);
    box-shadow: #cccccc;
    background-color: cornsilk;
    padding: 30px;
    border-radius: 5px;
}

.form_in_up {
    background-image:linear-gradient(to right, darkslateblue, rgb(63, 63, 187));
    width: 400px;
    display: inline-block;
    margin-left: 400px;
    padding-top: 6px;
    text-emphasis-color: white;
    border-radius: 20px;
    text-align: center;
}

.form_apresentation {
    width: 400px;
    display: inline-block;
    margin-left: 10px;
    margin-top: 90px;
    padding-top: 40px;
}

.img_apresentation {
    background-color: #ccc;
    border-radius: 20px;
    width: 150px;
    box-shadow: 1px 1px 5px #ccc;
}

.registro_button {
    background-image:linear-gradient(to right, rgb(63, 63, 187), rgb(43, 14, 231));
    width: 340px;
    border-radius: 20px;
    padding: 10px;
    color: white;
    border: 0px;
    outline: 0px;
}
    
</style>
