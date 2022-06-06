var btn = document.querySelector('#action-btn');
var formu = document.querySelector('#forms');
var page2 = document.querySelector('#new-page');
var btn2 = document.querySelector('#action-btn-2');


/*Lógica primeiro botão*/
btn.addEventListener('click', function() {

    if(page2.style.display = 'none'){
       page2.style.display = 'block';
    }

})

btn.addEventListener('click', function() {

    if(formu.style.display = 'block'){
       formu.style.display = 'none';
    }

})

/*Lógica Segundo Botão*/

btn2.addEventListener('click', function() {

    if(page2.style.display = 'block'){
       page2.style.display = 'none';
    }

})

btn2.addEventListener('click', function() {

    if(formu.style.display = 'none'){
       formu.style.display = 'block';
    }

})

const form = document.getElementById('form')

form.addEventListener('submit', e => {
    e.preventDefault()
})



/*VALIDATIONS*/


/*NAME*/
function errorname(){
    var errorname = document.getElementById("validation-name");
    errorname.style.display = "block"; 
 }

 function ocultname(){
    var ocultname = document.getElementById("validation-name");
    ocultname.style.display = "none"; 
 }


btn.addEventListener('click', function nameclick() {
    var name = document.querySelector('#name')
    if (name.value == "Matheus Grigoleto"){
        formu.style.display = 'none';
        ocultname();
    }else {
        errorname();
        formu.style.display = 'block';
        page2.style.display = 'none';
    }
})  

/*Local Storage*/
btn.addEventListener('click', function (){
    let user = JSON.parse(localStorage.getItem('user') || '[]')
    let name = document.querySelector('#name');
  user.push(
    {
        
        nome: name.value,
        email: email.value,
        phone: phone.value,
        password: password.value,
        age: birthday.value
    }
    )
    localStorage.setItem('user', JSON.stringify(user))

})
    
    

/*EMAIL*/

function erroremail(){
    var erroremail = document.getElementById("validation-email");
    erroremail.style.display = "block"; 
 }

 function ocultemail(){
    var ocultemail = document.getElementById("validation-email");
    ocultemail.style.display = "none";
 }


btn.addEventListener('click', function emailclick() {
    var email = document.querySelector('#email')
    if (email.value == "foo@bar.com"){
        ocultemail();
        nameclick() == true;
        formu.style.display = 'none';  
    }else {
        erroremail();
        formu.style.display = 'block';
        page2.style.display = 'none';
    }

 })


 /*PHONE*/

 function errorphone(){
    var errorphone = document.getElementById("validation-phone");
    errorphone.style.display = "block"; 
 }

 function ocultphone(){
    var ocultphone = document.getElementById("validation-phone");
    ocultphone.style.display = "none";
 }


btn.addEventListener('click', function phoneclick() {
    var phone = document.querySelector('#phone')
    if (phone.value == "(54) 99626-9468"){
        ocultphone();
        nameclick() == true;
        emailclick() == true;
        formu.style.display = 'none';  
    }else {
        errorphone();
        formu.style.display = 'block';
        page2.style.display = 'none';
    }

 })

 /*PASSWORD*/

 function errorpassword(){
    var errorpassword = document.getElementById("validation-password");
    errorpassword.style.display = "block"; 
 }

 function ocultpassword(){
    var ocultpassword = document.getElementById("validation-password");
    ocultpassword.style.display = "none";
 }


btn.addEventListener('click', function passwordclick() {
    var password = document.querySelector('#password')
    if (password.value == "678876"){
        ocultpassword();
        nameclick() == true;
        emailclick() == true;
        phoneclick() == true;
        formu.style.display = 'none';  
    }else {
        errorpassword();
        formu.style.display = 'block';
        page2.style.display = 'none';
    }

 })

 /*BIRTHDAY*/

 function errorbirthday(){
    var errorbirthday = document.getElementById("validation-birthday");
    errorbirthday.style.display = "block"; 
 }

 function ocultbirthday(){
    var ocultbirthday = document.getElementById("validation-birthday");
    ocultbirthday.style.display = "none";
 }


btn.addEventListener('click', function birthdayclick() {
    var birthday = document.querySelector('#birthday')
    if (birthday.value == "2002/16/04"){
        ocultbirthday();
        nameclick() == true;
        emailclick() == true;
        phoneclick() == true;     
        passwordclick() == true;   
        formu.style.display = 'none';  
    }else {
        errorbirthday();
        formu.style.display = 'block';
        page2.style.display = 'none';
    }

 })



 /*Checkbox*/
 function errorcheckbox(){
    var errorcheckbox = document.getElementById("validation-checkbox");
    errorcheckbox.style.display = "block"; 
 }

 function ocultcheckbox(){
    var ocultcheckbox = document.getElementById("validation-checkbox");
    ocultcheckbox.style.display = "none";
 }


btn.addEventListener('click', function checkboxclick() {
    var checkbox = document.querySelector('#checkbox')
    if (checkbox.checked == true){
        ocultcheckbox();
        nameclick() == true;
        emailclick() == true;
        phoneclick() == true;     
        passwordclick() == true;
        birthday() == true;   
        formu.style.display = 'none';  
    }else {
        errorcheckbox();
        formu.style.display = 'block';
        page2.style.display = 'none';
    }

 })

 /*MASK PHONE*/
 function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
    v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
    return v;
}
function id( el ){
	return document.getElementById( el );
}
window.onload = function(){
	id('phone').onkeyup = function(){
		mascara( this, mtel );
	}
}
 

/*MASK DATA*/
var input = document.querySelectorAll('#birthday')[0];
  
var dateInputMask = function dateInputMask(elm) {
  elm.addEventListener('keypress', function(e) {
    if(e.keyCode < 47 || e.keyCode > 57) {
      e.preventDefault();
    }
    
    var len = elm.value.length;
    
    // If we're at a particular place, let the user type the slash
    // i.e., 12/12/1212
    if(len !== 1 || len !== 3) {
      if(e.keyCode == 47) {
        e.preventDefault();
      }
    }
    
    // If they don't add the slash, do it for them...
    if(len === 4) {
      elm.value += '/';
    }

    // If they don't add the slash, do it for them...
    if(len === 7) {
      elm.value += '/';
    }
  });
};
  
dateInputMask(input);

/*DATAPICKER*/

/*RESET FORM*/
btn2.addEventListener('click', function() {
    form.reset();
 })