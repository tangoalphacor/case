let uname=document.getElementById("user");
let pswd=document.getElementById("password");

function validation(callback){
    
    if(user.value==""&&password.value=="")
    {
        alert("Enter valid credentials");
        return false;
        
    }

     else if(user.value=="admin"&&password.value=="12345")
     {
        alert("successful login");
        callback();
        return true;
        
        
    }
    else
    {
alert("invalid credentials");
return false;
    }

}
function redirect(){
    if(user.value=="admin"&&password.value=="12345"){
        window.location.href="todolist.html";
    }
  
}
