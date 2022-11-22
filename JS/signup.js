function signup(e){
    event.preventDefault();

    var email = document.getElementById('email').value;
    var username =document.getElementById('username').value;
    var password=document.getElementById('password').value;

    var user= {
        username : username,
        email: email,
        password: password,
    }
    var json= JSON.stringify(user);
    localStorage.setItem(username,json);
    alert("sign up successfully");
    window.location.href='../HTML/home.html'
}



function login(e){
    event.preventDefault();
    // var email = document.getElementById('email').value;
  
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;

    var user=localStorage.getItem(username);
    
    var data=JSON.parse(user);

    if(username=='' || password==''){
        alert("please enter your username and password");
    }
    else if(user==null){
        alert("Your account does not exist, please register or check your username and password");
    }
    else if(username==data.username && password!=data.password){
        alert("Wrong password, please check and enter your password again");
    }
    else if(username==data.username && password==data.password){
        alert("login successfully");
        sessionStorage.setItem("uname",username)
        
        document.getElementById("user-name").innerHTML=sessionStorage.uname;
    }   
     
}
