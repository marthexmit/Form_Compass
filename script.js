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
