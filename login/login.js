<!--//
/*This Script allows people to enter by using a form that asks for a UserID and Password*/
function login(form) {
  if (form.id.value=="John") { 
    if (form.pass.value=="1234") {              
      location="./secure/index.html" 
    } else {
      alert("Invalid Password")
    }
  } else {  alert("Invalid UserID")
         }
}
//-->
