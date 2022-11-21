// let searchForm = document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick = () =>{
//     searchForm.classList.toggle('active');
//     cart.classList.remove('active');
//     loginForm.classList.remove('active');
//     navbar.classList.remove('active');
// }

// let cart = document.querySelector('.shopping-cart');

// document.querySelector('#cart-btn').onclick = () =>{
//     cart.classList.toggle('active');
//     searchForm.classList.remove('active');
//     loginForm.classList.remove('active');
//     navbar.classList.remove('active');
// }

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    
    cart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    cart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

//Send email
function sendEmail(nameSendEmail,subSendEmail,contSendEmail){
    var fullname=document.getElementById("nameSendEmail");
    var sub=document.getElementById("subSendEmail");
    var cont=document.getElementById("contSendEmail");
    if(fullname==""){
        alert("Type your name")
        return;
    }
    if(sub==""){
        alert("Type your subject")
        return;
    }if(cont==""){
        alert("Type your request")
        return;
    }if(fullname!="" && sub!="" && cont!=""){
        window.location.href="mailto:tranthienhieu146@gmail.com & subject=${sub} & content=${cont}"
    }
}


    

// function store(){
//     var uname = $('#uname').val();
//     sessionStorage.setItem("uname", uname);
// }
