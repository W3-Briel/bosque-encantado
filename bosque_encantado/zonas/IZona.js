class IZona {
    zonaNombre;
    colonia;
    constructor({nombre,colonia = undefined}){
        this.zonaNombre = nombre
        this.colonia = colonia

        if(new.target == IZona){
            throw Error("no puedes instanciar una interfaz")
        }
    }

    getColonia(){
        throw Error("Debes implementar el metodo getColonia")
    }
    getEstado(){
        throw Error("Debes implementar el metodo getEstado")
    }
}

module.exports = { IZona }