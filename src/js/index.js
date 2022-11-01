const form = document.getElementById("formulario")
const inputSubmit = document.getElementById('input-submit')
const rating = document.querySelectorAll('.input-radio')
const avaliacaoPagina = document.querySelector('.avaliacao')
const thanksPagina = document.querySelector('.thank-you')
const rates = document.getElementById('rate')

form.addEventListener('submit', function (){
   event.preventDefault();
   avaliacaoPagina.classList.remove('selecionada')
   thanksPagina.classList.add('selecionada')

   for (let i = 0; i < rating.length; i++) { 
    if (rating[i].checked) { 
      rates.innerHTML = rating[i].value;
    }
}})

