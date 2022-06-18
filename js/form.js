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
    password.value="test"
}
function iniciar_sesion(){
    const formulario1 = document.forms["form_ini"]
    let nombre_usuario = formulario1.elements["user"]
    document.getElementById("login").innerHTML = `Hola, Bienvenido ${nombre_usuario.value}`
    const resultado_usuario = document.getElementById("login")
    if (resultado_usuario.style.display === "none") {
        resultado_usuario.style.display = "block";
      } else {
        resultado_usuario.style.display = "none";
      }
    
}
