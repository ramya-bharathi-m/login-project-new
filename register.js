function addData(){
    var username = document.getElementById('uname').value;
    var password = document.getElementById('pwd').value;

    localStorage.setItem('Username',username);
    localStorage.setItem('Userpwd',password);
}