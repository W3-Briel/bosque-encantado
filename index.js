'use strict';
//gameloop

const { Mascota } = require('./bosque_encantado/roles/mascotas/Mascota.js');

let mascota1 = new Mascota({cuernos: true, edad: 10})

let main = ()=>{
    console.log(mascota1.toString())
}

while (true){
    main()
    break
}