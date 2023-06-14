let user=document.getElementById("name");
let id=document.getElementById("id");
let password=document.getElementById("password1");
let conform_pass=document.getElementById("password2");
function validation(){
    if(password.value==conform_pass.value){
        alert("Registeration is successfull");
        person(user.value,password.value);
        
    }
    else{
        alert("password does not match");
        return false;
    }
}
function person(use,pass){
  /*person[i]=[use,pass];
  console.log(person[0][0],person[0][1]);    
  i++;*/
  var arr1=[use];
  


  return true;
}
