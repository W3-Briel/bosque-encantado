class Mascota {
    cuernos;
    edad;

    constructor({cuernos,edad}){
        this.cuernos = cuernos
        this.edad = edad
    }

    hasCuernos(){ return this.cuernos}
    getEdad(){ return this.edad}

    toString(){
        return `mascota -> cuernos: ${this.hasCuernos()}\t Edad: ${this.getEdad()}`
    }
}

module.exports = { Mascota }