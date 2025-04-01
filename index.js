'use strict';
//gameloop

const { Mascota } = require('./bosque_encantado/roles/mascotas/Mascota.js');
const { Domador } = require('./bosque_encantado/roles/Domador.js');

let mascota1 = new Mascota({cuernos: true, edad: 10})
let mascota2 = new Mascota({cuernos: true, edad: 10})
let mascota3 = new Mascota({cuernos: false, edad: 10})

let domador = new Domador({mascotas: [mascota1,mascota2,mascota3]})

let main = ()=>{
    console.log(domador.getExtra())
}

while (true){
    main()
    break
}