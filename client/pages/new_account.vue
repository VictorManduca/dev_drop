<template>
    <form>
        <img class="img_new_account" src="img/maquina.png" alt="">
        
        <form class="form_new_account" action="">
            <div class="card_new_account">
                <div class="card-top">
                    <h2 class="titulo">New Account</h2>
                    <h3>OR login</h3>
                </div>

                <div class="card-account">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" required>
                </div>

                <div class="card-account">
                    <label>Last Name</label>
                    <input type="text" name="last_name" placeholder="Last Name" required>
                </div>

                <div class="card-account">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email" required>
                </div>

                <div class="card-account">
                    <label>Password</label>
                    <input type="password" name="senha" placeholder="Senha" required>
                </div>

                <div class="card-terms">
                    <label><input type="checkbox" required>I have read and accept all DevDrop privacy terms</label>
                </div>

                <div class="card-group btn">
                    <button type="submit">Continue</button>
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

.img_new_account {
    border-radius: 15px;
    box-shadow: rgb(119, 68, 121);
    border-color: rgb(119, 68, 121);
    display: inline-block;
    padding-top: 20px;
    margin-left: 50px;
    width: 500px;
    height: 500px;
}
.form_new_account {
    margin-left: 100px;
    background-color: black;
    display: inline-block;
    margin-top: 30px;

}

.form_new_account {
    background-image:linear-gradient(to right, rgb(71, 71, 179), rgb(43, 14, 231));
    padding: 30px;
    border-radius: 5px;
}

.card-account {
    margin-bottom: 10px;
}

.card-account>label {
    color: #ccc;
    width: 300px;
    display: block;
}

.card-account>input {
    border-radius: 5px;
    outline: 0;
    width: 325px;
    height: 25px;
    padding: 5px;
}

.card-terms {
    color: #ccc;
}
</style>