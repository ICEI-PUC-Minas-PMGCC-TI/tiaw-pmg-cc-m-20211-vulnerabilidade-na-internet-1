
 function getPassword() {
    var letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ@#$";
    var password = " ";
  
    for (var i = 0; i < 8; i++) {
        password += Math.floor(Math.random() * 10);
        password += letras.charAt(Math.floor(Math.random() * 57));
    }
    document.getElementById('password').value = password
  }