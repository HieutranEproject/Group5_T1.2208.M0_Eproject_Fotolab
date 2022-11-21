function showInfo(){
    var firstN = document.getElementById('firstN').value;
    var lastN = document.getElementById('lastN').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var addr = document.getElementById('addr').value;
    var payM = document.getElementsByClassName('payM');

    var payArray = [];
        for (var i=0; i < payM.length; i++)
    {
        if (payM[i].checked)
        {
            payArray.push(payM[i].value);
        }
    }

    alert("FOTOLAB Thank you for your support" + "\nPlease check your infomation below:" + 
        "\nName: " + firstN + lastN +
        "\nAddress: " + addr +
        "\nEmail: " + email + 
        "\nPhone number: " + phone +
        "\nPayment method: " + payArray)

        var result = confirm("Thank you for purchasing our product(s) at FOTOLAB! Your payment has been confirmed \nOrders will be delivered within 30 days");
        if (result){
            window.location.href="../HTML/home.html";
        }

  return false;
    }