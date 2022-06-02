// const fields = document.querySelectorAll("[required]")

// //console.log(fields)

// function customValidation(event){

//     // eliminar o bubble
//     event.preventDefault()



//     const field = event.target

//     //logica para verificar se existem erros
//     function verifyErrors(){
//         let foundError = false;
        
//         for(let error in field.validity){
//             // se não for customError
//             // então verifica se tem erro
//             if (field.validity[error] && field.validity.valid){
//                 foundError = error
//             }

//         }
//         return foundError
//     }

//     const error = verifyErrors()


//     const spanError = field.parentNode.querySelector("span.error")

//     if(error) {
//         spanError.classList.add("active")
//         spanError.innerHTML = "Campo Obrigatório"

//     } else {
//         spanError.classList.remove("active")
//         spanError.innerHTML = ""
//     }

// }

// for( field of fields){
//     field.addEventListener("invalid", customValidation)
//     field.addEventListener("blur", customValidation)
// }
 
