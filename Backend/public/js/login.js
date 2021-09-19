

function login_validate(){
    let uname=document.getElementById('username');
    let pswd=document.getElementById('password');
    let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    let regexp_email=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]).([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(!regexp_email.test(uname.value)){
        document.getElementById('error1').innerHTML="<pre style='color:red;'>Email Invalid</pre>"
        return false;
        
    }
    if(!passw.test(pswd.value)){
        document.getElementById('error2').innerHTML='<pre style="color:red;">Invalid password</pre>';
        return false;
        
    }
    else{
        return true;
    }
}

function signup_validate()
{
  let regexp_email=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]).([a-z]{2,3})(.[a-z]{2,3})?$/;
  let email=document.getElementById('username');
  let pswd1=document.getElementById('password1');
  let pswd2=document.getElementById('password2');
  let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
 
  if(!regexp_email.test(email.value)){
    document.getElementById('error1').innerHTML="<pre style='color:red;'>Email Invalid</pre>";
    return false;
    
  }
  else{
    document.getElementById('error1').innerHTML='<pre style="color:green;">Valid Email</pre>'
    
  }
  
  if(!passw.test(pswd1.value.trim())){
    
    document.getElementById('error2').innerHTML="<pre style='color:red;'>Password must be atleast 8 characters, atleast one uppercase, and one lower case and must contain at least one number</pre>";
    return false;
  
  }
  if(pswd1.value.trim()!=pswd2.value.trim()){
    document.getElementById('error3').innerHTML="<pre style='color:red;'>Password doesn't match</pre>";
    return false;
  }
  else{
    return true;
  }
}

// $(".reveal").on('click',function() {
//   var $pwd = $(".pwd");
//   if ($pwd.attr('type') === 'password') {
//       $pwd.attr('type', 'text');
//   } else {
//       $pwd.attr('type', 'password');
//   }
// });