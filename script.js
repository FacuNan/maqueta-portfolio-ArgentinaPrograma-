var text = document.getElementById('texto')
var button = document.querySelector('.button')
var informacion =document.querySelector('.informacionP')
var blockC=text.style.display=='block'
var none=text.style.display='none'



text.addEventListener('keyup', (e)=>{
    if(e.key==='Enter' && text.style.display=='block' ){
        text.style.display='none'
    }else{
        text.style.display='block'
    }
});

button.addEventListener('click', (e)=>{
    if(e.type==='click' && text.style.display=='block'){
        text.style.display='none'
    }else{
        text.style.display='block'
    }
});

text.addEventListener('keyup', (event)=>{
    var textInfo= event.path[0].value.toUpperCase();
   informacion.innerHTML=textInfo;
  
})

/*Nombre*/

var texto=document.getElementById('textoPer')
var button=document.querySelector('.infoPersonal')
var nombre = document.querySelector('.nombre')

texto.addEventListener('keyup', (event)=>{
    if(event.key==='Enter' && texto.style.display=='block'){
        texto.style.display='none'
    }else{
        texto.style.display='block'
    }
});

button.addEventListener('click', (event)=>{
    if(event.type==='click' && texto.style.display=='block' ){
        texto.style.display='none'
    }else{
        texto.style.display='block'
    }
    
})

texto.addEventListener('keyup', (event)=>{
 var textoInput=event.path[0].value.toUpperCase();
    document.querySelector('.nombre').innerHTML=textoInput
 
 
 
})


