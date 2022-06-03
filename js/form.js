const formulario = document.getElementById("form_contacto")
formulario.addEventListener("focus",(evento)=>{
    evento.target.style.background="#f2f2f2"
},true)
formulario.addEventListener("blur",(evento)=>{
    evento.target.style.background="white"
},true)
function boton_contacto() {
    alert("Gracias por tus comentarios,\nnos contactaremos lo mas pronto posible ;)");
}
const password = document.getElementById("password")
function ver_contraseña(){
    password.value="pito"
}
