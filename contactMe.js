var err = true;


    var peru = document.getElementById("name");
    var specialChar = document.getElementById("special");
    peru.addEventListener("input",function(event){
        console.log(event.target.value)
        var constraints = /^[A-Z][A-Za-z .]{3,30}$/;
        var eve = event.target.value
        var result = constraints.test(eve)
        if(result) {
            specialChar.style.display="none"
        }
        else{
            document.getElementById("special").innerHTML="Name should start with caps<br> & shouldn't contain special characters";
            err = false;
        }
        console.log(result) 
    })
    console.log(peru)

    var mailId = document.getElementById("mail");
    var mailFormat = document.getElementById("format");
    mailId.addEventListener("input",function(event) {
        console.log(event.target.value)
        var constraint = /^[a-zA-Z0-9+_.-]+@[a-z]{5,10}.[a-z]{2,5}$/;
        var eve = event.target.value
        var resul = constraint.test(eve)
        if(resul) {
            mailFormat.style.display="none"
        }
        else{
            document.getElementById("format").innerHTML="Mail ID should be of XXX@XXX format"
            err = false;
        }
        console.log(resul)
    })

    var mobileNumber = document.getElementById("mobile");
    var digits = document.getElementById("limit");
    mobileNumber.addEventListener("input",function(event) {
        console.log(event.target.value)
        var constrain = /^[0-9]{10}$/;
        var eve = event.target.value
        var resu = constrain.test(eve)
        if(resu) {
            digits.style.display="none"
        }
        else{
            document.getElementById("limit").innerHTML="Number should be of 10 digits"
            err = false;
        }
        console.log(resu)
    })

    var zipCode = document.getElementById("zip");
    var code = document.getElementById("pincode");
    zipCode.addEventListener("input",function(event) {
    console.log(event.target.value)
    var constrain = /^[0-9]{6}$/;
    var eve = event.target.value
    var resu = constrain.test(eve)
    if(resu) {
        code.style.display="none"
    }
    else{
        document.getElementById("pincode").innerHTML="Numeric 6 digit zipcode"
        err = false;
    }
    console.log(resu)
})
function checking(){
                if(err == true){
                    function data() {
                        var nameGiven = document.getElementById("name").value;
                        var mail = document.getElementById("mail").value; 
                        var mobile = document.getElementById("mobile").value;
                        var zip = document.getElementById("zip").value;
                        var message = document.getElementById("area").value;
                        alert("Name:"+ nameGiven +"\n"+ "Email:" + mail +"\n"+ "Mobile:" + mobile +"\n"+ "Zipcode:" + zip +"\n"+ "Message:" + message);
                    
                }
                data();
                }
                else{
                    alert("data not submitted , check again!");
                }
            }
/*function data() {
          var nameGiven = document.getElementById("name").value;
          var mail = document.getElementById("mail").value; 
          var mobile = document.getElementById("mobile").value;
          var zip = document.getElementById("zip").value;
          var message = document.getElementById("area").value;
          alert("Name:"+ nameGiven +"\n"+ "Email:" + mail +"\n"+ "Mobile:" + mobile +"\n"+ "Zipcode:" + zip +"\n"+ "Message:" + message);
        
    }*/


/* var popUp = document.getElementById("data");
    var nameGiven = document.getElementById("name").value;
    var mail = document.getElementById("mail").value; 
    var mobile = document.getElementById("mobile").value;
    var zip = document.getElementById("zip").value;
    var message = document.getElementById("area").value;

function display() {
    document.getElementById("name").innerHTML = nameGiven
    popUp.classList.add("open-pop")


}*/