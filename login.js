function checkData(){
    var enterusername = document.getElementById('uname').value;
    var enterpassword = document.getElementById('pwd').value;

    var getUsername = localStorage.getItem('Username');
    var getPwd = localStorage.getItem('Userpwd');

    if(enterusername == getUsername ){
        if(enterpassword == getPwd){
            alert("Login Successful");
        }
           
        else{
            alert("Incorrect Password");
        }
        
    }
    else{
        alert("Invalid Credentials");
    }
}