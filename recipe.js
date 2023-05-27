function test(){
    var m_email=document.getElementById("mob_mail");
    var full_name=document.getElementById("fullname");
    var user=document.getElementById("username");
    var pass=document.getElementById("Password");



    var mail=localStorage.setItem("m_email",m_email).value;
    var name=localStorage.setItem("full_name",full_name).value;
    var user=localStorage.setItem("user",user).value;
    var pass=localStorage.setItem("pass",pass).value;


    var a,b,c,d;
    a="8420803535";
    b="Ariyan Banerjee";
    c="ccism";
    d="123";



    if(a==mail && b==name && c==user && d==pass){
        alert("Already Registered User");
    }
    else{
        alert("SignUp successful");
    }
}