const arregloMoto=[
]
function actualizar_carrito(){
    let texto=""
    for(let item of arregloMoto){
        texto += `<li>${item.modelo}</li>`
    }
    document.getElementById("carrito-compra").innerHTML= texto
}

function limpiar_carrito(){
    let texto=""
    document.getElementById("carrito-compra").innerHTML= texto
    arregloMoto.splice(0, 100)
}

function comprar(){
    const lista = document.getElementById("motos");
    const indiceSeleccionado = lista.selectedIndex;
    const opcionSeleccionada = lista.options[indiceSeleccionado];
    const textomodelo = opcionSeleccionada.text;
    const valormodelo = opcionSeleccionada.value;
    console.log(textomodelo, valormodelo)
    const nvomoto = new Motos(opcionSeleccionada.text)
    arregloMoto.push(nvomoto)
    actualizar_carrito()   
}

// ingresos - egresos
const ingresos = [
  ]
  
  const egresos = [
    new Egreso('MOTO MT-09', 325000),
    new Egreso('MOTO MT-15', 124000),
  ]
  
  let cargarApp = () => {
      cargarCabecera()
      cargarIngresos()
      cargarEgresos()
  }
  
  let totalIngresos = () => {
    let totalIngresos = 0
    for(let ingreso of ingresos) {
      totalIngresos += ingreso.valor
    }
    return totalIngresos
  }
  
  let totalEgresos = () => {
    let totalEgresos = 0
    for(let egreso of egresos) {
      totalEgresos += egreso.valor
    }
    return totalEgresos
  }
  
  let cargarCabecera = () => {
      console.log('*****************')
      let presupuesto = totalIngresos() - totalEgresos()
      console.log(presupuesto)
      let porcentajeEgreso = totalEgresos() / totalIngresos()
      console.log('PORCENTAJE') 
      document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto)
      document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso)
      document.getElementById('ingresos').innerHTML = `+ ${totalIngresos()}`
      document.getElementById('egresos').innerHTML = `- ${totalEgresos()}`
      
  }
  
  const formatoMoneda = (valor) => {
    return valor.toLocaleString('en-US', {style:'currency', currency: 'USD', minimumFractionDigits:2})
  }
  
  const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('en-US', {style:'percent', minimumFractionDigits:2})
  }
  
  const cargarIngresos = () =>{
    let ingresosHTML = ''
    for(let ingreso of ingresos) {
      ingresosHTML += crearIngresoHTML(ingreso)
    }
    document.getElementById('lista_ingresos').innerHTML = ingresosHTML
  }
  
  const cargarEgresos = () =>{
    let egresosHTML = ''
    for(let egreso of egresos) {
      egresosHTML += crearEgresoHTML(egreso)
    }
    document.getElementById('lista_egresos').innerHTML = egresosHTML
  
  }
  
  const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
      <div class="elemento_descripcion">${ingreso.descripcion}</div>
      <div class="derecha limpiarEstilos">
        <div class="elemento_valor">+ ${ingreso.valor}</div>
          <div class="elemento_eliminar">
            <button class="elemento_eliminar-btn">
            <ion-icon name="close-circle-outline"
              onclick = 'eliminarIngreso(${ingreso.id})'></ion-icon>
          </button>
        </div>
      </div>
    </div>
    `
    return ingresoHTML
  }
  
  const crearEgresoHTML = (egreso) => {
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
      <div class="elemento_descripcion">${egreso.descripcion}</div>
      <div class="derecha limpiarEstilos">
        <div class="elemento_valor">- ${egreso.valor}</div>
          <div class="elemento_eliminar">
            <button class="elemento_eliminar-btn">
            <ion-icon name="close-circle-outline"
              onclick = 'eliminarEgreso(${egreso.id})'></ion-icon>
          </button>
        </div>
      </div>
    </div>
    `
    return egresoHTML
  
  
  }
  const eliminarIngreso = (id) => {
      let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id)
      ingresos.splice(indiceEliminar, 1)
      cargarCabecera()
      cargarIngresos()
  }
  const eliminarEgreso = (id) => {
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id)
    egresos.splice(indiceEliminar, 1)
    cargarCabecera()
    cargarEgresos()
  }
  let agregarDato = () =>{
    let form = document.forms['form']
    let tipo = form['tipo']
    let descripcion = form['descripcion']
    let valor = form['valor']
    if (tipo.value == 'ingreso') {
      ingresos.push(new Ingreso(descripcion.value, +valor.value))
      cargarCabecera()
      cargarIngresos()
    } else{
      egresos.push(new Egreso(descripcion.value, +valor.value))
      cargarCabecera()
      cargarEgresos()
    }
  }