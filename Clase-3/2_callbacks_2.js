const operacionesMemoria = (objMemoria, cantidad, callback) => {
    let respuesta = callback(objMemoria, cantidad)

    let informe = {
        idRegistro: respuesta.objMemoria.idRegistro,
        tipo: respuesta.objMemoria.tipo,
        capacidadMB: respuesta.objMemoria.capacidadMB,
        memoriaUso: respuesta.objMemoria.memoriaUso,
        hora: new Date(),
        informeMsg: respuesta.mensaje
    }
    console.log(informe)
};

const asignarMemoria = (objMemoria, cantAsignar) => {
    if((objMemoria.memoriaUso + cantAsignar) > objMemoria.capacidadMB) {
        return {objMemoria, estado: false, mensaje:'Memoria insuficiente'}
    } else {
        objMemoria.memoriaUso += cantAsignar;
        return {objMemoria, estado: true, mensaje:'Memoria asignada satisfactoriamente'}
    }
};

const liberarMemoria = (objMemoria, cantLiberar) => {
    if(cantLiberar > objMemoria.memoriaUso) {
        return {objMemoria, estado: false, mensaje:'Memoria no liberada'}
    } else {
        objMemoria.memoriaUso -= cantLiberar;
        return {objMemoria, estado: true, mensaje:'Memoria liberada satisfactoriamente'}
    }
};

const ADATA128 = {
    idRegistro: 'USA7652574HTG6F',
    tipo: 'SSD',
    capacidadMB: 132144,
    memoriaUso: 0
};

const ADATA256 = {
    idRegistro: 'USA7652574HTG6F',
    tipo: 'SSD',
    capacidadMB: 262144,
    memoriaUso: 0
};

operacionesMemoria(ADATA128, 204800, asignarMemoria);
operacionesMemoria(ADATA256, 204800, asignarMemoria);
operacionesMemoria(ADATA256, 102400, liberarMemoria);