var professional = document.getElementById('professional')
var master = document.getElementById('master')
var basic = document.getElementById('basic')
var button__header = document.getElementById('changePrice')
var button__img = document.getElementById('button__img')

function changeToMonthly() {
    if(professional.innerText != '$24.99') {
    professional.innerText = '$24.99'
    basic.innerText = '$19.99'
    master.innerText = '$39.99'
    button__header.classList.remove('yearly')
    button__header.classList.add('monthly')
    button__img.classList.remove('yearly__img')
    button__img.classList.add('monthly__img') 
    }
    else {
    professional.innerText = '$249.99'
    basic.innerText = '$199.99'
    master.innerText = '$399.99'
    button__header.classList.add('yearly')
    button__header.classList.remove('monthly')
    button__img.classList.add('yearly__img')
    button__img.classList.remove('monthly__img') 
    }
}