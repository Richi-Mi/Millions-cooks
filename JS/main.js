const btn_cooks = document.getElementById('icono-comida');
const search = document.getElementById('buscador');
const btnLupa = document.getElementById('boton');
const Foto = document.getElementById('Perfil-Temporal');

btnLupa.addEventListener('click', buscar);

function buscar(evento){
    let contenido = search.value;
    
    console.log(contenido);
}