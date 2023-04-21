const form = document.querySelector('#contact-us');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const subjectInput = document.querySelector('#subject');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event)=> {
   
         
         validateForm();
         
         if(isFormValid() === true)
         {
            form.submit();
         }
         
         else{
            event.preventDefault();
         }

});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group');
     let result = true;
     inputContainers.forEach((container)=>{
         if(container.classList.contains('error')){
             result = false;
         }
     });
     return result;
}


 function validateForm() {
     //USERNAME .- NOMBRE DE USUARIO
     const patronNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
     const patronAsunto = /\`|\~|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\/|\""|\;|\:/;
     const patronMensaje = /\`|\~|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\>|\/|\""|\;|\:/gm;
     if ( patronNombre.test(usernameInput.value) === false )
     {
          setError(usernameInput, "Escribe tu nombre, y apellido <<opcional>> de 3 a 20 letras");    
     }
     else
     if(usernameInput.value.length < 3 || usernameInput.value.length > 21){
        setError(usernameInput, "Escribe tu nombre, y apellido <<opcional>> de 3 a 20 letras");    
     }
     else {
         setSuccess(usernameInput);
     }
     
     //EMAIL
     if(emailInput.value.trim() === '')
     {
        setError(emailInput, "Por favor, proporcione un email válido");
     }
     else if(isEmailValid(emailInput.value))
     {
        setSuccess(emailInput);
     }
     
     //SUBJECT  messageInput
     if ( patronAsunto.test(subjectInput.value) === true )
     {
          setError(subjectInput, "Escribe letras/números/ y los signos.-  (?/!/,/.) <<desde 4 a 20>>");    
     }
     else
     if(subjectInput.value.length < 4 || subjectInput.value.length > 21){
        setError(subjectInput, "Escribe letras/números/ y los signos.-  (?/!/,/.) <<desde 4 a 20>>");    
     }
     else {
         setSuccess(subjectInput);
     }

     //MESSAGE
     if ( patronMensaje.test(messageInput.value) === true )
     {
          setError(messageInput, "Escribe letras/números/ y los signos.-  (?/!/,/.) <<desde 4 a 100>>");    
     }
     else
     if(messageInput.value.length < 4 || messageInput.value.length > 101){
        setError(messageInput, "Escribe letras/números/ y los signos.-  (?/!/,/.) <<desde 4 a 100>>");       
     }
     else {
         setSuccess(messageInput);
     }


 }

 function setError(element, errorMessage){
     const parent = element.parentElement;
     if(parent.classList.contains('success')){
          parent.classList.remove('success');
      }
     parent.classList.add('error');
     const parrafo = parent.querySelector('p');
     parrafo.textContent = errorMessage;
 }

 function setSuccess(element){
     const parent = element.parentElement;
     if(parent.classList.contains('error')){
         parent.classList.remove('error');
     }
     parent.classList.add('success');
 }

function isEmailValid(email){
    const regEmail = /^[\w-.]+@[\w-_]+(\.[a-zA-Z]{2,4}){1,2}$/;
    return regEmail.test(emailInput.value);
}

