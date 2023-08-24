let numero = Math.floor((Math.random()*100)+1);
console.log(numero);

const numeroElegido = document.getElementById('numeroElegido')
const mensaje = document.getElementById('mensaje');
const boton = document.getElementById('boton');


const adivinarNumero = boton.addEventListener('click',()=>{
    let NUMERO = numeroElegido.value
    console.log(NUMERO);
    if(NUMERO == 0 || NUMERO > 100 || isNaN(NUMERO)){
        mensaje.textContent='Ingresa un numero del 1 al 100';
        mensaje.classList.add('red');
        return
    }else if(NUMERO == numero){
        mensaje.textContent = 'Excelente acabas de adivinar el numero';
        console.log('adivinóo');
        mensaje.classList.remove('red');
        mensaje.classList.add('blue');
        return
    }else if(NUMERO > numero){
        mensaje.textContent = 'El numero por adivinar es menor';
        console.log('otra vez');
        mensaje.classList.remove('red');
        mensaje.classList.add('green');
        return
    }else if(NUMERO < numero){
        mensaje.textContent = 'El numero por adivinar es mayor';
        console.log('otra vexx');
        mensaje.classList.remove('red');
        mensaje.classList.add('green');
        return
    }
});


