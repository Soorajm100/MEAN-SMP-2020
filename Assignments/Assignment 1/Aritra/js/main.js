var count = 0;
//to count the No. of attempts  
function generateNumber(y) //To generate a random number
{
    if (count == 0) {


        var m = Number(y);
        console.log(y);
        x = Math.floor(Math.random() * (101));
        diff(x, m)
        // console.log(x + " " + y);
        count++;
    }
    else
        alert("Only one attempt is allowed");
}
function diff(p, q)  //Calculatioon of discount
{
    if (p > q) {
        disc = p - q;
    }
    else {
        disc = q - p;
    }

    document.getElementById("random").innerHTML = "Random no.= " + p;
    document.getElementById("selected").innerHTML = "Selected no.= " + q;
    document.getElementById("discount").innerHTML = "Discount= " + disc + "%";
}
function validateName(inpname)                  //Validation criteria for name
{

    var regex = /^[a-zA-Z" "]{2,30}$/;
    console.log(inpname);
    if (regex.test(inpname)) {
        return true;


    }
    else {
        alert("No.s are not allowed in the name");
        return false;
    }


}
function validateEmail(inpmail) {
    at = inpmail.indexOf("@");
    dot = inpmail.lastIndexOf(".");
    console.log(at + " " + dot);

    if ((at < 1) || (dot < 1) || ((dot - at) < 2)) {
        alert("Please Enter the correct email Id");
        return false;
    }
    return true;
}
function validatePhone(inpphone) {
    var y = /^\d{10}$/;
    if (inpphone.match(y))
        return true;
    else {
        alert("Phone no. not valid");
        return false;
    }
}
function validatePassword(p1, p2) {
    if (p1 == p2)
        return true;
    else {
        alert("Passwords do not match");
        return false;
    }

}


function validateSignUp()              //To check the validation of sign up form
{
    var x = document.forms["signupform"];
    if (!validateName(x.fname.value))
        return false;
    if (!validateEmail(x.mail.value))
        return false;
    if (!validatePhone(x.phone.value))
        return false;
    if (!validatePassword(x.password.value, x.password2.value))
        return false;
    alert("Account Created!!")
    return true;



}
function validateSubscribe() {
    var x = document.subform;
    if (!validateName(x.fname.value))
        return false;
    if (!validateEmail(x.mail.value))
        return false;
    if (!validatePhone(x.phone.value))
        return false;
    if (x.period.value == null) {
        alert("Please choose a period of subscription ");
        return false
    }

    displayPrice();
    return true;


}
function displayReview() {
    var doc = document.reviewform;
    var name = doc.fname.value;
    var content = doc.content.value;

    var x = document.getElementById('dispreview');


    if (validateName(name)) {
        var node = document.createTextNode(content + " -" + name);
        var para = document.createElement("p");
        para.appendChild(node);
        x.appendChild(para);
    }
}
function displayPrice() {
    var x = Number(document.subform.period.value);
    var price = x * disc / 100;
    var y = document.getElementById("sub");
    var para = document.createElement("P");
    var node = document.createTextNode("The total amount to be paid is: " + price);
    para.appendChild(node);
    para.id = "price";
    y.appendChild(para);
}